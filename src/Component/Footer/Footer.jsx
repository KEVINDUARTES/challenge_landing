import React from 'react';
import './Footer.css';

// import { Link } from 'react-router-dom';
// import Navbar from "react-bootstrap/Navbar";
// import { Facebook } from 'react-icons/Facebook';

export default function Footer() {
  return (
    <body>
      <footer class='footer'>
        <div class='footer__addr'>
          <h1 class='footer__logo'>easybank</h1>
        </div>

        <ul class='footer__nav'>
          <li class='nav__item'>
            <ul class='nav__ul'>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>

              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </li>

          <li class='nav__item'>
            <ul class='nav__ul'>
              <li>
                <a href='#'>Careers</a>
              </li>

              <li>
                <a href='#'>Support</a>
              </li>

              <li>
                <a href='#'>Privacy Policy</a>
              </li>
            </ul>
          </li>

          <li class='nav__item'>
            <h2 class='nav__title'>Request Invite</h2>
          </li>
        </ul>

        <div class='legal'>
          <div class='legal__links'>
            <span>
              <span class='heart'>@</span> Easybank. All Rights Roserved
            </span>
          </div>
        </div>
      </footer>
    </body>
  );
}
