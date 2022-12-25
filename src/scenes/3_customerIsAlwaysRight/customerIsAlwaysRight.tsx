import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SceneType } from "@/types/sceneTypes";
import { useAppSelector } from "@/redux/hooks";
import { slidesA } from "./text";
import Letter from "@/components/letter/letter";
import SceneBackground from "@/components/sceneBackground/sceneBackground";
import AnimatedVignette from "@/shared/animatedVignette";

import routes from "@/routes";

import { ClipMask, InterTitle, ArrowLink } from "@/components/interTitle";
import getSlideContent from "@/helpers/getSlideContent";

import bakeryStoreFront from "@/assets/images/bakeryExterior.jpg";
import bakeryInterior from "@/assets/images/bakeryInterior.jpg";

const CustomerIsAlwaysRight = ({ slideIdx = null }: SceneType) => {
  const navigate = useNavigate();

  const [slideIndex, setSlideIndex] = useState(slideIdx ? slideIdx : 0);
  const [isClosed, setIsClosed] = useState(false);
  const slides = slidesA;
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
        navigate(routes.DREAM_A_LITTLE_DREAM);
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
      case "letter":
        return (
          <Letter
            onClick={handleNextSlide}
            paragraphs={slides[slideIndex].paragraphs}
          />
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

  return (
    <ClipMask
      hasAnimatedVignette={slides[slideIndex].meta?.hasVignette ? true : false}
    >
      {renderSlide(slides[slideIndex].stepName)}
    </ClipMask>
  );
};

export default CustomerIsAlwaysRight;
