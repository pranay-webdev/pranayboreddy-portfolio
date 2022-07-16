import {
  UilLinkedinAlt,
  UilTwitterAlt,
  UilGithubAlt,
  UilMessage,
  UilMouseAlt,
  UilArrowDown,
} from "@iconscout/react-unicons";
import { scrollToView } from "../../shared/utils";
import "./home.scss";
import profileImg from "../../assets/images/pranay-home.webp";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="container grid">
        <div className="content grid">
          <div className="social">
            <a
              aria-label="Navigate to linkedin account"
              href="https://linkedin.com/in/pranay-boreddy/"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <UilLinkedinAlt />
            </a>
            <a
              aria-label="navigate to Twitter account"
              href="https://twitter.com/pranayboreddy"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <UilTwitterAlt />
            </a>
            <a
              aria-label="Navigate to GitHub account"
              href="https://github.com/pranayboreddy"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <UilGithubAlt />
            </a>
          </div>
          <div className="image">
            <img src={profileImg} alt="Profile" />
          </div>
          <div className="data">
            <h1 className="title">Hi, I am Pranay</h1>
            <h2 className="subtitle">Frontend Developer</h2>
            <p className="description">
              Enterprise application developer focusing on user and developer
              experience delivering quality work.
            </p>
            <button
              onClick={() => scrollToView("contact_me")}
              className="common-button button-flex"
            >
              Contact Me <UilMessage className="icon" />
            </button>
          </div>
        </div>
        <div className="scrollButton">
          <button
            onClick={() => scrollToView("about")}
            className="button button-flex"
          >
            <UilMouseAlt size="2rem" />
            <span>Scroll Down</span>
            <UilArrowDown size="1.25rem" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
