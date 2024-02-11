import { useState, useEffect } from "react";
import { usebackendStore } from "../store/store";

export const useUpdateBankAccount = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled] = useState(false);
  const apiUrl = "https://beedplus.onrender.com/user/accounts";
  const accessToken = usebackendStore((state) => state.accessToken);
  const [success, setSuccess] = useState(null);
  const setAcct = usebackendStore((state) => state.setAccount);
  const updateBankAccount = async (bankName, accountName, accountNumber) => {
    const data = { bankName, accountName, accountNumber };
    setIsPending(true);
    setError(null);
    try {
      const res = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.status === "success") {
        if (result.data.account.bankName) {
          setAcct(
            result.data.account?.bankName,
            result.data.account?.accountName,
            result.data.account?.accountNumber
          );
        }
        setSuccess(true);
      }
      if (result.status === "error") {
        // setError(result.)
      }
    } catch (error) {
      if (!isCancelled) {
        setError("Unknown error occurred");
      }
    } finally {
      setIsPending(false);
    }
  };

  return { error, isPending, updateBankAccount, success, setSuccess };
};
