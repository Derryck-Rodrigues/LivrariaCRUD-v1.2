import React, { useContext } from 'react';
import _ from 'lodash';
import contato from './Contato';
import contatoContext from '../context/contatoContext';

const contatolist = () => {
  const { contato, setcontato } = useContext(contatoContext);

  const handleRemoveBook = (id) => {
    setcontato(contato.filter((contato) => contato.id !== id));
  };

  return (
    <React.Fragment>
      <div className="contato-liste">
        {!_.isEmpty(contato) ? (
          contato.map((contato) => (
            <Book key={contato.id} {...contato} handleRemovecontato={handleRemoveBook} />
          ))
        ) : (
          <p className="message">infelizmente sem contato</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default contatolist;