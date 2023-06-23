import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';  
import  Account from "./pages/Account";
import User from './components/User';
import Application from './pages/Application';
import CreateAccount from './pages/CreateAccount';
import CreateUser from './components/CreateUser';
import CreateApplication from './pages/CreateApplication';

function App() {
  return (
    
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/account" element={ <Account/>}></Route>
      <Route path="/account/create" element={ <CreateAccount/>}></Route>
      <Route path="/user/create" element={ <CreateUser/>}></Route>
      <Route path="/user" element={ <User/>}></Route>
      <Route path="/application" element={ <Application/>}></Route>
      <Route path="/application/create" element={<CreateApplication/>}></Route>
     </Routes>
   );
}

export default App;
