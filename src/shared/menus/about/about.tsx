import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ClipMask,
  InterTitle,
  ArrowLink,
  TitleText,
} from "@/components/interTitle";

import routes from "@/routes";
import styles from "./about.module.scss";

const About = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(routes.HOME);
  };

  return (
    <div className={styles.about}>
      <ClipMask hasAnimatedVignette={false}>
        <InterTitle>
          <TitleText text="About" />
          <p className={styles.about__text}>A game by Vera Obscura.</p>
          <ArrowLink onClick={handleReturn} backButton />
        </InterTitle>
      </ClipMask>
    </div>
  );
};

export default About;
