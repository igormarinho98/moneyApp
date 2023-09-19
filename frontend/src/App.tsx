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
import WithdrawInvestment from './components/WithdrawInvestment';
import ListPendingApplication from './components/ListPendingApplication';

function App() {
  return (
    
     <Routes>
      <Route path="/" element={<Application />}></Route>
      <Route path="/account" element={ <Account/>}></Route>
      <Route path="/account/create" element={ <CreateAccount/>}></Route>
      <Route path="/user/create" element={ <CreateUser/>}></Route>
      <Route path="/user" element={ <User/>}></Route>
      <Route path="/application" element={ <Application/>}></Route>
      <Route path="/applicationp" element={ <ListPendingApplication/>}></Route>
      <Route path="/application/create" element={<CreateApplication/>}></Route>
      <Route path="/application/withdraw" element={<WithdrawInvestment/>}></Route>
     </Routes>
   );
}

export default App;
