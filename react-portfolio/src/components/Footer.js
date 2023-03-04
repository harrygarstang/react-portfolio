import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-right">
        <ul>
          <li>
            <a href="https://github.com/harrygarstang">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/harry-garstang/">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:harrygarstang2@gmail.com">harrygarstang2@gmail.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
