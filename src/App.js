import { NavLink, Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { getUser, logout } from './services/users';
import React, { useState } from 'react';
import Auth from './views/Auth/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logOutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <BrowserRouter>
      <header></header>
      <Switch>
        <Route exact path="/">
          {currentUser && (
            <>
              <p>Logged In</p>
              <button onClick={logOutUser}>Log Out</button>
            </>
          )}
          {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
