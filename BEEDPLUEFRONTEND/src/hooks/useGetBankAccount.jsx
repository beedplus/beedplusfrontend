import { useState, useEffect } from "react";


export const useGetBankAccount = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [documents, setDocuments] = useState([]);
  let isCancelled = false;

  const apiUrl = `https://beedplus.onrender.com/user/banks`;

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

        if (!isCancelled) {
          if (res.status !== 200) {
            setError(`Failed to get bank accounts. Status: ${res.status}`);
          } else {
            const result = await res.json();
            setDocuments(result.data);
          }
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

  }, [apiUrl]);

  useEffect(() => {
  }, [error]);

  return { error, isPending, documents };
};

