import { Fragment, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SceneType } from "@/types/sceneTypes";
import { useAppSelector } from "@/redux/hooks";
import { slideText, pathA, pathB, pathC } from "./text";
import routes from "@/routes";

import { ClipMask, InterTitle, ArrowLink } from "@/components/interTitle";
import CrumbCoatScene from "./components/crumbCoatScene";
import CakeScene from "./components/cakeScene";
import AnimatedVignette from "@/shared/animatedVignette";
import getSlideContent from "@/helpers/getSlideContent";

const Intro = ({ slideIdx = null }: SceneType) => {
  const navigate = useNavigate();

  const [slideIndex, setSlideIndex] = useState(slideIdx ? slideIdx : 0);
  const [slides, setSlides] = useState(slideText);
  const [choiceIndex, setChoiceIndex] = useState<number | null>(null);
  const [isClosed, setIsClosed] = useState(false);
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
    } else {
      setIsClosed(true);
      setTimeout(() => {
        navigate(routes.BAKERY_AUDITION);
      }, 2000);
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
        return (
          <InterTitle hasBackground={false}>
            <CrumbCoatScene link={null} onClick={handleNextSlide} />
          </InterTitle>
        );
      case "cakeScene":
        return (
          <InterTitle hasBackground={false}>
            {isClosed && <AnimatedVignette isClosed={true} />}
            <CakeScene onClick={handleNextSlide} isClosed={isClosed} />
          </InterTitle>
        );
      default:
        return (
          <InterTitle>
            {slideContent[slideIndex]}
            {!slides[slideIndex].choices && !isClosed && (
              <ArrowLink onClick={handleNextSlide} />
            )}
          </InterTitle>
        );
    }
  };

  return (
    <ClipMask
      hasAnimatedVignette={slides[slideIndex].meta?.hasVignette ? true : false}
    >
      {renderSlide(slides[slideIndex].stepName)}
    </ClipMask>
  );
};

export default Intro;
