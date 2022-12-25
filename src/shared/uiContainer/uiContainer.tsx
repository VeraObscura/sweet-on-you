import styles from "./uiContainer.module.scss";

interface UIContainerProps {
  onClick?: () => void;
  isClosed?: boolean;
}

export const UIContainer = ({
  onClick,
  isClosed = false,
}: UIContainerProps) => {
  return (
    <div className={styles.uiContainer}>
      {!isClosed && (
        <button className={styles.uiContainer__button} onClick={onClick}>
          ➜
        </button>
      )}
    </div>
  );
};

export default UIContainer;
