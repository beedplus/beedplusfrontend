import { useState, useEffect } from "react";
import { usebackendStore } from "../store/store";
import { useNavigate } from "react-router";

export const useSubmitBankAccount = () => {
  const [error, setError] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscancelled, setisCancelled] = useState(false);
  const navigate = useNavigate();
  const tempAccessToken = usebackendStore((state) => state.tempAccessToken);
  console.log(tempAccessToken)

  const apiUrl = "https://beedplus.onrender.com/user/accounts";

  const submitbankAccount = async (id, bankname, accountName, accountNumber) => {
    console.log(id)
    setError(null);
    setIspending(true);

    try {
      const postData = {
        id, bankName: bankname, accountName, accountNumber
      };

      const res = await fetch(`${apiUrl}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
          Authorization: `Bearer ${tempAccessToken}`,
        },
        body: JSON.stringify(postData),
      });

      const data = await res.json();
      console.log(data)
      if(data.status  === 'success'){
        navigate("/auth/verification");
      }
      if (data.status === "error") {
        setError(data.message);
      }
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
