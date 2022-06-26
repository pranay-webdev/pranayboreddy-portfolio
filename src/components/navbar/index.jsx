import { UilEstate } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilFileAlt } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import { UilScenery } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilApps } from "@iconscout/react-unicons";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="./" className="logo">
          Pranay
        </a>
        {showMenu && (
          <div className="menu">
            <ul className="list grid">
              <li className="item" onClick={() => setShowMenu(false)}>
                <a href="#home" className="link">
                  <UilEstate size="26" />
                  Home
                </a>
              </li>
              <li className="item" onClick={() => setShowMenu(false)}>
                <a href="#about" className="link">
                  <UilUser size="26" />
                  About
                </a>
              </li>
              <li className="item" onClick={() => setShowMenu(false)}>
                <a href="#skills" className="link">
                  <UilFileAlt size="26" />
                  Skills
                </a>
              </li>
              <li className="item" onClick={() => setShowMenu(false)}>
                <a href="#services" className="link">
                  <UilBriefcaseAlt size="26" />
                  Services
                </a>
              </li>
              <li className="item" onClick={() => setShowMenu(false)}>
                <a href="#portfolio" className="link">
                  <UilScenery size="26" />
                  Portfolio
                </a>
              </li>
              <li className="item" onClick={() => setShowMenu(false)}>
                <a href="#contact_me" className="link">
                  <UilMessage size="26" />
                  Contact me
                </a>
              </li>
            </ul>
            <UilTimes className="close" onClick={() => setShowMenu(false)} />
          </div>
        )}
        <div className="btnGroup">
          <div className="toggleBtn" onClick={() => setShowMenu(true)}>
            <UilApps className="appIcon" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
