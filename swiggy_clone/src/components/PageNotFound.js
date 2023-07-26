import { PAGE_NOT_FOUND_URL } from "../utils/constants";
import ErrorPages from "./common/ErrorPages";

const PageNotFound = () => {
  const errText = "Page not found";
  const errDescription =
    "Uh-oh! Looks like the page you are trying to access, doesn't exist. Please start a fresh.";

  return (
    <ErrorPages
      imagesUrl={PAGE_NOT_FOUND_URL}
      errText={errText}
      errDescription={errDescription}
      btnText={"GO HOME"}
    />
  );
};

export default PageNotFound;
