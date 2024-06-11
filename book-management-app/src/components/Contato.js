import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const contato = ({
  id,
  nome,
  telefone,
  email,
  datanascimento,
  handleRemovecontato
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="contato">
      <Card.Body>
        <Card.Title className="contato-title">{nome}</Card.Title>
        <div className="contato-details">
          <div>Nome: {nome}</div>
          <div>telefone: {telefone} </div>
          <div>Email: {email} </div>
          <div>Data de nascimento: {new Date(datanascimento).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemovecontato(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default contato;