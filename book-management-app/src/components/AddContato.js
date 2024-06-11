import React, { useContext } from 'react';
import ContatoForm from './ContatoForm';
import contatoContext from '../context/contatoContext';

const Addcontato = ({ history }) => {
  const { contato, setcontato } = useContext(contatoContext);

  const handleOnSubmit = (contato) => {
    setcontato([contato, ...contato]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <contatoForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default Addcontato;