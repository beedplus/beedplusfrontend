import { useState, useEffect } from "react";
import { usebackendStore } from "../store/store";

export const useSubmit = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [isCancelled] = useState(false);
  const accessToken = usebackendStore((state) => state.accessToken);

  const submit = async (campaignId, link1, link2, link3, link4, link5) => {
    const apiUrl = `https://beedplus.onrender.com/campaigns/${campaignId}/submission`;
    const data = { campaignId, link1, link2, link3, link4, link5 };
    setIsPending(true);
    setError(null);
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      });

      if (res.status !== 200) {
        setIsPending(false);
        setError(`Failed to get . Status: ${res.status}`);
      } else {
        const result = await res.json();
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
