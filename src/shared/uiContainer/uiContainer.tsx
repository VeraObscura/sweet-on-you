import FilmGrain from "@/shared/filmGrain";
import styles from "./uiContainer.module.scss";
import { Link } from "react-router-dom";

interface UIContainerProps {
  link: string | null;
  onClick?: () => void;
}

export const UIContainer = ({ link, onClick }: UIContainerProps) => {
  return (
    <div className={styles.uiContainer}>
      <FilmGrain />
      {link ? (
        <Link to={link}>
          <h1 className={styles.uiContainer__button} onClick={onClick}>
            ➜
          </h1>
        </Link>
      ) : (
        <h1 className={styles.uiContainer__button} onClick={onClick}>
          ➜
        </h1>
      )}
    </div>
  );
};

export default UIContainer;
