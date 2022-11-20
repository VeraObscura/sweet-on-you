import { Fragment } from "react";
import styles from "./animatedVignette.module.scss";

interface AnimatedVignetteProps {
  isClosed?: boolean;
}

const AnimatedVignette = ({ isClosed = false }: AnimatedVignetteProps) => {
  return (
    <Fragment>
      {isClosed ? (
        <div className={`${styles.animatedVignetteClosed}`} />
      ) : (
        <div className={`${styles.animatedVignetteOpened}`} />
      )}
    </Fragment>
  );
};

export default AnimatedVignette;
