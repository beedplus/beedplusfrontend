import { useVerify } from "./hooks/useVerify";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./Verify.css";

import loading from "../src/assets/loading.gif";
export default function Loader() {
  const { token } = useParams();

  const { verify } = useVerify(token);
  useEffect(() => {
    verify();
  }, [verify]);

  return (
    <div className="loader-container">
      <img className="loading-image" src={loading} alt="loading" />
      <p>Verifying your Email Address.</p>
    </div>
  );
}
