import { useState, useEffect } from "react";
import styles from "./celluloidFire.module.scss";

interface FlameProps {
  top: string;
  left: string;
  version: "small" | "large";
}

const Flame = ({ top, left, version }: FlameProps) => {
  const numrows = 50;
  const particles = [];

  for (let i = 0; i < numrows; i++) {
    particles.push(
      <div
        key={i}
        className={`${styles.particle} ${
          version === "small" ? styles.particleSmall : styles.particleLarge
        }`}
      />
    );
  }

  return (
    <div className={styles.fire} style={{ top: top, left: left }}>
      {particles.map((part) => {
        return part;
      })}
      ;
    </div>
  );
};

const CelluloidFire = () => {
  const [showFlame1, setShowFlame1] = useState(false);
  const [showFlame2, setShowFlame2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFlame1(true);
    }, 3000);
    setTimeout(() => {
      setShowFlame2(true);
    }, 5000);
  }, []);

  return (
    <div className={styles.celluloidFire}>
      {showFlame1 && <Flame top={"0%"} left={"10%"} version="small" />}
      {showFlame2 && <Flame top={"-20%"} left={"60%"} version="large" />}
    </div>
  );
};

export default CelluloidFire;
