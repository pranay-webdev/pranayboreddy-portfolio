import { UilEstate } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilFileAlt } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import { UilScenery } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";

const Navbar = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="./" className="logo">
          Pranay
        </a>
        <div className="menu" id="navMenu">
          <ul className="list">
            <li className="item">
              <a href="#home" className="link">
                <UilEstate /> Home
              </a>
            </li>
            <li className="item">
              <a href="./" className="link">
                <UilUser /> About
              </a>
            </li>
            <li className="item">
              <a href="./" className="link">
                <UilFileAlt /> Skills
              </a>
            </li>
            <li className="item">
              <a href="./" className="link">
                <UilBriefcaseAlt /> Services
              </a>
            </li>
            <li className="item">
              <a href="./" className="link">
                <UilScenery /> Portfolio
              </a>
            </li>
            <li className="item">
              <a href="./" className="link">
                <UilMessage /> Contactme
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
