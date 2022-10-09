import { Fragment, useCallback, useEffect, useState } from "react";

import { SceneType } from "@/types/sceneTypes";
import { useAppSelector } from "@/redux/hooks";
import { slideText, pathA, pathB, pathC } from "./text";
import routes from "@/routes";

import CrumbCoatScene from "./components/crumbCoatScene";
import CakeScene from "./components/cakeScene";

import { InterTitle, ArrowLink } from "@/components/interTitle";
import getSlideContent from "@/helpers/getSlideContent";

const Intro = ({ slideIdx = null }: SceneType) => {
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
    setSlides(newSlides);
    setChoiceIndex(index);
  };

  const slideContent = getSlideContent({ slides, language, handleSelection });

  const renderSlide = (stepName: string | undefined) => {
    switch (stepName) {
      case "crumbCoat":
        return <CrumbCoatScene link={null} onClick={handleNextSlide} />;
      case "cakeScene":
        return <CakeScene link={routes.BAKERY_AUDITION} />;
      default:
        return (
          <InterTitle justifyCentered={!slides[slideIndex].title}>
            {slideContent[slideIndex]}
            {!slides[slideIndex].choices && (
              <ArrowLink
                link={checkSlidesOver() ? routes.BAKERY_AUDITION : null}
                onClick={handleNextSlide}
              />
            )}
          </InterTitle>
        );
    }
  };

  return <Fragment>{renderSlide(slides[slideIndex].stepName)}</Fragment>;
};

export default Intro;
