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
        <h1 className={styles.uiContainer__button} onClick={onClick}>
          ➜
        </h1>
      )}
    </div>
  );
};

export default UIContainer;
