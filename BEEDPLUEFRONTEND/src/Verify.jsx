import { useVerify } from "./hooks/useVerify";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function Loader() {
  const { token } = useParams();

  const { verify } = useVerify(token);
  useEffect(() => {
    verify();
  }, [verify]);

  return <h1>loading...</h1>;
}
