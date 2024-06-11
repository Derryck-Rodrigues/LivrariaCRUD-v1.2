import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import contatoContext from '../context/contatoContext';
import EditBook from '../components/EditContato';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import AddBook from '../components/AddContato';
import contatoList from '../components/ContatoList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
  const [contato, setcontato] = useLocalStorage('contato', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <contatoContext.Provider value={{ contato, setcontato }}>
            <Switch>
              <Route component={contatoList} path="/" exact={true} />
              <Route component={AddBook} path="/add" />
              <Route component={EditBook} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </contatoContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;