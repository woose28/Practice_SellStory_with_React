import React from "react";
//import { Nav, NavDropdown } from 'react-bootstrap';
import styles from '../css/left_menu.css';
import $ from 'jquery';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import * as compo from '../components';

class left_menu extends React.Component{

    handleToggleMenu(e){
      console.log("handleToggleMenu 클림됨");
      let hidden_menu = $(e.target).next("ul");
      if(hidden_menu.is(":visible")){
          hidden_menu.slideUp();
      }
      else{
          hidden_menu.slideDown();
      }
    }
    render(){
      const left_menu_heading = (
        <div className="body">
          <span className="title_font">마이셀스토리</span>
          <hr className="hr"/>
        </div>
      )
      const left_menu_view = (
        <div className="body">
          <span className="title_font">마이셀스토리</span>
          <hr className="hr"/>
          <nav>
            <ul>
              <li className="nav_list">
                <div onClick={this.handleToggleMenu}>마이 페이지</div>
                <ul>
                  <li>
                    <a href="./my_page">
                      전자북 등록
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav_list">
                <div onClick={this.handleToggleMenu}>구매 관리</div>
                <ul>
                  <li>
                    <a href="./purchase_management">구매한 전자북</a>
                  </li>
                </ul>
              </li>
              <li className="nav_list">
                <div onClick={this.handleToggleMenu}>판매 관리</div>
                <ul>
                  <li>
                    <a href="./sales_management">판매한 책 관리</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>);

      return(
        <div>
          {left_menu_heading}
          <compo.MenuItems/>
        </div>
      );
    }
}

export default left_menu;
