import { useState } from "react";
import { usebackendStore } from "../store/store";

export const useUpdateClaimStatus = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false); // New state for success
  const accessToken = usebackendStore((state) => state.accessToken);

  const updateClaim = async (campaignId, claim, attemptId, SubmissionId) => {
    const apiUrl = `https://beedplus.onrender.com/campaigns/${campaignId}/submission/${attemptId}?submissionId=${SubmissionId}`;
    const data = { claimStatus: claim };
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
      if (res.status !== 200) {
        setIsPending(false);
        setError(`Failed to get . Status: ${res.status}`);
      } else {
        const result = await res.json();
        console.log(result);
        if (result.status == "success") {
          setSuccess(true);
        }

        setIsPending(false); // Set success state based on the result
      }
    } catch (error) {
      setError("Unknown error occurred");
    } finally {
      setIsPending(false);
    }
  };

  return { error, isPending, success, updateClaim };
};
