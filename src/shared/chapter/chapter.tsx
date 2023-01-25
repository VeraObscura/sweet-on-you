import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TextType } from "@/types/slideTypes";
import { useAppSelector } from "@/redux/hooks";
import AnimatedVignette from "@/shared/animatedVignette";

import { ClipMask, InterTitle, ArrowLink } from "@/components/interTitle";
import getSlideContent from "@/helpers/getSlideContent";

const Chapter = ({
  slideText,
  nextRoute,
  renderStep,
  slideIdx = null,
}: any) => {
  const slides = slideText;
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(slideIdx ? slideIdx : 0);
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
      setSlideIndex(slideIndex + slides[slideIndex].jumps);
    } else {
      setIsClosed(true);
      setTimeout(() => {
        navigate(nextRoute);
      }, 2000);
    }
  }, [checkSlidesOver, slideIndex]);

  const handleSelection = (index: number) => {
    const choices = slides[slideIndex]?.choices as TextType[];
    const i = choices[index].jumps || 0;
    setSlideIndex(slideIndex + i);
  };

  const slideContent = getSlideContent({ slides, language, handleSelection });

  return (
    <ClipMask
      hasAnimatedVignette={slides[slideIndex].meta?.hasVignette ? true : false}
    >
      {slides[slideIndex].stepName && renderStep ? (
        renderStep(
          handleNextSlide,
          slides[slideIndex].stepName,
          isClosed,
          checkSlidesOver
        )
      ) : (
        <InterTitle>
          {isClosed && <AnimatedVignette isClosed={true} />}
          {slideContent[slideIndex]}
          {!slides[slideIndex].choices && !isClosed && (
            <ArrowLink onClick={handleNextSlide} />
          )}
        </InterTitle>
      )}
    </ClipMask>
  );
};

export default Chapter;
