import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/hooks";

import { RootState } from "redux/store";
import { InterTitle, ArrowLink, TitleText } from "components/interTitle";
import { setVolume } from "redux/slices/optionsSlice";
import Slider from "components/slider";

import styles from "./optionsMenu.module.scss";

interface OptionsMenuProps {
  onReturn: () => void;
}

const OptionsMenu = ({ onReturn }: OptionsMenuProps) => {
  const dispatch = useDispatch();
  const volume = useAppSelector((state: RootState) => state.options.volume);

  const handleVolumeChange = (value: number) => {
    dispatch(setVolume(value / 10));
  };

  return (
    <div className={styles.optionsMenu}>
      <InterTitle>
        <TitleText text="Options" />
        <Slider
          text={"Volume"}
          value={volume * 10}
          onChange={handleVolumeChange}
        />
        <ArrowLink link={null} onClick={onReturn} backButton />
      </InterTitle>
    </div>
  );
};

export default OptionsMenu;
