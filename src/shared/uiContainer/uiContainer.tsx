import FilmGrain from "shared/filmGrain";
import styles from "./uiContainer.module.scss";
import { Link } from "react-router-dom";

interface UIContainerProps {
  link: string;
}

export const UIContainer = ({ link }: UIContainerProps) => {
  return (
    <div className={styles.uiContainer}>
      <FilmGrain />
      <Link className={styles.uiContainer__button} to={link}>
        ➜
      </Link>
    </div>
  );
};

export default UIContainer;
