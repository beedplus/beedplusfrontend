import { useState, useEffect } from "react";

export const useGetSingleCampaign = (id) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [isCancelled] = useState(false);
  const apiUrl = `https://singularly-picked-grub.ngrok-free.app/campaigns/${id}`;

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

        if (res.status !== 200) {
          setIsPending(false);
          setError(`Failed to get campaign. Status: ${res.status}`);
        } else {
          const result = await res.json();
          setDocuments(result);
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
  }, [apiUrl, isCancelled]);

  return { error, isPending, documents };
};

// import { useState, useEffect } from "react";
// import { usebackendStore } from "../store/store";

// export const useGetSingleEvent = (id) => {
//   const [error, setError] = useState(null);
//   const [isPending, setIsPending] = useState(false);
//   const [document, setDocument] = useState([]);
//   const [isCancelled] = useState(false);
//   const apiUrl = `https://richlist-backend.onrender.com/events/${id}`;
//   const accessToken = usebackendStore((state) => state.accessToken);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsPending(true);
//       setError(null);
//       try {
//         const res = await fetch(apiUrl, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });

//         if (res.status !== 200) {
//           setIsPending(false);
//           setError(`Failed to get event. Status: ${res.status}`);
//         } else {
//           const result = await res.json();
//           setDocument(result);
//         }
//       } catch (error) {
//         if (!isCancelled) {
//           setError("Unknown error occurred");
//         }
//       } finally {
//         setIsPending(false);
//       }
//     };

//     fetchData();
//   }, [apiUrl, accessToken, isCancelled]);

//   return { error, isPending, document };
// };
