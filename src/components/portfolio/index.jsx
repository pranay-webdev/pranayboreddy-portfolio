import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "./portfolio.scss";
import ProjectInMind from "./project-in-mind";
import Icon from "../icon";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio section" id="portfolio">
        <h2 className="title">Portfolio</h2>
        <span className="subtitle">Most recent work</span>
        <div className="portfolioContainer container">
          <Swiper
            spaceBetween={50}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="content grid">
                <div className="banner">
                  <p>Logistic App</p>
                </div>
                <div className="data">
                  <h3 className="title">Logistic App</h3>
                  <p className="description">
                    An Application that is adaptable to all devices with UI
                    components and animated interactions including form
                    validations
                  </p>
                  <a
                    href="https://trans-port.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="common-button button-flex button-small portfolioButton button-icon"
                  >
                    Demo
                    <Icon icon="arrow_up" className="icon" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content grid">
                <div className="banner">
                  <p>Local Guide</p>
                </div>
                <div className="data">
                  <h3 className="title">Local Guide</h3>
                  <p className="description">
                    Application that connects local guides with the travellers
                  </p>
                  <button className="common-button button-flex button-small portfolioButton button-icon">
                    Demo
                    <Icon icon="arrow_up" className="icon" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <ProjectInMind />
    </>
  );
};

export default Portfolio;
