import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';  
import  Account from "./pages/Account";
import User from './components/User';
import AccountX from './components/Account';
  import Application from './pages/Application';

function App() {
  return (
    
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/account" element={ <Account/>}></Route>
      <Route path="/user" element={ <User/>}></Route>
      <Route path="/accounts/create" element={ <AccountX/>}></Route>
      <Route path="/application" element={ <Application/>}></Route>
      <Route path="/application/:id" element={ <Application/>}></Route>
     </Routes>
   );
}

export default App;
