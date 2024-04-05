import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsHouse, BsPerson, BsListTask, BsInfoCircle } from 'react-icons/bs';

function Sidebar() {
  return (
    <div className="sidebar-container bg-dark" style={{ minHeight: '360vh' }}>
      <Nav className="flex-column">
        <Nav.Item className="nav-item">
          <Link to="/dashboard" className="nav-link text-light d-flex align-items-center py-3">
            <BsHouse className="me-2" />
            <span>Accueil</span>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/dashboard/profil" className="nav-link text-light d-flex align-items-center py-3">
            <BsPerson className="me-2" />
            <span>Profil</span>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/dashboard/problemes" className="nav-link text-light d-flex align-items-center py-3">
            <BsListTask className="me-2" />
            <span>Problèmes</span>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/dashboard/a-propos" className="nav-link text-light d-flex align-items-center py-3">
            <BsInfoCircle className="me-2" />
            <span>A propos du projet</span>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/dashboard/contact" className="nav-link text-light d-flex align-items-center py-3">
            <BsInfoCircle className="me-2" />
            <span>Contactez-nous</span>
          </Link>
        </Nav.Item>
      </Nav>

      <div className="sidebar-footer p-3 mt-auto">
        <small className="text-warning">© 2024 Nom de l'Application</small>
      </div>
    </div>
  );
}

export default Sidebar;
