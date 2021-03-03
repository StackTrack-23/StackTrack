import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const App = () => {
  return (
    <>
      <div>tacos did i forget this already</div>
      <a href="http://localhost:3000/auth/google">Sign In with Google</a>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
