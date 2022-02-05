import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect
} from 'react-router-dom';
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* Barra de navegación */}
        <NavBar />
        
        <div className='container'>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/login" component={LoginScreen} />

            {/* Si la ruta no existe ... */}
            {/* <Route component={HomeScreen} /> */}
            <Redirect to="/" />
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}