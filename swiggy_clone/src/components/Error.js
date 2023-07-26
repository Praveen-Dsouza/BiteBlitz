import { ERROR_URL } from "../utils/constants";
import ErrorPages from "./common/ErrorPages";

const Error = () => {
  const errText = "Connection Error";
  const errDescription = "Please check your internet connection and try again.";
  return (
    <ErrorPages
      imagesUrl={ERROR_URL}
      errText={errText}
      errDescription={errDescription}
      btnText={"RELOAD"}
    />
  );
};

export default Error;
