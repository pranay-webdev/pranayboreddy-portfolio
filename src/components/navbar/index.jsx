import { useState, useEffect, useRef } from "react";
import { scrollToView, scrollToTop } from "../../shared/utils";
import "./navbar.scss";
import Icon from "../icon";
import { NAV_ITEMS } from "@/shared/constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hightLightId, setHighlightId] = useState("home");
  const [isScrolled, setScrolled] = useState(false);
  const [darkModeState, setDarkModeState] = useState(true);

  const sectionref = useRef(null);
  const colorSchemeRef = useRef(null);

  const setActiveLink = (refs) => {
    const scrollY = window.scrollY;
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
            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                className={`item ${
                  hightLightId === item.id ? "activeLink" : ""
                }`}
                onClick={() => setShowMenu(false)}
              >
                <button onClick={() => scrollToView(item.id)} className="link">
                  <Icon icon={item.iconName} size="26px" className="icon" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <Icon
            icon="cross"
            size="24px"
            className="close"
            onClick={() => setShowMenu(false)}
          />
        </div>
        <div className="btnGroup">
          <div
            className="changeTheme"
            onClick={() => setDarkModeState(!darkModeState)}
          >
            {darkModeState ? (
              <Icon icon="sun" size="24px" />
            ) : (
              <Icon icon="moon" size="24px" />
            )}
          </div>
          <div className="toggleBtn" onClick={() => setShowMenu(true)}>
            <Icon icon="app" size="24px" className="appIcon" />
          </div>
        </div>
      </nav>
      <button
        onClick={scrollToTop}
        className={`scrollup ${isScrolled ? "show" : ""}`}
        id="scroll-up"
        aria-label="Scroll to the top of the page"
      >
        <Icon icon="arrow-up" size="1.6rem" className="icon" />
      </button>
    </header>
  );
};

export default Navbar;
