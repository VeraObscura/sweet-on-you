import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  InterTitle,
  TitleText,
  ChoiceTextContainer,
  ChoiceText,
} from "@/components/interTitle";
import AnimatedVignette from "@/shared/animatedVignette";

import { quitApplication } from "@/helpers/closeApplication";

import routes from "@/routes";

interface StartMenuProps {
  onSelectOptions: () => void;
}

const StartMenu = ({ onSelectOptions }: StartMenuProps) => {
  const navigate = useNavigate();

  const [isClosed, setIsClosed] = useState(false);

  const handleClickStartGame = () => {
    setIsClosed(true);
    setTimeout(() => {
      navigate(routes.THE_SHOW_MUST_GO_ON);
    }, 2000);
  };

  const handleClickAbout = () => {
    setIsClosed(true);
    setTimeout(() => {
      navigate(routes.ABOUT);
    }, 2000);
  };

  return (
    <InterTitle hasAnimatedVignette={true}>
      {isClosed && <AnimatedVignette isClosed={true} />}
      <TitleText text="Sweet on You" />
      <ChoiceTextContainer>
        <ChoiceText text="Start Game" onClick={handleClickStartGame} />
        <ChoiceText text="Options" onClick={onSelectOptions} />
        <ChoiceText text="About" onClick={handleClickAbout} />
        <ChoiceText text="Quit" onClick={quitApplication} />
      </ChoiceTextContainer>
    </InterTitle>
  );
};

export default StartMenu;
