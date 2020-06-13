import React from 'react';
import Login from './Pages/Login'
import {BrowserRouter, Redirect, Route } from "react-router-dom";
import "antd/dist/antd.css";
const App = () => {
  return (
    <BrowserRouter>
      <Redirect from="/" to="/login"/>
      <Route path="/login" component={Login} />
  </BrowserRouter>
  );
}

export default App;
