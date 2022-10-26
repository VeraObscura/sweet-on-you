import {
  InterTitle,
  TitleText,
  ChoiceTextContainer,
  ChoiceText,
} from "@/components/interTitle";

import { quitApplication } from "@/helpers/closeApplication";

import routes from "@/routes";

interface StartMenuProps {
  onSelectOptions: () => void;
}

const StartMenu = ({ onSelectOptions }: StartMenuProps) => {
  return (
    <InterTitle hasAnimatedVignette={true}>
      <TitleText text="Sweet on You" />
      <ChoiceTextContainer>
        <ChoiceText text="Start Game" link={routes.INTRO} />
        <ChoiceText text="Options" link={null} onClick={onSelectOptions} />
        <ChoiceText text="About" link={routes.ABOUT} />
        <ChoiceText text="Quit" link={null} onClick={quitApplication} />
      </ChoiceTextContainer>
    </InterTitle>
  );
};

export default StartMenu;
