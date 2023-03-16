import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from '../common/MenuItem';
import "./Menu.css";
import Header from "../common/Header";
import Footer from "../common/Footer";

function Menu() {
  return (
    <div>
        <Header/>
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Menu;
