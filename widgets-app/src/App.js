import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import WelcomePage from './components/WelcomePage';
import ClockPage from './components/ClockPage';
import WeatherPage from './components/WeatherPage';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path={"/"}>
        <WelcomePage />
      </Route>
      <Route path={"/clock"}>
        <ClockPage />
      </Route>
      <Route path={"/weather"}>
        <WeatherPage />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
