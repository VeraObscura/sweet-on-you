import { slideText } from "./text";
import routes from "@/routes";

import Chapter from "@/shared/chapter";
import { InterTitle } from "@/components/interTitle";
import CrumbCoatScene from "./components/crumbCoatScene";
import CakeScene from "./components/cakeScene";
import AnimatedVignette from "@/shared/animatedVignette";

const Intro = () => {
  const renderStep = (
    onComplete: any,
    stepName: string | undefined,
    isClosed: boolean
  ) => {
    switch (stepName) {
      case "crumbCoat":
        return (
          <InterTitle hasBackground={false}>
            <CrumbCoatScene link={null} onClick={onComplete} />
          </InterTitle>
        );
      case "cakeScene":
        return (
          <InterTitle hasBackground={false}>
            {isClosed && <AnimatedVignette isClosed={true} />}
            <CakeScene onClick={onComplete} isClosed={isClosed} />
          </InterTitle>
        );
      default:
        return;
    }
  };

  return (
    <Chapter
      slideText={slideText}
      nextRoute={routes.BAKERY_AUDITION}
      renderStep={renderStep}
    />
  );
};

export default Intro;
