import { InterTitle, TitleText, ChoiceText } from "@/components/interTitle";

import { quitApplication } from "@/helpers/closeApplication";

import routes from "@/routes";
import styles from "./startMenu.module.scss";

interface StartMenuProps {
  onSelectOptions: () => void;
}

const StartMenu = ({ onSelectOptions }: StartMenuProps) => {
  return (
    <div className={styles.intro}>
      <InterTitle>
        <TitleText text="Sweet on You" />
        <ChoiceText text="Start Game" link={routes.INTRO} />
        <ChoiceText text="Options" link={null} onClick={onSelectOptions} />
        <ChoiceText text="About" link={routes.ABOUT} />
        <ChoiceText text="Quit" link={null} onClick={quitApplication} />
      </InterTitle>
    </div>
  );
};

export default StartMenu;
