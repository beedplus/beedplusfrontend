import { useState, useEffect, useCallback } from "react";
import { usebackendStore } from "../store/store";

export const useGetSubmission = (id) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [document, setDocument] = useState({});
  const [isCancelled] = useState(false);
  const apiUrl = `https://beedplus.onrender.com/campaigns/${id}/submission`;
  const accessToken = usebackendStore((state) => state.accessToken);

  const fetchData = useCallback(async () => {
    setIsPending(true);
    setError(null);
    try {
      const res = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (res.status !== 200) {
        setIsPending(false);
        setError(`Failed to get . Status: ${res.status}`);
      } else {
        const result = await res.json();
        setDocument(result);
      }
    } catch (error) {
      if (!isCancelled) {
        setError("Unknown error occurred");
      }
    } finally {
      setIsPending(false);
    }
  }, [apiUrl, accessToken, isCancelled]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { error, isPending, document };
};
