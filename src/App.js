import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar'
import FormContactUs from './components/FormContactUs'
import MessagePage from './components/MessagePage'

function App() {
  return (
    <Router>
    <div>
     <Navbar />

      <Switch>
      <Route exact path="/">
          <FormContactUs />
      </Route>

        <Route path="/message">
          <MessagePage />
        </Route>

      </Switch>
    </div>
  </Router>
  
    
  );
}

export default App;