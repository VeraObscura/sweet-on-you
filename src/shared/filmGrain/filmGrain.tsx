import { useEffect } from "react";
import styles from "./filmGrain.module.scss";

interface FilmGrainProps {
  hasAnimatedVignette?: boolean;
  customVignette?: React.ReactNode;
  isClosed?: boolean;
}

const FilmGrain = ({
  customVignette = null,
  hasAnimatedVignette = false,
  isClosed = false,
}: FilmGrainProps) => {
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
      <canvas className={styles.filmGrain__grain} id="grain"></canvas>
      {customVignette ? (
        customVignette
      ) : (
        <div
          className={`${
            hasAnimatedVignette
              ? styles.filmGrain__animatedVignette
              : styles.filmGrain__vignette
          }`}
        />
      )}
      <div className={styles.filmGrain__scratches}></div>
      <div className={styles.filmGrain__flicker}></div>
    </div>
  );
};

export default FilmGrain;
