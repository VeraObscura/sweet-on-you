import { Fragment, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SceneType } from "@/types/sceneTypes";
import { useAppSelector } from "@/redux/hooks";
import { slidesA, slidesB, pathA, pathB } from "./text";
import SceneBackground from "@/components/sceneBackground/sceneBackground";
import AnimatedVignette from "@/shared/animatedVignette";

import routes from "@/routes";

import { ClipMask, InterTitle, ArrowLink } from "@/components/interTitle";
import getSlideContent from "@/helpers/getSlideContent";

import bakeryInterior from "@/assets/images/bakeryInterior.jpg";
import bakeryStoreFront from "@/assets/images/bakeryExterior.jpg";

const FirstBigOrder = ({ slideIdx = null }: SceneType) => {
  const navigate = useNavigate();

  const [slideIndex, setSlideIndex] = useState(slideIdx ? slideIdx : 0);
  const [slides, setSlides] = useState(slidesA);
  const [choiceIndex, setChoiceIndex] = useState<number | null>(null);
  const [isClosed, setIsClosed] = useState(false);
  const language = useAppSelector((state: any) => state.options.language);

  const checkSlidesOver = useCallback(() => {
    if (slideIndex >= slides.length - 1) {
      return true;
    } else {
      navigate(routes.FIRST_BIG_ORDER);
    }

    return false;
  }, [slides, slideIndex]);

  const handleNextSlide = useCallback(() => {
    if (!checkSlidesOver()) {
      setSlideIndex(slideIndex + 1);
    } else {
      setIsClosed(true);
      setTimeout(() => {
        navigate(routes.CUSTOMER_IS_ALWAYS_RIGHT);
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
      case "sealedEnvelope":
        return (
          <InterTitle hasBackground={false}>
            <SceneBackground
              link={null}
              onClick={handleNextSlide}
              imageSrc={bakeryInterior}
            />
          </InterTitle>
        );
      default:
        return (
          <InterTitle>
            {isClosed && <AnimatedVignette isClosed={true} />}
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

export default FirstBigOrder;
