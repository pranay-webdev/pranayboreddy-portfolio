import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
  UilArrowUp,
} from "@iconscout/react-unicons";
import { useState, useEffect, useRef } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hightLightId, setHighlightId] = useState("home");
  const [isScrolled, setScrolled] = useState(false);
  const sectionref = useRef(null);

  const scrollSectionHOC = () => {
    setActiveLink(sectionref.current);
  };

  const setActiveLink = (refs) => {
    const scrollY = window.pageYOffset;
    refs.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 40;
      const sectionId = current.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setHighlightId(sectionId);
      }
    });

    // Adding box shadow to  Nav for better visibility if page if scrolled to bottom
    if (scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    sectionref.current = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", scrollSectionHOC);
    return () => {
      window.removeEventListener("scroll", scrollSectionHOC);
    };
  }, []);

  return (
    <header
      className={`header ${isScrolled ? "scrollHeader" : ""}`}
      id="header"
    >
      <nav className="nav container">
        <a href="./" className="logo">
          Pranay
        </a>
        <div className={`menu ${showMenu ? "showMenu" : ""}`}>
          <ul className="list grid">
            <li
              className={`item ${hightLightId === "home" ? "activeLink" : ""}`}
              onClick={() => setShowMenu(false)}
            >
              <a href="#home" className="link">
                <UilEstate size="26" className="icon" />
                Home
              </a>
            </li>
            <li
              className={`item ${hightLightId === "about" ? "activeLink" : ""}`}
              onClick={() => setShowMenu(false)}
            >
              <a href="#about" className="link">
                <UilUser size="26" className="icon" />
                About
              </a>
            </li>
            <li
              className={`item ${
                hightLightId === "skills" ? "activeLink" : ""
              }`}
              onClick={() => setShowMenu(false)}
            >
              <a href="#skills" className="link">
                <UilFileAlt size="26" className="icon" />
                Skills
              </a>
            </li>
            <li
              className={`item ${
                hightLightId === "services" ? "activeLink" : ""
              }`}
              onClick={() => setShowMenu(false)}
            >
              <a href="#services" className="link">
                <UilBriefcaseAlt size="26" className="icon" />
                Services
              </a>
            </li>
            <li
              className={`item ${
                hightLightId === "portfolio" ? "activeLink" : ""
              }`}
              onClick={() => setShowMenu(false)}
            >
              <a href="#portfolio" className="link">
                <UilScenery size="26" className="icon" />
                Portfolio
              </a>
            </li>
            <li
              className={`item ${
                hightLightId === "contact_me" && "activeLink"
              }`}
              onClick={() => setShowMenu(false)}
            >
              <a href="#contact_me" className="link">
                <UilMessage size="26" className="icon" />
                Contact me
              </a>
            </li>
          </ul>
          <UilTimes className="close" onClick={() => setShowMenu(false)} />
        </div>
        <div className="btnGroup">
          <div className="toggleBtn" onClick={() => setShowMenu(true)}>
            <UilApps className="appIcon" />
          </div>
        </div>
      </nav>
      <a
        href="#"
        className={`scrollup ${isScrolled ? "show" : ""}`}
        id="scroll-up"
      >
        <UilArrowUp size="1.6rem" className="icon" />
      </a>
    </header>
  );
};

export default Navbar;
