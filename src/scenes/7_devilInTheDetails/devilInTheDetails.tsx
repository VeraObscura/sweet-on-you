import { slideText } from "./text";
import routes from "@/routes";

import { InterTitle } from "@/components/interTitle";
import Chapter from "@/shared/chapter";
import SceneBackground from "@/components/sceneBackground/sceneBackground";

import bakeryStoreFront from "@/assets/images/bakeryExterior.jpg";

const DevilInTheDetails = () => {
  const slides = slideText;

  const renderStep = (
    onComplete: any,
    stepName: string | undefined,
    isClosed: boolean,
    checkSlidesOver: any
  ) => {
    switch (stepName) {
      case "bakeryStoreFront":
        return (
          <InterTitle hasBackground={false}>
            <SceneBackground
              link={checkSlidesOver() ? routes.END_CREDITS : null}
              onClick={onComplete}
              imageSrc={bakeryStoreFront}
            />
          </InterTitle>
        );
      default:
        return;
    }
  };

  return (
    <Chapter
      slideText={slides}
      nextRoute={routes.END_CREDITS}
      renderStep={renderStep}
    />
  );
};

export default DevilInTheDetails;
