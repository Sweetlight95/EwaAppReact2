import React from 'react';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';


function App(props) {
  return (
    <div className="container">
      <RegisterPage/>
      <LoginPage/>
      <HomePage/>
    </div>
  );
}

export default App;
