import { useState, useEffect } from "react";
import { usebackendStore } from "../store/store";
export const useAdminLogin = () => {
  const [error, setError] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscancelled, setisCancelled] = useState(false);
  const setTempAuth = usebackendStore((state) => state.setTempAuth);

  const apiUrl = "https://beedplus.onrender.com/admin";

  const login = async (email, password) => {
    setError(null);
    setIspending(true);

    try {
      const postData = {
        email,
        password,
      };

      const res = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify(postData),
      });
      console.log({ "res1": res });

      const data = await res.json();
      console.log({ "1": data.token });
      if (data.status === "success") {
        setTempAuth(data.data._id, data.token);
      }
      if (data.status === "error") {
        setError(data.message);
      }
      if (data.message) {
        setError(data.message);
      }
      setIspending(false);
    } catch {
      if (!iscancelled) {
        setError("Unknown Error occured");
      }

      setIspending(false);
    }
  };

  useEffect(() => () => setisCancelled(true), []);

  return { login, error, ispending };
};
