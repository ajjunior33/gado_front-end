import React from "react";

import './style.css';

function Header() {
  return (
    <header>
      <form action="" className="form-search">
        <input type="text" name="search" id="search" className="search_input" />
        <button className="button_search">Pesquisar</button>
      </form>
    </header>
  );
}

export default Header;
