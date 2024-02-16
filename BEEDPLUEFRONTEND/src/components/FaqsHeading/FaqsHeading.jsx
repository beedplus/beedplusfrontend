import "./FaqsHeading.scss";
import { Link } from "react-router-dom";

function FaqsHeading() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="heading">
      <Link className="faqs" to="/faq">
        FAQS
      </Link>
      <button className="how-it-works-button">
        <Link className="how-it-works-link" to="/how-it-works">
          How it works{" "}
        </Link>
      </button>
      <button className="how-it-works-button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default FaqsHeading;
