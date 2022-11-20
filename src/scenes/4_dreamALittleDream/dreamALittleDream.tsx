import { Fragment, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SceneType } from "@/types/sceneTypes";
import { useAppSelector } from "@/redux/hooks";
import { slidesA, slidesB, pathA, pathB, pathC } from "./text";
import SceneBackground from "@/components/sceneBackground/sceneBackground";
import AnimatedVignette from "@/shared/animatedVignette";

import routes from "@/routes";

import { InterTitle, ArrowLink } from "@/components/interTitle";
import getSlideContent from "@/helpers/getSlideContent";

import bakeryStoreFront from "@/assets/images/bakeryExterior.jpg";

const DreamALittleDream = ({ slideIdx = null }: SceneType) => {
  const navigate = useNavigate();

  const [slideIndex, setSlideIndex] = useState(slideIdx ? slideIdx : 0);
  const [slides, setSlides] = useState(slidesA);
  const [isClosed, setIsClosed] = useState(false);
  const [choiceIndex, setChoiceIndex] = useState<number | null>(null);
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
        navigate(routes.CASTLE_IN_THE_AIR);
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
    newSlides = newSlides.concat(slidesB);
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

export default DreamALittleDream;
