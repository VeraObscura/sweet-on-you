import { slideText } from "./text";
import routes from "@/routes";

import { InterTitle } from "@/components/interTitle";
import Chapter from "@/shared/chapter";
import Letter from "@/components/letter/letter";
import SceneBackground from "@/components/sceneBackground/sceneBackground";

import bakeryStoreFront from "@/assets/images/bakeryExterior.jpg";

const DreamALittleDream = () => {
  const slides = slideText;

  const renderStep = (
    onComplete: any,
    stepName: string | undefined,
    isClosed: boolean
  ) => {
    const slideIndex = slides.findIndex((slide) => slide.stepName === stepName);

    switch (stepName) {
      case "bakeryStoreFront":
        return (
          <InterTitle hasBackground={false}>
            <SceneBackground
              link={null}
              onClick={onComplete}
              imageSrc={bakeryStoreFront}
            />
          </InterTitle>
        );
      case "letter":
        return (
          <Letter
            onClick={onComplete}
            paragraphs={slides[slideIndex].paragraphs}
          />
        );
      default:
        return;
    }
  };

  return (
    <Chapter
      slideText={slides}
      nextRoute={routes.CASTLE_IN_THE_AIR}
      renderStep={renderStep}
    />
  );
};

export default DreamALittleDream;
