import { Fragment, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SceneType } from "@/types/sceneTypes";
import { useAppSelector } from "@/redux/hooks";
import { slidesA } from "./text";
import SceneBackground from "@/components/sceneBackground/sceneBackground";
import AnimatedVignette from "@/shared/animatedVignette";

import routes from "@/routes";

import { InterTitle, ArrowLink } from "@/components/interTitle";
import getSlideContent from "@/helpers/getSlideContent";

import bakeryStoreFront from "@/assets/images/bakeryExterior.jpg";

const ShowMustGoOn = ({ slideIdx = null }: SceneType) => {
  const navigate = useNavigate();

  const [slideIndex, setSlideIndex] = useState(slideIdx ? slideIdx : 0);
  const [isClosed, setIsClosed] = useState(false);
  const language = useAppSelector((state: any) => state.options.language);
  const slides = slidesA;

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
        navigate(routes.DEVIL_IN_THE_DETAILS);
      }, 2000);
    }
  }, [checkSlidesOver, slideIndex]);

  const slideContent = getSlideContent({ slides, language });

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

export default ShowMustGoOn;
