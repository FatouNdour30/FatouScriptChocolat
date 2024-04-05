import React from 'react';
import Grid from '@mui/material/Grid';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardContent from './DashboardContent';
import TwoDash from './TwoDash';
import ThreeDashboard from './ThreeDashboard';

export default function Dashboard() {
  return (
    <Grid container className="dashboard-container">
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      {/* Vue principale avec navigation améliorée */}
      <Grid item xs={9}>
        <div className='main-content'>
          <Header/>
          

          {/* Intégration de la navigation améliorée */}
          {/* Exemple : <SmoothNavigation /> */}
          <DashboardContent />
          <TwoDash/>
          <ThreeDashboard/>
        </div>
      </Grid>
    </Grid>
  );
}
