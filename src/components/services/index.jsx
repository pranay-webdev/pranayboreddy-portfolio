import { useState } from "react";
import {
  UilBookReader,
  UilArrowRight,
  UilArrow,
} from "@iconscout/react-unicons";
import "./services.scss";
import ServicesModal from "./modal/index";

const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalHeadLine, setModalHeadline] = useState();

  const toggleModal = (service) => {
    setOpenModal(!openModal);
    setModalHeadline(
      service === "fontend dev" ? (
        <>
          UI <br /> Developer
        </>
      ) : (
        <>
          Educator <br /> Mentor
        </>
      )
    );
  };

  return (
    <section className="services section">
      <h2 className="title">Services</h2>
      <span className="subtitle">What I Offer</span>
      <div className="servicesContainer grid container">
        <div className="content">
          <div>
            <UilArrow className="serviceIcon" />
            <h3 className="title">
              UI <br /> Developer
            </h3>
          </div>
          <span
            className="common-button button-flex button-small button-link servicesButton"
            onClick={() => toggleModal("fontend dev")}
          >
            View More <UilArrowRight className="icon" />
          </span>
        </div>
        <div className="content">
          <div>
            <UilBookReader className="serviceIcon" />
            <h3 className="title">
              Educator <br /> Mentor
            </h3>
          </div>
          <span
            className="common-button button-flex button-small button-link servicesButton"
            onClick={() => toggleModal("educator")}
          >
            View More <UilArrowRight className="icon" />
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
