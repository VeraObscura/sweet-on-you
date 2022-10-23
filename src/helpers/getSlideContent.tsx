import { Fragment } from "react";

import { SlideType, TextType } from "@/types/slideTypes";

import {
  TitleText,
  ChoiceTextContainer,
  ChoiceText,
  CharacterDialogueText,
  NarrationText,
} from "@/components/interTitle";

interface getSlideContentProps {
  slides: SlideType[];
  language: "en" | "es";
  handleSelection?: (index: number) => void;
}
const getSlideContent = ({
  slides,
  language,
  handleSelection,
}: getSlideContentProps) => {
  const choiceContent = (choices: TextType[]) => {
    return choices.map((choice, index) => (
      <ChoiceText
        key={index}
        text={choice[language]}
        link={null}
        onClick={() => {
          handleSelection && handleSelection(index);
        }}
      />
    ));
  };

  const slideContent = slides.map((slide: SlideType) => {
    return (
      <Fragment>
        {slide.chapter && (
          <NarrationText
            text={slide.chapter[language]}
            italic={true}
            capitalize={true}
          />
        )}
        {slide.context && (
          <NarrationText text={slide.context[language]} italic={true} />
        )}
        {slide.title && <TitleText text={slide.title[language]} />}
        {slide.narration && <NarrationText text={slide.narration[language]} />}
        {slide.dialogue && (
          <CharacterDialogueText text={slide.dialogue[language]} />
        )}
        <ChoiceTextContainer>
          {slide.choices && choiceContent(slide.choices)}
        </ChoiceTextContainer>
      </Fragment>
    );
  });

  return slideContent;
};

export default getSlideContent;
