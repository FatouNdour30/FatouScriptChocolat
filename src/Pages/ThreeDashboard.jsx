import React from 'react';
import { Table } from 'react-bootstrap';
import one from '../assets/one.jpg'; // Importer votre image d'avatar
import two from '../assets/two.jpg'; // Importer votre image d'avatar
import Three from '../assets/Three.jpg'; // Importer votre image d'avatar

const ThreeDashboard = () => {
  return (
    <div className="table-responsive mt-md-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Assignee</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Last Update</th>
            <th>Tracking ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-middle">
              <img src={one} alt="Avatar" className="rounded-circle me-2" width={50} />
              David Grey
            </td>
            <td className="align-middle">Fund is not received</td>
            <td className="align-middle"><span className="badge bg-success">DONE</span></td>
            <td className="align-middle">Dec 5, 2017</td>
            <td className="align-middle">WD-12345</td>
          </tr>
          <tr>
            <td className="align-middle">
              <img src={two} alt="Avatar" className="rounded-circle me-2" width={30} />
              Stella Johnson
            </td>
            <td className="align-middle">High loading time</td>
            <td className="align-middle"><span className="badge bg-warning text-dark">PROGRESS</span></td>
            <td className="align-middle">Dec 12, 2017</td>
            <td className="align-middle">WD-12346</td>
          </tr>
          <tr>
            <td className="align-middle">
              <img src={Three} alt="Avatar" className="rounded-circle me-2" width={30} />
              Marina Michel
            </td>
            <td className="align-middle">Website down for one week</td>
            <td className="align-middle"><span className="badge bg-secondary">ON HOLD</span></td>
            <td className="align-middle">Dec 16, 2017</td>
            <td className="align-middle">WD-12347</td>
          </tr>
          {/* Ajoutez d'autres lignes ici */}
        </tbody>
      </Table>
    </div>
  );
};

export default ThreeDashboard;
