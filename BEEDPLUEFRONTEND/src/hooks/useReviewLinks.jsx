import { useState } from 'react';

const useReviewLinks = ( id,requestData) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url=`https://beedplus.onrender.com/admin/submissions/${id}/review`
  const postData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { response, error, isLoading, postData };
};

export default useReviewLinks;