import { Fragment, useCallback, useEffect, useState } from "react";

import { SceneType } from "types/sceneTypes";
import { useAppSelector } from "redux/hooks";
import { slidesA, slidesB, pathA, pathB, pathC } from "./text";
import BakeryStoreFront from "./components/bakeryStoreFront/bakeryStoreFront";

import routes from "routes";

import { InterTitle, ArrowLink } from "components/interTitle";
import getSlideContent from "helpers/getSlideContent";

const DreamALittleDream = ({ slideIdx = null }: SceneType) => {
  const [slideIndex, setSlideIndex] = useState(slideIdx ? slideIdx : 0);
  const [slides, setSlides] = useState(slidesA);
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

  const handleSelection = (index: number) => {
    let newSlides;
    switch (index) {
      case 0:
        newSlides = slides.concat(pathA);
        break;
      case 1:
        newSlides = slides.concat(pathB);
        break;
      case 2:
        newSlides = slides.concat(pathC);
        break;
      default:
        newSlides = slides.concat(pathA);
    }
    newSlides = newSlides.concat(slidesB);
    setSlides(newSlides);
    setChoiceIndex(index);
  };

  const slideContent = getSlideContent({ slides, language, handleSelection });

  const renderSlide = (stepName: string | undefined) => {
    switch (stepName) {
      case "bakeryStoreFront":
        return <BakeryStoreFront link={null} onClick={handleNextSlide} />;
      default:
        return (
          <InterTitle justifyCentered={!slides[slideIndex].title}>
            {slideContent[slideIndex]}
            {!slides[slideIndex].choices && (
              <ArrowLink
                link={checkSlidesOver() ? routes.CASTLE_IN_THE_AIR : null}
                onClick={handleNextSlide}
              />
            )}
          </InterTitle>
        );
    }
  };

  return <Fragment>{renderSlide(slides[slideIndex].stepName)}</Fragment>;
};

export default DreamALittleDream;
