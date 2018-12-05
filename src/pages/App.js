import React from 'react';
import Main from './Main';
import NavBarContainer from './SharedComponents/NavComponents/NavBarContainer';

const App = () => (
  <div className="appContainer">
    <div className="content">
      <NavBarContainer/>
      <Main/>
    </div>
  </div>
);

export default App;
