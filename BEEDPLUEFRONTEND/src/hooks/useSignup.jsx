import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usebackendStore } from "../store/store";
export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscancelled, setisCancelled] = useState(false);
  const setFirstName = usebackendStore((state) => state.setFirstName);
  const setLastName = usebackendStore((state) => state.setLastName);
  const setEmail = usebackendStore((state) => state.setEmail);
  const setTiktok = usebackendStore((state) => state.setTiktok);
  const setAcct = usebackendStore((state) => state.setAccount);
  const setBio = usebackendStore((state) => state.setBio);
  const setUserName = usebackendStore((state) => state.setUserName);
  // const setUserId = usebackendStore((state) => state.setUserId);
  const setTempAuth = usebackendStore((state) => state.setTempAuth);
  const navigate = useNavigate();

  const apiUrl = "https://beedplus.onrender.com/auth";

  const signup = async (firstName, lastName, email, password) => {
    setError(null);
    setIspending(true);

    try {
      const postData = {
        email,
        password,
        firstname: firstName,
        lastname: lastName,
      };

      const res = await fetch(`${apiUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await res.json();

      if (data.status === "success") {
        setFirstName(data.data.firstname);
        setLastName(data.data.lastname);
        setTiktok(data.data?.tiktok);
        setEmail(data.data.email);
        setUserName(data.data.username);

        setAcct(
          data.data.account?.bankName,
          data.data.account?.accountName,
          data.data.account?.accountNumber
        );
        setBio(data.data.bio);
        setTempAuth(data.data._id, data.token);
        navigate("/auth/bankaccount");
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

  return { signup, error, ispending };
};
