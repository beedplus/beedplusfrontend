import { useState, useEffect } from "react";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscancelled, setisCancelled] = useState(false);

  const apiUrl = "https://beedplus.onrender.com/auth";

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

      // const data = await res.json();
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
