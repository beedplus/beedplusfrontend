import { useState, useEffect } from "react";
import {usebackendStore} from "../store/store.js";

export const useGetSingleNotification = (id) => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [document, setDocument] = useState('');
    const [isCancelled] = useState(false);
    const accessToken = usebackendStore((state) => state.accessToken);
    const apiUrl = `https://beedplus.onrender.com/notification/${id}`;

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);
            setError(null);
            try {
                const res = await fetch(apiUrl, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (res.status !== 200) {
                    setIsPending(false);
                    setError(`Failed to get campaign. Status: ${res.status}`);
                } else {
                    const result = await res.json();
                    setDocument(result);
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
    }, [apiUrl, isCancelled, accessToken]);

    return { error, isPending, document };
};

