import React from 'react';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook';
import RemoveBook from './components/RemoveBook';
import Routing from './Routing';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
   <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default App;
