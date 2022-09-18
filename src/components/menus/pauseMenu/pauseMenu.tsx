import { InterTitle, ChoiceText, TitleText } from "shared/interTitle";
import styles from "./pauseMenu.module.scss";

interface PauseMenuProps {
  onSelectResume: () => void;
  onSelectOptions: () => void;
}

const PauseMenu = ({ onSelectResume, onSelectOptions }: PauseMenuProps) => {
  const quitApplication = () => {
    //window.ipcRenderer.send("close-me")
  };

  return (
    <div className={styles.pauseMenu}>
      <InterTitle>
        <TitleText name="Pause Game" />
        <ChoiceText text="Resume" link={null} onClick={onSelectResume} />
        <ChoiceText text="Options" link={null} onClick={onSelectOptions} />
        <ChoiceText text="Quit" link={null} onClick={() => quitApplication()} />
      </InterTitle>
    </div>
  );
};

export default PauseMenu;
