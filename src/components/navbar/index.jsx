import { useState, useEffect, useRef } from "react";
import { scrollToView, scrollToTop } from "../../shared/utils";
import "./navbar.scss";
import Icon from "../icon";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hightLightId, setHighlightId] = useState("home");
  const [isScrolled, setScrolled] = useState(false);
  const [darkModeState, setDarkModeState] = useState(true);

  const sectionref = useRef(null);
  const colorSchemeRef = useRef(null);

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

  const toggleDarkMode = (state) => {
    document.documentElement.classList.toggle("dark-mode", state);
  };

  useEffect(() => {
    toggleDarkMode(darkModeState);
  }, [darkModeState]);

  useEffect(() => {
    // Active Link Highlight
    sectionref.current = document.querySelectorAll("section[id]");
    const scrollSectionHOC = () => {
      setActiveLink(sectionref.current);
    };
    window.addEventListener("scroll", scrollSectionHOC);

    // Dark Mode Config
    colorSchemeRef.current = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkModeState(colorSchemeRef.current.matches);

    colorSchemeRef.current.addEventListener("change", (evt) =>
      setDarkModeState(evt.matches)
    );

    return () => {
      window.removeEventListener("scroll", scrollSectionHOC);
      colorSchemeRef.current.removeEventListener("change", (evt) =>
        toggleDarkMode(evt.matches)
      );
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
              <button onClick={() => scrollToView("home")} className="link">
                <Icon icon="home" size="26" className="icon" />
                Home
              </button>
            </li>
            <li
              className={`item ${hightLightId === "about" ? "activeLink" : ""}`}
              onClick={() => setShowMenu(false)}
            >
              <button onClick={() => scrollToView("about")} className="link">
                <Icon icon="user" size="26" className="icon" />
                About
              </button>
            </li>
            <li
              className={`item ${
                hightLightId === "skills" ? "activeLink" : ""
              }`}
              onClick={() => setShowMenu(false)}
            >
              <button onClick={() => scrollToView("skills")} className="link">
                <Icon icon="file" size="26" className="icon" />
                Skills
              </button>
            </li>
            <li
              className={`item ${
                hightLightId === "services" ? "activeLink" : ""
              }`}
              onClick={() => setShowMenu(false)}
            >
              <button onClick={() => scrollToView("services")} className="link">
                <Icon icon="brief" size="26" className="icon" />
                Services
              </button>
            </li>
            <li
              className={`item ${
                hightLightId === "portfolio" ? "activeLink" : ""
              }`}
              onClick={() => setShowMenu(false)}
            >
              <button
                onClick={() => scrollToView("portfolio")}
                className="link"
              >
                <Icon icon="image" size="26" className="icon" />
                Portfolio
              </button>
            </li>
            <li
              className={`item ${
                hightLightId === "contact_me" && "activeLink"
              }`}
              onClick={() => setShowMenu(false)}
            >
              <button
                onClick={() => scrollToView("contact_me")}
                className="link"
              >
                <Icon icon="send" size="26" className="icon" />
                Contact me
              </button>
            </li>
          </ul>
          <Icon icon="cross" size="24px" className="close" onClick={() => setShowMenu(false)} />
        </div>
        <div className="btnGroup">
          <div
            className="changeTheme"
            onClick={() => setDarkModeState(!darkModeState)}
          >
            {darkModeState ? <Icon icon="sun" size="24px" /> : <Icon icon="moon" size="24px" />}
          </div>
          <div className="toggleBtn" onClick={() => setShowMenu(true)}>
            <Icon icon="menu" size="24px" className="appIcon" />
          </div>
        </div>
      </nav>
      <button
        onClick={scrollToTop}
        className={`scrollup ${isScrolled ? "show" : ""}`}
        id="scroll-up"
        aria-label="Scroll to the top of the page"
      >
        <Icon icon="arrow_up" size="1.6rem" className="icon" />
      </button>
    </header>
  );
};

export default Navbar;
