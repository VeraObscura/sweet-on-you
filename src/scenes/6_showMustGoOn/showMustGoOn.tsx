import { Fragment, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SceneType } from "@/types/sceneTypes";
import { useAppSelector } from "@/redux/hooks";
import { slideText } from "./text";
import SceneBackground from "@/components/sceneBackground/sceneBackground";
import CelluloidFire from "@/components/celluloidFire/celluloidFire";

import routes from "@/routes";

import { ClipMask, InterTitle, ArrowLink } from "@/components/interTitle";
import getSlideContent from "@/helpers/getSlideContent";

import bakeryStoreFront from "@/assets/images/bakeryExterior.jpg";

const ShowMustGoOn = ({ slideIdx = null }: SceneType) => {
  const navigate = useNavigate();

  const [slideIndex, setSlideIndex] = useState(slideIdx ? slideIdx : 0);
  const [isBurning, setIsBurning] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const language = useAppSelector((state: any) => state.options.language);
  const slides = slideText;

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
      setIsBurning(true);

      setTimeout(() => {
        setIsBurning(false);
        setIsClosed(true);
      }, 16000);

      setTimeout(() => {
        navigate(routes.TO_BE_CONTINUED);
      }, 20000);
    }
  }, [checkSlidesOver, slideIndex]);

  const slideContent = getSlideContent({ slides, language });

  const renderStep = (stepName: string | undefined) => {
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
        return;
    }
  };

  return (
    <ClipMask
      hasAnimatedVignette={slides[slideIndex].meta?.hasVignette ? true : false}
    >
      {isBurning && <CelluloidFire />}
      {!isClosed && renderStep(slides[slideIndex].stepName)}
      {slides[slideIndex].stepName ? (
        renderStep(slides[slideIndex].stepName)
      ) : (
        <Fragment>
          {!isClosed && (
            <InterTitle>
              {slideContent[slideIndex]}
              {!slides[slideIndex].choices && !isBurning && (
                <ArrowLink onClick={handleNextSlide} />
              )}
            </InterTitle>
          )}
        </Fragment>
      )}
    </ClipMask>
  );
};

export default ShowMustGoOn;
