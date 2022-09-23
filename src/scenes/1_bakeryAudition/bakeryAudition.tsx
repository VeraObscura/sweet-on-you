import { Fragment, useCallback, useEffect, useState } from "react";

import { SlideType, TextType } from "types/slideTypes";
import { SceneType } from "types/sceneTypes";
import { useAppSelector } from "redux/hooks";
import { slideText, pathA } from "./text";
import BakeryStoreFront from "./components/bakeryStoreFront/bakeryStoreFront";

import routes from "routes";

import {
  InterTitle,
  TitleText,
  CharacterDialogueText,
  NarrationText,
  ChoiceText,
  ArrowLink,
} from "components/interTitle";

const BakeryAudition = ({ slideIdx = null }: SceneType) => {
  const [slideIndex, setSlideIndex] = useState(slideIdx ? slideIdx : 0);
  const [slides, setSlides] = useState(slideText);
  const [choiceIndex, setChoiceIndex] = useState<number | null>(null);
  const language = useAppSelector((state) => state.options.language);

  const checkSlidesOver = useCallback(() => {
    if (slideIndex >= slides.length - 1) {
      return true;
    }
    return false;
  }, [slides, slideIndex]);

  const handleNextSlide = useCallback(() => {
    if (!checkSlidesOver()) {
      setSlideIndex(slideIndex + 1);
    }
  }, [checkSlidesOver, slideIndex]);

  // Handles change in cake choice selection
  useEffect(() => {
    if (choiceIndex !== null) {
      handleNextSlide();

      //reset choiceIndex
      setChoiceIndex(null);
    }
  }, [choiceIndex, handleNextSlide]);

  const choiceContent = (choices: TextType[]) => {
    return choices.map((choice, index) => (
      <ChoiceText
        key={index}
        text={choice[language]}
        link={null}
        onClick={() => {
          handleSelection(index);
        }}
      />
    ));
  };

  const handleSelection = (index: number) => {
    let newSlides = slides.concat(pathA);
    setSlides(newSlides);
    setChoiceIndex(index);
  };

  const slideContent = slides.map((slide: SlideType) => {
    return (
      <Fragment>
        {slide.title && <TitleText text={slide.title[language]} />}
        {slide.narration && <NarrationText text={slide.narration[language]} />}
        {slide.dialogue && (
          <CharacterDialogueText text={slide.dialogue[language]} />
        )}
        {slide.choices && choiceContent(slide.choices)}
      </Fragment>
    );
  });

  const renderSlide = (stepName: string | undefined) => {
    switch (stepName) {
      case "bakeryStoreFront":
        return <BakeryStoreFront link={null} onClick={handleNextSlide} />;
      case "bakeryInterior":
        return <BakeryStoreFront link={null} onClick={handleNextSlide} />;
      case "cakeEaten":
        return <BakeryStoreFront link={null} onClick={handleNextSlide} />;
      default:
        return (
          <InterTitle justifyCentered={!slides[slideIndex].title}>
            {slideContent[slideIndex]}
            {!slides[slideIndex].choices && (
              <ArrowLink
                link={checkSlidesOver() ? routes.FIRST_BIG_ORDER : null}
                onClick={handleNextSlide}
              />
            )}
          </InterTitle>
        );
    }
  };

  return <Fragment>{renderSlide(slides[slideIndex].stepName)}</Fragment>;
};

export default BakeryAudition;
