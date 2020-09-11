import React from "react";

import GithubLogo from "../assets/github.svg";
import LinkedinLogo from "../assets/linkedin.svg";
import InstagramLogo from "../assets/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer__container">
      <p>De un gamer para otro. Hecho por JohánSQ</p>
      <ul className="footer__rrss">
        <li>
          <a target="_blank" href="https://github.com/JohanSuarezQ">
            <img src={GithubLogo} alt="" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/johansq/">
            <img src={LinkedinLogo} alt="" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/johansuarezq/">
            <img src={InstagramLogo} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
