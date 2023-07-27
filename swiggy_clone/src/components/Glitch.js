import ErrorPages from "./common/ErrorPages";
import glitch from "../utils/images/glitch.png"

const Glitch = () => {
  const errText = "We'll be back shortly";
  const errDescription =
    "We are fixing a temporary glitch. Sorry for the inconvenience.";
  return (
    <ErrorPages
      imagesUrl={glitch}
      errText={errText}
      errDescription={errDescription}
      btnText={"GO BACK"}
    />
  );
};

export default Glitch;
