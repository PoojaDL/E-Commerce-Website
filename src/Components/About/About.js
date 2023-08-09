import NavContent from "../NavBar/NavContent";
import HeadContent from "../Header/HeadContent";
import React from "react";
import FooterContent from "../Footer/FooterContent";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <React.Fragment>
      <NavContent />
      <HeadContent />
      <AboutContent />
      <FooterContent />
    </React.Fragment>
  );
};

export default About;
