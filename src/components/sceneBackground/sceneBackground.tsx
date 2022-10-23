import UIContainer from "@/shared/uiContainer";

import styles from "./sceneBackground.module.scss";

interface SceneBackgroundProps {
  imageSrc: string;
  link: string | null;
  onClick?: () => void;
}

export const SceneBackground = ({
  link,
  onClick,
  imageSrc,
}: SceneBackgroundProps) => {
  return (
    <div className={styles.sceneBackground}>
      <UIContainer link={link} onClick={onClick} />
      <img className={styles.sceneBackground__image} src={imageSrc} />
    </div>
  );
};

export default SceneBackground;
