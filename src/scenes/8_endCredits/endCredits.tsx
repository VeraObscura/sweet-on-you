import { slideText } from "./text";
import routes from "@/routes";

import Chapter from "@/shared/chapter";

const EndCredits = () => {
  return (
    <Chapter slideText={slideText} nextRoute={routes.HOME} renderStep={null} />
  );
};

export default EndCredits;
