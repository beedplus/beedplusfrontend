import { useState, useEffect } from "react";
import { usebackendStore } from "../store/store";

export const useSubmit = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [isCancelled] = useState(false);
  const apiUrl = "https://beedplus.onrender.com/campaigns/${}";
  const accessToken = usebackendStore((state) => state.accessToken);
  const submit = async (name, username, tiktok, bio) => {
    const data = { name, username, tiktok, bio };
    setIsPending(true);
    setError(null);
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        data,
      });

      if (res.status !== 200) {
        setIsPending(false);
        setError(`Failed to get event. Status: ${res.status}`);
      } /else {
        const result = await res.json();
        setDocuments(result);
        console.log(result);
      }
    } catch (error) {
      if (!isCancelled) {
        setError("Unknown error occurred");
      }
    } finally {
      setIsPending(false);
    }
  };

  return { error, isPending, submit };
};
