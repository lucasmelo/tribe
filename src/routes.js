import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import TribeIntro from "./pages/TribeIntro/index";
import SelectTopics from "./pages/SelectTopics/index";
import EditProfile from "./pages/EditProfile/index";
import Profile from "./pages/Profile/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/intro" component={TribeIntro}></Route>
        <Route path="/select" component={SelectTopics}></Route>
        <Route path="/edit" component={EditProfile}></Route>
        <Route path="/profile" component={Profile}></Route>
      </Switch>
    </BrowserRouter>
  );
}
