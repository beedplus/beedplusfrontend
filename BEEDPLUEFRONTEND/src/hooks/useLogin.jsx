import { useState } from "react";
import { usebackendStore } from "../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscancelled, setisCancelled] = useState(false);
  const setAuth = usebackendStore((state) => state.setAuth);
  // const apiUrl = "https://8e13-102-89-43-94.ngrok-free.app/auth";
  // const apiUrl = "https://richlist-backend.onrender.com/auth";
  const apiUrl = "https://richlist-backend.onrender.com/auth";
  const navigate = useNavigate();
  const login = async (email, password) => {
    setIspending(true);
    setError(null);

    try {
      const postData = { email, password };
      const res = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify(postData),
      });

      const data = await res.json();

      if (data.message) {
        setError(data.message);
        setIspending(false);
        setTimeout(() => {
          setError(null);
        }, 8000);
      } else {
        // Dispatch token action data.accessID
        setAuth(data.userId, data.accessToken);
        setIspending(false);
      }
    } catch {
      if (!iscancelled) {
        setError("Unknown Error occured");
      }

      setIspending(false);
    }
  };
  useEffect(() => {
    return () => setisCancelled(true);
  }, []);

  return { error, ispending, login };
};
