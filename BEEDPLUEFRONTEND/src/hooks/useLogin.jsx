import { useState, useEffect } from "react";
import { usebackendStore } from "../store/store";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscancelled, setisCancelled] = useState(false);

  const apiUrl = "https://singularly-picked-grub.ngrok-free.app/auth/";

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

      //   if (data.message) {
      //     setError(data.message);
      //     // setIspending(false);
      //     setTimeout(() => {
      //       setError(null);
      //     }, 8000);
      //   } else {
      //     console.log(data);
      //   }
      console.log(data);
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
