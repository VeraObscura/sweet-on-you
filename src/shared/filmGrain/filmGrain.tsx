import { Fragment } from "react";
import styles from "./filmGrain.module.scss";

interface FilmGrainProps {
  hasVignette?: boolean;
}

const FilmGrain = ({ hasVignette = true }: FilmGrainProps) => {
  return (
    <Fragment>
      <div className={styles.filmGrain} />
      {hasVignette && <div className={styles.filmGrain__vignette} />}
    </Fragment>
  );
};

export default FilmGrain;
