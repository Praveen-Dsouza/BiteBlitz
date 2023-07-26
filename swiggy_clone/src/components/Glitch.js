import { GLITCH_URL } from "../utils/constants";
import ErrorPages from "./common/ErrorPages";

const Glitch = () => {
  const errText = "We'll be back shortly";
  const errDescription =
    "We are fixing a temporary glitch. Sorry for the inconvenience.";
  return (
    <ErrorPages
      imagesUrl={GLITCH_URL}
      errText={errText}
      errDescription={errDescription}
      btnText={"GO BACK"}
    />
  );
};

export default Glitch;
