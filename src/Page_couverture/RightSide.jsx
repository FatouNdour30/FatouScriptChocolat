import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate depuis react-router-dom
import { FaCode } from 'react-icons/fa'; // Importer FaCode depuis react-icons/fa

const RightSide = () => {
  const navigate = useNavigate(); // Initialiser navigate pour la redirection

  const handleContinue = () => {
    // Fonction pour gérer le clic sur le bouton Continuer
    // Rediriger vers la page Dashboard
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h1 className='text-center text-primary border-bottom border-primary pb-3'>Docteur Js</h1>
      <div className='text'>
        <h2 className='text-center'>Welcome</h2>
        <h4 className='text-center'>Connexion ou Création de compte en 1 minute</h4>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control size="md" type="email" placeholder="Entrez votre e-mail" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de Passe</Form.Label>
            <Form.Control size="md" type="password" placeholder="Entrez votre mot de passe" required />
          </Form.Group>

          <Form.Group controlId="formProblemType" className="mb-3">
            <Form.Label>
              <FaCode className="icon-code" /> JavaScript Problem Type
            </Form.Label>
            <Form.Select
              aria-label="Select problem type"
              name="problemType"
              required
            >
              <option value="syntaxe">Syntax Errors</option>
              <option value="execution">Execution Issues</option>
              <option value="bugs">Bugs in Code</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid" required>Please select a problem type.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formScreenshot" className="mb-3">
            <Form.Label>Upload Screenshot or Code Snippet</Form.Label>
            <Form.Control
              type="file"
              name="screenshot"
              accept=".png,.jpg,.jpeg,.gif,.txt,.js"
              required
            />
            <Form.Control.Feedback type="invalid">Please upload a screenshot or code snippet.</Form.Control.Feedback>
            <Form.Text className="text-muted">
              Upload a screenshot or a file containing a code snippet.
            </Form.Text>
          </Form.Group>

          <div className="d-flex justify-content-center">
            {/* Appeler handleContinue lors du clic sur le bouton */}
            <Button variant="outline-warning" type="button" onClick={handleContinue}>
              Continuer
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RightSide;
