import { useState, useEffect } from "react";
import { usebackendStore } from "../store/store";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscancelled, setisCancelled] = useState(false);
  const setAuth = usebackendStore((state) => state.setAuth);
  const setFirstName = usebackendStore(state => state.setFirstName)
  const setLastName = usebackendStore(state => state.setLastName)
  const setEmail = usebackendStore(state => state.setEmail)
  const setTiktok = usebackendStore(state => state.setTiktok)
  // const navigate = useNavigate();

  const apiUrl = "https://beedplus.onrender.com/auth";

  const login = async (email, password) => {
    setError(null);
    setIspending(true);

    try {
      const postData = {
        email,
        password,
      };

      const res = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify(postData),
      });
      
      const data = await res.json();
      if (data.status === "success") {
        setFirstName(data.data.firstname)
        setLastName(data.data.lastname)
        setTiktok(data.data.tiktok)
        setEmail(data.data.email)
        setAuth(data.data._id, data.token);
        navigate("/auth/Verification");
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

  return { login, error, ispending };
};
