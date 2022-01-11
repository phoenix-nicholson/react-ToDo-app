import { NavLink, Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { getUser } from './services/users';
import React, { useState } from 'react';
import Auth from './views/Auth/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/auth">Login Page</NavLink>
      </header>
      <Switch>
        <Route exact path="/">
          {currentUser && (
            <>
              <p>Logged In</p>
            </>
          )}
          {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
