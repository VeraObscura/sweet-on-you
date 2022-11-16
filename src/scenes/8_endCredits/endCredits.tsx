import { Fragment, useCallback, useState } from "react";

import { SceneType } from "@/types/sceneTypes";
import { useAppSelector } from "@/redux/hooks";
import { slidesA } from "./text";

import routes from "@/routes";

import { InterTitle, ArrowLink } from "@/components/interTitle";
import getSlideContent from "@/helpers/getSlideContent";

const EndCredits = ({ slideIdx = null }: SceneType) => {
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

  const renderSlide = () => {
    return (
      <InterTitle
        hasAnimatedVignette={
          slides[slideIndex].meta?.hasVignette ? true : false
        }
      >
        {slideContent[slideIndex]}
        {!slides[slideIndex].choices && (
          <ArrowLink
            link={checkSlidesOver() ? routes.HOME : null}
            onClick={handleNextSlide}
          />
        )}
      </InterTitle>
    );
  };

  return <Fragment>{renderSlide()}</Fragment>;
};

export default EndCredits;
