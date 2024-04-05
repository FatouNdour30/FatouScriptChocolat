import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal, Form } from 'react-bootstrap';
import { BsHouse, BsPerson, BsListTask, BsEnvelope, BsGear } from 'react-icons/bs';
import logo from '../assets/logo.png'; // Importez votre logo ou image

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top me-2"
              alt="Logo"
            />
            <span className="text-white">DocteurJS</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Liens */}
            <Nav className="me-auto">
              <Nav.Link href="/dashboard"><BsHouse className="me-1" />Accueil</Nav.Link>
              <Nav.Link href="/dashboard/profil"><BsPerson className="me-1" />Profil</Nav.Link>
              <Nav.Link href="/dashboard/problemes"><BsListTask className="me-1" />Problèmes</Nav.Link>
            </Nav>
            {/* Formulaire de recherche */}
            <Form className="d-flex align-items-center">
              <Form.Control
                type="search"
                placeholder="Rechercher..."
                className="mr-2"
                value={searchInput}
                onChange={handleSearchInputChange}
              />
              <Button variant="outline-light">Rechercher</Button>
            </Form>
            {/* Liens à droite */}
            <Nav className="ms-auto">
              <Nav.Link onClick={handleOpenModal}><BsEnvelope className="me-1" />Notifications</Nav.Link>
              <Nav.Link href="/dashboard/parametres"><BsGear className="me-1" />Paramètres</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal de Notifications */}
      <Modal show={openModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Contenu du modal */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
