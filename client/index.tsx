import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import querystring from 'querystring';
import axios from 'axios';

const App = () => {
  return (
    <>
      <div>tacos did i forget this already</div>
      {/* <a href="https://accounts.google.com/o/oauth2/auth?approval_prompt=force&scope=https://mail.google.com/&client_id=74812266400-tgc2tfl6hjpe5g4rmp69lsu0kmue6jvb.apps.googleusercontent.com&redirect_uri=http://localhost:8080/oAuth&response_type=code&access_type=offline&state=<userid>">
        click me to login
      </a> */}
      <a href="http://localhost:3000/auth/google">Sign In with Google</a>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
