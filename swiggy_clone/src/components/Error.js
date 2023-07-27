import ErrorPages from "./common/ErrorPages";
import connection_error from "../utils/images/connection_error.png"

const Error = () => {
  const errText = "Connection Error";
  const errDescription = "Please check your internet connection and try again.";
  return (
    <ErrorPages
      imagesUrl={connection_error}
      errText={errText}
      errDescription={errDescription}
      btnText={"RELOAD"}
    />
  );
};

export default Error;
