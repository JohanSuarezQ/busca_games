import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import UserIcon from "../assets/UserIcon.svg";

export const Header = () => {
  return (
    <header className="header__container">
      <Link className="header__logo" to="/">
        BuscaGames
        <img src={Logo} alt="" />
      </Link>
      <nav>
        <ul className="header__nav">
          <li>
            <Link to="/"> Inicio </Link>
          </li>
          <li>
            <Link to="/discover"> Descubre </Link>
          </li>
          <li>
            <Link to="/search"> Busca </Link>
          </li>
        </ul>
      </nav>
      <Link className="header__username" to="/userprofile">
        <img src={UserIcon} alt="" />
        UserName
      </Link>
    </header>
  );
};
