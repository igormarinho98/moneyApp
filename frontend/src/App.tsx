import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';  
import  Account from "./pages/Account";
import User from './components/User';
import AccountX from './components/Account';
  import Application from './components/Application';

function App() {
  return (
    
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/accounts" element={ <Account/>}></Route>
      <Route path="/users" element={ <User/>}></Route>
      <Route path="/accounts/create" element={ <AccountX/>}></Route>
      <Route path="/applications" element={ <Application/>}></Route>

     </Routes>
   );
}

export default App;
