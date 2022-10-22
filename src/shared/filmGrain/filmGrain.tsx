import { Fragment, useEffect } from "react";
import styles from "./filmGrain.module.scss";

interface FilmGrainProps {
  hasVignette?: boolean;
}

const FilmGrain = ({ hasVignette = true }: FilmGrainProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "src/shared/filmGrain/grainRenderer.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.filmGrain}>
      <canvas id="grain"></canvas>
      {hasVignette && <div className={styles.filmGrain__vignette} />}
      <div className={styles.filmGrain__scratches}></div>
    </div>
  );
};

export default FilmGrain;
