import { InterTitle, ArrowLink, TitleText } from "components/interTitle";

import routes from "routes";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <InterTitle>
        <TitleText text="About" />
        <p className={styles.about__text}>A game by Vera Obscura.</p>
        <ArrowLink link={routes.HOME} backButton />
      </InterTitle>
    </div>
  );
};

export default About;
