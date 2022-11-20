import { Fragment, useCallback, useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";

import { SceneType } from "@/types/sceneTypes";
import { slideText, pathA } from "./text";
import { InterTitle, ArrowLink } from "@/components/interTitle";
import SceneBackground from "@/components/sceneBackground/sceneBackground";
import AnimatedVignette from "@/shared/animatedVignette";
import getSlideContent from "@/helpers/getSlideContent";

import bakeryInterior from "@/assets/images/bakeryInterior.jpg";
import bakeryStoreFront from "@/assets/images/bakeryExterior.jpg";
import halfEatenCake from "@/assets/images/halfEatenCake.jpg";

import routes from "@/routes";

const BakeryAudition = ({ slideIdx = null }: SceneType) => {
  const navigate = useNavigate();

  const [slideIndex, setSlideIndex] = useState(slideIdx ? slideIdx : 0);
  const [slides, setSlides] = useState(slideText);
  const [choiceIndex, setChoiceIndex] = useState<number | null>(null);
  const [isClosed, setIsClosed] = useState(false);
  const language = useAppSelector((state: any) => state.options.language);

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
        navigate(routes.FIRST_BIG_ORDER);
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
    let newSlides = slides.concat(pathA);
    setSlides(newSlides);
    setChoiceIndex(index);
  };

  const slideContent = getSlideContent({ slides, language, handleSelection });

  const renderSlide = (stepName: string | undefined) => {
    switch (stepName) {
      case "bakeryStoreFront":
        return (
          <InterTitle hasBackground={false}>
            <SceneBackground
              link={null}
              onClick={handleNextSlide}
              imageSrc={bakeryStoreFront}
            />
          </InterTitle>
        );
      case "bakeryInterior":
        return (
          <InterTitle hasBackground={false}>
            <SceneBackground
              link={null}
              onClick={handleNextSlide}
              imageSrc={bakeryInterior}
            />
          </InterTitle>
        );
      case "cakeEaten":
        return (
          <InterTitle hasBackground={false}>
            <SceneBackground
              link={null}
              onClick={handleNextSlide}
              imageSrc={halfEatenCake}
            />
          </InterTitle>
        );
      default:
        return (
          <InterTitle
            hasAnimatedVignette={
              slides[slideIndex].meta?.hasVignette ? true : false
            }
          >
            {isClosed && <AnimatedVignette isClosed={true} />}
            {slideContent[slideIndex]}
            {!slides[slideIndex].choices && !isClosed && (
              <ArrowLink onClick={handleNextSlide} />
            )}
          </InterTitle>
        );
    }
  };

  return <Fragment>{renderSlide(slides[slideIndex].stepName)}</Fragment>;
};

export default BakeryAudition;
