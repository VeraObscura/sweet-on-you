import { InterTitle, ChoiceText, TitleText } from "components/interTitle";
import styles from "./pauseMenu.module.scss";

const { ipcRenderer } = require("electron");

interface PauseMenuProps {
  onSelectResume: () => void;
  onSelectOptions: () => void;
}

const PauseMenu = ({ onSelectResume, onSelectOptions }: PauseMenuProps) => {
  const quitApplication = () => {
    ipcRenderer.send("closeApp", null);
  };

  return (
    <div className={styles.pauseMenu}>
      <InterTitle>
        <TitleText text="Pause Game" />
        <ChoiceText text="Resume" link={null} onClick={onSelectResume} />
        <ChoiceText text="Options" link={null} onClick={onSelectOptions} />
        <ChoiceText text="Quit" link={null} onClick={quitApplication} />
        <button id={"close-app"} onClick={quitApplication}>
          Quit
        </button>
      </InterTitle>
    </div>
  );
};

export default PauseMenu;
