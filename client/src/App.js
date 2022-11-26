import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path={'/'} component={LandingPage}/>
        <Route path={'/home'} component={Home}/>
      </div>
    </BrowserRouter>

  );
}

export default App;
