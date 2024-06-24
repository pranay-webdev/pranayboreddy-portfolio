import { useState } from "react";
import "./services.scss";
import ServicesModal from "./modal/index";
import Icon from "../icon";

const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalHeadLine, setModalHeadline] = useState();

  const toggleModal = (service) => {
    setOpenModal(!openModal);
    setModalHeadline(
      service === "fontend dev" ? "UI Developer" : "Educator Mentor"
    );
  };

  return (
    <section className="services section" id="services">
      <h2 className="title">Services</h2>
      <span className="subtitle">What I Offer</span>
      <div className="servicesContainer grid container">
        <div className="content">
          <div>
            <Icon icon="code" className="serviceIcon" />
            <h3 className="title">
              UI <br /> Developer
            </h3>
          </div>
          <span
            className="common-button button-flex button-small button-link servicesButton"
            onClick={() => toggleModal("fontend dev")}
          >
            View More <Icon icon="arrow_up" className="icon" />
          </span>
        </div>
        <div className="content">
          <div>
            <Icon icon="reading" className="serviceIcon" />
            <h3 className="title">
              Educator <br /> Mentor
            </h3>
          </div>
          <span
            className="common-button button-flex button-small button-link servicesButton"
            onClick={() => toggleModal("educator")}
          >
            View More <Icon icon="arrow_up" className="icon" />
          </span>
        </div>
      </div>
      <ServicesModal
        isOpen={openModal}
        handleClose={toggleModal}
        headline={modalHeadLine}
      />
    </section>
  );
};

export default Services;
