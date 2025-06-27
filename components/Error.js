import { useRouteError } from "react-router-dom";
import { ERROR_IMAGE } from "../utils/constants";
const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-container">
      <div className="error-img-box">
        <img className="error-img" src={ERROR_IMAGE} alt="panda error image" />
      </div>
      <div className="error-text-box">
        <h1>Oops !! Something Went Wrong.</h1>
        <h2>
          {err !== null ? err.status + ":" + err.statusText : "Page Not Found"}
        </h2>
      </div>
    </div>
  );
};
export default Error;
