import { slideText } from "./text";
import routes from "@/routes";

import { InterTitle } from "@/components/interTitle";
import Chapter from "@/shared/chapter";
import SceneBackground from "@/components/sceneBackground/sceneBackground";

import bakeryStoreFront from "@/assets/images/bakeryExterior.jpg";

const CastleInTheAir = () => {
  const slides = slideText;

  const renderStep = (
    onComplete: any,
    stepName: string | undefined,
    isClosed: boolean
  ) => {
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
      default:
        return;
    }
  };

  return (
    <Chapter
      slideText={slides}
      nextRoute={routes.THE_SHOW_MUST_GO_ON}
      renderStep={renderStep}
    />
  );
};

export default CastleInTheAir;
