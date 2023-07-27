import ErrorPages from "./common/ErrorPages";
import page_not_found from "../utils/images/page_not_found.png"

const PageNotFound = () => {
  const errText = "Page not found";
  const errDescription =
    "Uh-oh! Looks like the page you are trying to access, doesn't exist. Please start a fresh.";

  return (
    <ErrorPages
      imagesUrl={page_not_found}
      errText={errText}
      errDescription={errDescription}
      btnText={"GO HOME"}
    />
  );
};

export default PageNotFound;
