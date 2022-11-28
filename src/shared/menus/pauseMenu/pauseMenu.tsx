import {
  ClipMask,
  InterTitle,
  ChoiceTextContainer,
  ChoiceText,
  TitleText,
} from "@/components/interTitle";
import styles from "./pauseMenu.module.scss";

import { quitApplication } from "@/helpers/closeApplication";

interface PauseMenuProps {
  onSelectResume: () => void;
  onSelectOptions: () => void;
}

const PauseMenu = ({ onSelectResume, onSelectOptions }: PauseMenuProps) => {
  return (
    <div className={styles.pauseMenu}>
      <ClipMask>
        <InterTitle>
          <TitleText text="Pause Game" />
          <ChoiceTextContainer>
            <ChoiceText text="Resume" onClick={onSelectResume} />
            <ChoiceText text="Options" onClick={onSelectOptions} />
            <ChoiceText text="Quit" onClick={quitApplication} />
          </ChoiceTextContainer>
        </InterTitle>
      </ClipMask>
    </div>
  );
};

export default PauseMenu;
