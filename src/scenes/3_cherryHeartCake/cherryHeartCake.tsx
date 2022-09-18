import { useState } from "react";

import routes from "routes";
import {
  InterTitle,
  TitleText,
  CharacterDialogueText,
  ArrowLink,
} from "shared/interTitle";

const CherryHeartCake = () => {
  const characterDialogues = [
    <CharacterDialogueText text="Phew! That was a tricky one." />,
    <CharacterDialogueText text="Now, time for the crumbcoat." />,
    <CharacterDialogueText text="This will help keep cake crumbs from mixing with my frosting." />,
  ];
  const [textIndex, setTextIndex] = useState(0);
  const isTextOver = textIndex === characterDialogues.length - 1;

  const handleNextText = () => {
    if (!isTextOver) {
      setTextIndex(textIndex + 1);
    }
  };

  return (
    <div>
      <InterTitle>
        <TitleText name="Mariela" />
        {characterDialogues[textIndex]}
        <ArrowLink
          link={isTextOver ? routes.CHERRY_HEART_CAKE_CRUMB_COAT : null}
          onClick={handleNextText}
        />
      </InterTitle>
    </div>
  );
};

export default CherryHeartCake;
