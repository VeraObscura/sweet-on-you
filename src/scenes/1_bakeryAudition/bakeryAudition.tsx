import { slideText } from "./text";
import routes from "@/routes";

import { InterTitle } from "@/components/interTitle";
import Chapter from "@/shared/chapter";
import SceneBackground from "@/components/sceneBackground/sceneBackground";

import bakeryInterior from "@/assets/images/bakeryInterior.jpg";
import bakeryStoreFront from "@/assets/images/bakeryExterior.jpg";
import halfEatenCake from "@/assets/images/halfEatenCake.jpg";

const BakeryAudition = () => {
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
      case "bakeryInterior":
        return (
          <InterTitle hasBackground={false}>
            <SceneBackground
              link={null}
              onClick={onComplete}
              imageSrc={bakeryInterior}
            />
          </InterTitle>
        );
      case "cakeEaten":
        return (
          <InterTitle hasBackground={false}>
            <SceneBackground
              link={null}
              onClick={onComplete}
              imageSrc={halfEatenCake}
            />
          </InterTitle>
        );
      default:
        return;
    }
  };

  return (
    <Chapter
      slideText={slideText}
      nextRoute={routes.FIRST_BIG_ORDER}
      renderStep={renderStep}
    />
  );
};

export default BakeryAudition;
