import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login/index";
import Register from "./Register/index";
import TribeIntro from "./TribeIntro/index";
import SelectTopics from "./SelectTopics/index";
import EditProfile from "./EditProfile/index";

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
      </Switch>
    </BrowserRouter>
  );
}
