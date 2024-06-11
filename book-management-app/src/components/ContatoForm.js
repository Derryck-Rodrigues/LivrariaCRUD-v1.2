import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const contatoForm = (props) => {
  const [contato, setcontato] = useState({
    nome: props.contato ? props.contato.nome : '',
    email: props.contato ? props.contato.email : '',
    telefone: props.contato ? props.contato.telefone : '',
    datanascimento: props.contato ? props.contato.datanascimento : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { nome, email, telefone, datanascimento } = contato;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [nome, email, telefone, datanascimento];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const contato = {
        id: uuidv4(),
        nome,
        email,
        telefone,
        datanascimento
      };
      props.handleOnSubmit(contato);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { nome, value } = event.target;
    switch (nome) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setcontato((prevState) => ({
            ...prevState,
            [nome]: value
          }));
        }
        break;
      case 'telefone':
        if (value === '') {
          setcontato((prevState) => ({
            ...prevState,
            [nome]: value
          }));
        }
        break;
      default:
        setcontato((prevState) => ({
          ...prevState,
          [nome]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="nome">
          <Form.Label>Nome do contato</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="nome"
            value={nome}
            placeholder="insira o nome da pessoa"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email do contato</Form.Label>
          <Form.Control
            className="input-control"
            type="email"
            name="Email"
            value={email}
            placeholder="insira o email da pessoa"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="telefone">
          <Form.Label>Telefone do contato</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="Telefone"
            value={telefone}
            placeholder="insira o telefone da pessoa"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="datanascimento">
          <Form.Label>Data De Nascimento do contato</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="Data De Nascimento"
            value={datanascimento}
            placeholder="insira a data de nascimento da pessoa"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default contatoForm;