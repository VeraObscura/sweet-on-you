import { Fragment, useCallback, useState } from "react";

import { SceneType } from "@/types/sceneTypes";
import { useAppSelector } from "@/redux/hooks";
import { slidesA } from "./text";
import SceneBackground from "@/components/sceneBackground/sceneBackground";

import routes from "@/routes";

import { InterTitle, ArrowLink } from "@/components/interTitle";
import getSlideContent from "@/helpers/getSlideContent";

import bakeryStoreFront from "@/assets/images/bakeryExterior.jpg";

const CastleInTheAir = ({ slideIdx = null }: SceneType) => {
  const [slideIndex, setSlideIndex] = useState(slideIdx ? slideIdx : 0);
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
            {slideContent[slideIndex]}
            {!slides[slideIndex].choices && (
              <ArrowLink
                link={checkSlidesOver() ? routes.THE_SHOW_MUST_GO_ON : null}
                onClick={handleNextSlide}
              />
            )}
          </InterTitle>
        );
    }
  };

  return <Fragment>{renderSlide(slides[slideIndex].stepName)}</Fragment>;
};

export default CastleInTheAir;
