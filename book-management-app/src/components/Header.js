import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>WhatsApp 3</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
         lista de Contatos
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
         Add Contatos
        </NavLink>
      </div>
    </header>
  );
};

export default Header;