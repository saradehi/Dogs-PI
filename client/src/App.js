import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import CreateDog from './components/CreateDog/CreateDog';
import DeleteDog from './components/DeleteDog/DeleteDog';
import DogDetails from './components/DogDetails/Details';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path={'/'} component={LandingPage}/>
        <Route path={'/home'} component={Home}/>
        <Route exact path={'/dogs/:id'} component={DogDetails} />
        <Route exact path={'/dogs'} component={CreateDog} />
        <Route path={'/deleted'} component={DeleteDog} />
      </div>
    </BrowserRouter>

  );
}

export default App;
