import React from 'react';
import ReactDOM from 'react-dom';
import { left_menu, my_page, purchase_management, sales_management, App } from "./containers";
import { BrowserRouter as Router, Route} from 'react-router-dom'
//import { Container, Row, Col } from 'react-bootstrap';
import "./css/main.css"

const root = document.getElementById("root");

ReactDOM.render(
  <Router>
    <div>
      <div className="menu_content">
        <Route path="/" component={left_menu}/>
      </div>
      <div className="main_content">
        <Route path="/my_page" component={my_page}/>
        <Route path="/purchase_management" component={purchase_management}/>
        <Route path="/sales_management" component={sales_management}/>
        <Route path="/test" component={App}/>
      </div>
    </div>
  </Router>,
  root
);
