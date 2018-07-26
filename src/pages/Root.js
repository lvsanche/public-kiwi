import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import withAuthentication from './SharedComponents/auth/withAuthentication';
import App from './App';
const Root = () => (
    <BrowserRouter path='/'>
      <App/>
    </BrowserRouter>
);



export default withAuthentication(Root);
