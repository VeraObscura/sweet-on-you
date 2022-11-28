import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SceneType } from "@/types/sceneTypes";
import { useAppSelector } from "@/redux/hooks";
import { slidesA } from "./text";
import SceneBackground from "@/components/sceneBackground/sceneBackground";
import CelluloidFire from "@/components/celluloidFire/celluloidFire";

import routes from "@/routes";

import { ClipMask, InterTitle, ArrowLink } from "@/components/interTitle";
import getSlideContent from "@/helpers/getSlideContent";

import bakeryStoreFront from "@/assets/images/bakeryExterior.jpg";

const ShowMustGoOn = ({ slideIdx = null }: SceneType) => {
  const navigate = useNavigate();

  const [slideIndex, setSlideIndex] = useState(slideIdx ? slideIdx : 0);
  const [isFadingIn, setIsFadingIn] = useState(false);
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
    setIsFadingIn(true);
    setTimeout(() => {
      setIsFadingIn(false);
    }, 1000);

    if (!checkSlidesOver()) {
      setSlideIndex(slideIndex + 1);
    } else {
      setIsClosed(true);
      setTimeout(() => {
        navigate(routes.DEVIL_IN_THE_DETAILS);
      }, 15000);
    }
  }, [checkSlidesOver, slideIndex]);

  const slideContent = getSlideContent({ slides, language });

  const buildSlideArray = () => {
    let slideArray = slides.map((slide, idx) => {
      if (slide.stepName === "bakeryStoreFront") {
        return (
          <InterTitle hasBackground={false}>
            <SceneBackground
              link={null}
              onClick={handleNextSlide}
              imageSrc={bakeryStoreFront}
            />
          </InterTitle>
        );
      } else {
        return (
          <InterTitle>
            {slideContent[idx]}
            {!slides[idx].choices && !isClosed && (
              <ArrowLink onClick={handleNextSlide} />
            )}
          </InterTitle>
        );
      }
    });
    return slideArray;
  };

  const slideArray = buildSlideArray();

  // const renderSlide = (stepName: string | undefined) => {
  //   switch (stepName) {
  //     case "bakeryStoreFront":
  //       return (
  //         <InterTitle hasBackground={false}>
  //           <SceneBackground
  //             link={null}
  //             onClick={handleNextSlide}
  //             imageSrc={bakeryStoreFront}
  //           />
  //         </InterTitle>
  //       );
  //     default:
  //       return (
  //         <InterTitle>
  //           {slideContent[slideIndex]}
  //           {!slides[slideIndex].choices && !isClosed && (
  //             <ArrowLink onClick={handleNextSlide} />
  //           )}
  //         </InterTitle>
  //       );
  //   }
  // };

  return (
    <ClipMask
      hasAnimatedVignette={slides[slideIndex].meta?.hasVignette ? true : false}
    >
      {isClosed && <CelluloidFire />}
      {/* {renderSlide(slides[slideIndex].stepName)} */}
      {slideArray[slideIndex]}
    </ClipMask>
  );
};

export default ShowMustGoOn;
