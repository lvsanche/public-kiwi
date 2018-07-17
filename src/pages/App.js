import React from 'react';
import NavBarContainer from './SharedComponents/NavComponents/NavBarContainer';
import Main from './Main';
import TopContainerBar from './SharedComponents/NavComponents/TopContainer';

const App = () => (
  <div className="appContainer">
    <TopContainerBar/>
    <div className="content">
      <NavBarContainer/>
      <Main />
    </div>
  </div>
);

export default App;
