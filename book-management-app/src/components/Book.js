import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Book = ({
  id,
  nome,
  telefone,
  email,
  datanascimento,
  handleRemovecontato
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{nome}</Card.Title>
        <div className="book-details">
          <div>Nome: {telefone}</div>
          <div>telefone: {email} </div>
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

export default Book;