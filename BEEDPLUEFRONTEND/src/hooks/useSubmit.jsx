import { useState } from "react";
import { usebackendStore } from "../store/store";

export const useSubmit = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false); // New state for success
  const accessToken = usebackendStore((state) => state.accessToken);

  const updateAttempts = async (
    campaignId,
    link1,
    link2,
    link3,
    link4,
    link5,
    key2,
    SubmissionId
  ) => {
    const apiUrl = `https://beedplus.onrender.com/campaigns/${campaignId}/submission/${key2}?submissionId=${SubmissionId}`;
    const data = { link1, link2, link3, link4, link5 };
    setIsPending(true);
    setError(null);
    try {
      const res = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.status === "success") {
        setSuccess(true);
      }
      if (result.status === "error") {
        setError(result.message);
      }
      // Set success state based on the result
      setIsPending(false);
    } finally {
      setIsPending(false);
    }
  };

  return { error, isPending, success, updateAttempts };
};
