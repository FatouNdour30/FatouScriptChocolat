// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftSide from './Page_couverture/LeftSide';
import RightSide from './Page_couverture/RightSide';
import Dashboard from './Pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row,Col} from 'react-bootstrap';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
    <Container>
      <Row>
        <Col> <LeftSide/></Col>
        <Col><RightSide /></Col>
      </Row>
    </Container>
     
    </>
  );
}

export default App;
