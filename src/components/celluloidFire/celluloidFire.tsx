import { useState, useEffect } from "react";
import styles from "./celluloidFire.module.scss";

import filmBurn from "@/assets/images/filmBurn.gif";

const CelluloidFire = () => {
  return (
    <div className={styles.celluloidFire}>
      <img src={filmBurn} alt="film burn" />
    </div>
  );
};

export default CelluloidFire;
