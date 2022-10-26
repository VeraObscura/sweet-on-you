import { Fragment, useCallback, useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";

import { SceneType } from "@/types/sceneTypes";
import { slideText, pathA } from "./text";
import { InterTitle, ArrowLink } from "@/components/interTitle";
import SceneBackground from "@/components/sceneBackground/sceneBackground";
import getSlideContent from "@/helpers/getSlideContent";

import bakeryInterior from "@/assets/images/bakeryInterior4.jpg";
import bakeryStoreFront from "@/assets/images/bakeryExterior5.jpg";
import halfEatenCake from "@/assets/images/halfEatenCake.jpg";

import routes from "@/routes";

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

  const handleSelection = (index: number) => {
    let newSlides = slides.concat(pathA);
    setSlides(newSlides);
    setChoiceIndex(index);
  };

  const slideContent = getSlideContent({ slides, language, handleSelection });

  const renderSlide = (stepName: string | undefined) => {
    switch (stepName) {
      case "bakeryStoreFront":
        return (
          <SceneBackground
            link={null}
            onClick={handleNextSlide}
            imageSrc={bakeryStoreFront}
          />
        );
      case "bakeryInterior":
        return (
          <SceneBackground
            link={null}
            onClick={handleNextSlide}
            imageSrc={bakeryInterior}
          />
        );
      case "cakeEaten":
        return (
          <SceneBackground
            link={null}
            onClick={handleNextSlide}
            imageSrc={halfEatenCake}
          />
        );
      default:
        return (
          <InterTitle>
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
