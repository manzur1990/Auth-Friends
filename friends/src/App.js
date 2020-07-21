import React from 'react';
import './App.css';
import { Login } from './components/Login';
import { Route } from 'react-router-dom';
import { FriendsList } from './components/FriendsList';
import { PrivateRoute } from './utils/PrivateRoute';




function App() {
  return (
    
    <div className="App">
      <h1>Welcome to the Amigos Apps</h1>
      <Route path='/login' component={Login} />
      <PrivateRoute path='/friends-list' component={FriendsList} />

    </div>
  );
}

export default App;
