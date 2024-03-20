import { useState } from "react";
import { usebackendStore } from "../store/store.js";
export const useGetRefreshToken = () => {
  const apiUrl = `https://beedplus.onrender.com/auth/tiktok/refresh-tokens`;
  const [error, setError] = useState(null);
  const accessToken = usebackendStore((state) => state.accessToken);
  const refreshtoken = async () => {
    try {
      const res = await fetch(`${apiUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(res);
    } catch {
      setError("Unknown Error occured");
    }
  };

  return { refreshtoken };
};
