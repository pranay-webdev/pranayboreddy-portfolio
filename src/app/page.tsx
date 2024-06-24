"use client";
import {
  Navbar,
  Main,
  About,
  Skills,
  Services,
  Portfolio,
  ContactMe,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Services />
      {/* <Portfolio /> */}
      <ContactMe />
    </>
  );
}
