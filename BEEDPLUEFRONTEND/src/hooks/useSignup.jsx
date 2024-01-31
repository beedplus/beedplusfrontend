import { useState, useEffect } from "react";
import { usebackendStore } from "../store/store";
import { redirect, useNavigate } from "react-router";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscancelled, setisCancelled] = useState(false);
  const setAuth = usebackendStore((state) => state.setAuth);
  const navigate = useNavigate();

  const apiUrl = "https://singularly-picked-grub.ngrok-free.app/auth/";

  const signup = async (firstName, lastName, email, password) => {
    setError(null);
    setIspending(true);

    try {
      const postData = {
        email,
        password,
        firstname: firstName,
        lastname: lastName,
      };

      const res = await fetch(`${apiUrl}/signup`, {
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

  return { signup, error, ispending };
};
