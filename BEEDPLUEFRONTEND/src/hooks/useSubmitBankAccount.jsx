import { useState, useEffect } from "react";
import { usebackendStore } from "../store/store";
import { useNavigate } from "react-router";

export const useSubmitBankAccount = () => {
  const [error, setError] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscancelled, setisCancelled] = useState(false);
  // const navigate = useNavigate();

  const apiUrl = "https://beedplus.onrender.com/user/accounts";

  const submitbankAccount = async (id, bankname, accountName, accountNumber) => {
    console.log(id)
    setError(null);
    setIspending(true);

    try {
      const postData = {
        id, bankname, accountName, accountNumber
      };

      const res = await fetch(`${apiUrl}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify(postData),
      });

      const data = await res.json();
      console.log(data)
      setIspending(false);
    } catch {
      if (!iscancelled) {
        setError("Unknown Error occured");
      }

      setIspending(false);
    }
  };

  useEffect(() => () => setisCancelled(true), []);

  return { submitbankAccount, error, ispending };
};
