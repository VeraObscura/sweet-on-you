import UIContainer from "@/shared/uiContainer";

import styles from "./bakeryStoreFront.module.scss";

interface BakeryStoreFrontProps {
  link: string | null;
  onClick?: () => void;
}

export const BakeryStoreFront = ({ link, onClick }: BakeryStoreFrontProps) => {
  return (
    <div className={styles.bakeryStoreFront}>
      <UIContainer link={link} onClick={onClick} />
    </div>
  );
};

export default BakeryStoreFront;
