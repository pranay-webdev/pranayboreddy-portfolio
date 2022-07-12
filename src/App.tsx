import {
  About,
  ContactMe,
  Home,
  Navbar,
  Portfolio,
  Services,
  Skills,
} from "./components";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <ContactMe />
    </>
  );
}

export default App;
