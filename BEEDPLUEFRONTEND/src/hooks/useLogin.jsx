import { useState, useEffect } from "react";
import { usebackendStore } from "../store/store";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscancelled, setisCancelled] = useState(false);
  const setAuth = usebackendStore((state) => state.setAuth);
  // const navigate = useNavigate();

  const apiUrl = "https://beedplus.onrender.com/auth";

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

      const data = await res.json();
      if (data) {
        setAuth(data.data._id, data.token);
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
