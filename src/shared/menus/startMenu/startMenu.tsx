import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ClipMask,
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
      navigate(routes.INTRO);
    }, 2000);
  };

  const handleClickAbout = () => {
    navigate(routes.ABOUT);
  };

  return (
    <ClipMask hasAnimatedVignette={true}>
      <InterTitle>
        {isClosed && <AnimatedVignette isClosed={true} />}
        <TitleText text="Sweet on You" />
        <ChoiceTextContainer>
          <ChoiceText text="Start Game" onClick={handleClickStartGame} />
          <ChoiceText text="Options" onClick={onSelectOptions} />
          <ChoiceText text="About" onClick={handleClickAbout} />
          <ChoiceText text="Quit" onClick={quitApplication} />
        </ChoiceTextContainer>
      </InterTitle>
    </ClipMask>
  );
};

export default StartMenu;
