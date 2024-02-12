import { useState, useEffect } from "react";
import { usebackendStore } from "../store/store";

export const useUpdateProfile = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled] = useState(false);
  const apiUrl = "https://beedplus.onrender.com/user/me";
  const accessToken = usebackendStore((state) => state.accessToken);
  const setFirstName = usebackendStore((state) => state.setFirstName);
  const setLastName = usebackendStore((state) => state.setLastName);
  const setEmail = usebackendStore((state) => state.setEmail);
  const setAcct = usebackendStore((state) => state.setAccount);
  const setBio = usebackendStore((state) => state.setBio);
  const setUserName = usebackendStore((state) => state.setUserName);
  const [success, setSuccess] = useState(null);
  const updateProfile = async (name, username, tiktok, bio) => {
    const data = { name, username, tiktok, bio };

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
        setFirstName(result.data.firstname);
        setLastName(result.data.lastname);
        // setTiktok(result.data.tiktok);
        setEmail(result.data.email);
        setUserName(result.data.username);
        if (result.data.account.bankName) {
          setAcct(
            result.data.account?.bankName,
            result.data.account?.accountName,
            result.data.account?.accountNumber
          );
        }

        setBio(result.data.bio);
        setSuccess(true);
      }
      if (result.status === "error") {
        console.log(result);
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

  return { error, isPending, updateProfile, success, setSuccess };
};
