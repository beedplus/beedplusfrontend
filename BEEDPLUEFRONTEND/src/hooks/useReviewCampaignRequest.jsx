import { useState, useEffect } from "react";
import { usebackendStore } from "../store/store";

const usePutRequest = (id) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const url = `https://beedplus.onrender.com/admin/campaign-requests/${id}`;
    const tempAccessToken = usebackendStore((state) => state.tempAccessToken)

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization:`Bearer ${tempAccessToken}`
            },
            body: JSON.stringify(id),
          });
          const json = await res.json();
          setResponse(json);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
  
      fetchData();
  
      // Cleanup function if needed
      return () => {
        // Cleanup code here if needed
      };
    }, [id]);
  
    return { response, error, isLoading };
  };
  
  export default usePutRequest;