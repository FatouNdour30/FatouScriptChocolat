import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, List, ListItem, ListItemText, IconButton, TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { DatePicker, DateRangePicker, CalendarPicker } from '@mui/lab';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import EventIcon from '@mui/icons-material/Event';
import NoteIcon from '@mui/icons-material/Note';
import { format } from 'date-fns';
import frLocale from 'date-fns/locale/fr'; // Importer le package de localisation pour le français

// Composant du calendrier amélioré avec une vue de calendrier interactif
function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const [dateFormat, setDateFormat] = useState('dd/MM/yyyy'); // Format de date par défaut

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateRangeChange = (range) => {
    setSelectedDateRange(range);
  };

  const handleDateFormatChange = (event) => {
    setDateFormat(event.target.value);
  };

  const handleClearSelection = () => {
    setSelectedDate(null);
    setSelectedDateRange([null, null]);
  };

  return (
    <Paper elevation={3} sx={{ padding: 2 }} className='mt-md-5'>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h5">Calendrier</Typography>
        <Button onClick={handleClearSelection} color="primary">Effacer la sélection</Button>
      </Box>
      <Box mb={2}>
        <Typography variant="subtitle1" gutterBottom>Sélection simple de date :</Typography>
        <DatePicker
          label="Choisir une date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
          views={['year', 'month', 'day']}
          minDate={new Date('2000-01-01')}
          maxDate={new Date('2100-12-31')}
          showToolbar
          locale={frLocale} // Utilisation de la locale française
        />
      </Box>
      <Box mb={2}>
        <Typography variant="subtitle1" gutterBottom>Sélection de plage de dates :</Typography>
        <DateRangePicker
          label="Choisir une période"
          value={selectedDateRange}
          onChange={handleDateRangeChange}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}>à</Box>
              <TextField {...endProps} />
            </>
          )}
          minDate={new Date('2000-01-01')}
          maxDate={new Date('2100-12-31')}
          calendars={2}
          showToolbar
          locale={frLocale} // Utilisation de la locale française
        />
      </Box>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="date-format-label">Format de date</InputLabel>
          <Select
            labelId="date-format-label"
            id="date-format"
            value={dateFormat}
            onChange={handleDateFormatChange}
          >
            <MenuItem value="dd/MM/yyyy">dd/MM/yyyy</MenuItem>
            <MenuItem value="dd-MM-yyyy">dd-MM-yyyy</MenuItem>
            <MenuItem value="yyyy-MM-dd">yyyy-MM-dd</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={4}>
        {/* Ajouter des événements et des notes au calendrier */}
        <Typography variant="h6" gutterBottom>Événements et Notes</Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <IconButton color="primary">
            <EventIcon />
          </IconButton>
          <Typography variant="body1">Événement important le 10/04/2024</Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <IconButton color="primary">
            <NoteIcon />
          </IconButton>
          <Typography variant="body1">Note importante pour la réunion</Typography>
        </Box>
      </Box>
    </Paper>
  );
}

// Composant de la TodoList
function TodoListComponent() {
  // Liste de tâches à faire (ici des tâches fictives)
  const [todoList, setTodoList] = useState([
    { id: 1, text: 'Terminer le rapport', completed: false },
    { id: 2, text: 'Répondre aux e-mails', completed: true },
    { id: 3, text: 'Préparer la réunion', completed: false },
    { id: 4, text: 'Faire les courses', completed: false },
    { id: 5, text: 'Appeler le client', completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [filterType, setFilterType] = useState('all'); // Ajout de la gestion du filtre

  const handleTaskCompletion = (taskId) => {
    const updatedList = todoList.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTodoList(updatedList);
  };

  const handleTaskDeletion = (taskId) => {
    const updatedList = todoList.filter(task => task.id !== taskId);
    setTodoList(updatedList);
  };

  const handleTaskEdit = (taskId, newText) => {
    const updatedList = todoList.map(task =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTodoList(updatedList);
  };

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = {
        id: todoList.length + 1,
        text: newTaskText,
        completed: false,
      };
      setTodoList([...todoList, newTask]);
      setNewTaskText('');
    }
  };

  const handleFilterTasks = (filterType) => {
    switch (filterType) {
      case 'all':
        return todoList;
      case 'completed':
        return todoList.filter(task => task.completed);
      case 'active':
        return todoList.filter(task => !task.completed);
      default:
        return todoList;
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 2 }} className='mt-md-5'>
      <Typography variant="h5" gutterBottom>Liste des tâches</Typography>
      <Box mb={2} display="flex" alignItems="center">
        <TextField
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          label="Ajouter une nouvelle tâche"
          variant="outlined"
          size="small"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddTask} style={{ marginLeft: 8 }}>
          Ajouter
        </Button>
      </Box>
      <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group" style={{ marginBottom: 16 }}>
        <Button onClick={() => setFilterType('all')}>Toutes</Button>
        <Button onClick={() => setFilterType('completed')}>Terminées</Button>
        <Button onClick={() => setFilterType('active')}>Actives</Button>
      </ButtonGroup>
      <List>
        {handleFilterTasks(filterType).map(task => (
          <ListItem key={task.id}>
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => handleTaskCompletion(task.id)}>
                {task.completed ? <CheckCircleOutlineIcon color="primary" /> : <CheckCircleOutlineIcon />}
              </IconButton>
              <ListItemText primary={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
              <IconButton onClick={() => handleTaskEdit(task.id, 'Nouveau texte')}>
                <EditIcon color="primary" />
              </IconButton>
              <IconButton onClick={() => handleTaskDeletion(task.id)}>
                <DeleteOutlineIcon color="error" />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

// Composant principal où nous intégrons le calendrier et la TodoList dans une disposition de grille
export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      {/* Grille pour le calendrier */}
      <Grid item xs={12} md={6}>
        <CalendarComponent />
      </Grid>
      {/* Grille pour la TodoList */}
      <Grid item xs={12} md={6}>
        <TodoListComponent />
      </Grid>
    </Grid>
  );
}
