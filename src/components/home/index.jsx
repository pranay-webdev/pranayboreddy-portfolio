import {
  UilLinkedinAlt,
  UilTwitterAlt,
  UilGithubAlt,
  UilMessage,
  UilMouseAlt,
  UilArrowDown,
} from "@iconscout/react-unicons";

import "./home.scss";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="container grid">
        <div className="content grid">
          <div className="social">
            <a
              href="https://twitter.com/pranayboreddy"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <UilLinkedinAlt />
            </a>
            <a
              href="https://linkedin.com/in/pranay-boreddy/"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <UilTwitterAlt />
            </a>
            <a
              href="https://github.com/pranayboreddy"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <UilGithubAlt />
            </a>
          </div>
          <div className="image">
            <img src={require("../../assets/images/pranay.png")} alt="blob" />
          </div>
          <div className="data">
            <h1 className="title">Hi, I am Pranay</h1>
            <h3 className="subtitle">Frontend Developer</h3>
            <p className="description">
              Enterprise application developer focusing on user and developer
              experience delivering quality work.
            </p>
            <a href="#contact" className="common-button button-flex">
              Contact Me <UilMessage className="icon" />
            </a>
          </div>
        </div>
        <div className="scrollButton">
          <a href="#about" className="button button-flex">
            <UilMouseAlt size="2rem" />
            <span>Scroll Down</span>
            <UilArrowDown size="1.25rem" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;