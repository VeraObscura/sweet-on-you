import { useState } from "react";
import ReactSlider from "react-slider";
import styles from "./slider.module.scss";

interface SliderProps {
  text: string;
  value: number;
  onChange: (value: number) => void;
}

const Slider = ({ text, value, onChange }: SliderProps) => {
  const [currentValue, setCurrentValue] = useState(value);

  return (
    <div className={styles.slider}>
      <div className={styles.customSliderContainer}>
        <ReactSlider
          className={styles.customSlider}
          trackClassName={styles.customSlider__track}
          thumbClassName={styles.customSlider__thumb}
          marks={20}
          min={0}
          max={10}
          defaultValue={10}
          value={currentValue}
          onChange={(value) => {
            onChange(value);
            setCurrentValue(value);
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
