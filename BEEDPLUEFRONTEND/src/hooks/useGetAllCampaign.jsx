import { useState, useEffect } from "react";

export const useGetAllCampaign = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [isCancelled] = useState(false);
  const apiUrl = "https://singularly-picked-grub.ngrok-free.app/campaigns";

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      setError(null);
      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status !== 200) {
          setIsPending(false);
          setError(`Failed to get event. Status: ${res.status}`);
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
  }, [apiUrl, isCancelled]);

  return { error, isPending, documents };
};
