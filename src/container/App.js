import React from 'react';
import Home from '../components/home/home.jsx';
import PersonDetails from "../components/details/PersonDetails.jsx";
import ShowDetails from "../components/details/ShowDetails.jsx";
import Maininfo from "../components/main/Main.jsx";
import { Route, Switch, Redirect } from 'react-router-dom';
function App() {
  return (
    <div>
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/shows/:id' exact component={ShowDetails}/>
        <Route path='/:id/main' exact component={Maininfo}/>
        <Redirect from='/' excat to='/home' /> 
      </Switch>
    </div>
  );
}
export default App;