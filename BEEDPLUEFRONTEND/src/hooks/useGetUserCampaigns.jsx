import { useState, useEffect } from "react";
import { usebackendStore } from "../store/store";
export const useGetUserCampaigns = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [isCancelled] = useState(false);
  const apiUrl = "https://beedplus.onrender.com/user/campaigns";
  const accessToken = usebackendStore((state) => state.accessToken);
  useEffect(() => {
    const fetchData = async () => {
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
          setError(`Failed to get campaigns. Status: ${res.status}`);
        } else {
          const result = await res.json();

          setDocuments(result);
        }
      } catch (error) {
        if (!isCancelled) {
          setError("Unknown error occurred");
        }
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [apiUrl, isCancelled, accessToken]);

  return { error, isPending, documents };
};
