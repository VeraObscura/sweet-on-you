import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/hooks";
import Dropdown from "react-dropdown";

// Components
import { InterTitle, ArrowLink, TitleText } from "components/interTitle";
import Slider from "components/slider";

// Components
import { RootState } from "redux/store";
import { setVolume, setLanguage } from "redux/slices/optionsSlice";

// Styles
import styles from "./optionsMenu.module.scss";
import "./languageDropdown.scss";
import "react-dropdown/style.css";

const options = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
];

interface OptionsMenuProps {
  onReturn: () => void;
}

const OptionsMenu = ({ onReturn }: OptionsMenuProps) => {
  const dispatch = useDispatch();
  const volume = useAppSelector((state: RootState) => state.options.volume);
  const language = useAppSelector((state: RootState) => state.options.language);
  const defaultOption = options.filter(
    (option) => option.value === language
  )[0];

  const handleVolumeChange = (value: number) => {
    dispatch(setVolume(value / 10));
  };

  const handleLanguageChange = (language: string) => {
    dispatch(setLanguage(language));
  };

  return (
    <div className={styles.optionsMenu}>
      <InterTitle>
        <TitleText text="Options" />
        <div className={styles.options}>
          <div className={styles.options__item}>
            <p className={styles.options__item__text}>{`Volume (${
              volume * 10
            })`}</p>
            <div className={styles.options__item__input}>
              <Slider
                text={"Volume"}
                value={volume * 10}
                onChange={handleVolumeChange}
              />
            </div>
          </div>
          <div className={styles.options__item}>
            <p className={styles.options__item__text}>{`Language`}</p>
            <div className={styles.options__item__input}>
              <Dropdown
                options={options}
                onChange={(e) => handleLanguageChange(e.value)}
                value={defaultOption}
                placeholder="Select a language"
                controlClassName="languageDropdown__control"
                menuClassName="languageDropdown__menu"
                arrowClassName="languageDropdown__arrow"
              />
            </div>
          </div>
        </div>
        <ArrowLink link={null} onClick={onReturn} backButton />
      </InterTitle>
    </div>
  );
};

export default OptionsMenu;
