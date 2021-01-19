import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import Manifesto from "views/Manifesto/Manifesto.js";
import Medios from "views/Medios/Medios.js";
import Articulos from "views/Releases/Articulos.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage1 from "views/ProfilePage/ProfilePage1.js";
import ProfilePage2 from "views/ProfilePage/ProfilePage2.js";
import ProfilePage3 from "views/ProfilePage/ProfilePage3.js";
import ProfilePage4 from "views/ProfilePage/ProfilePage4.js";
import ProfilePage5 from "views/ProfilePage/ProfilePage5.js";
import ProfilePage6 from "views/ProfilePage/ProfilePage6.js";
import ProfilePage7 from "views/ProfilePage/ProfilePage7.js";
import ProfilePage8 from "views/ProfilePage/ProfilePage8.js";
import ProfilePage9 from "views/ProfilePage/ProfilePage9.js";
import ProfilePage10 from "views/ProfilePage/ProfilePage10.js";

import LoginPage from "views/LoginPage/LoginPage.js";
// import Composer1 from "views/ProfilePage/ProfilePage.js";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
       <Route path="/articulos" component={Articulos} />
      <Route path="/sobrenosotros" component={Manifesto} />
      <Route path="/medios" component={Medios} />
      <Route path='/pedrofranco' component = {ProfilePage1}/>
      <Route path='/luisfernando' component={ProfilePage2}/>
      <Route path='/kevinjomar' component={ProfilePage3}/>
      <Route path="/hibana" component={ProfilePage4} />
      <Route path='/josuevera' component={ProfilePage5}/>
      <Route path='/jaimerivera' component={ProfilePage6}/>
      <Route path="/karinarodriguez" component={ProfilePage7} />
      <Route path='/agustinmunoz' component={ProfilePage8}/>
      <Route path='/julioquinones' component={ProfilePage9}/>
      <Route path='/emmanuelsegarra' component={ProfilePage10}/>
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);

