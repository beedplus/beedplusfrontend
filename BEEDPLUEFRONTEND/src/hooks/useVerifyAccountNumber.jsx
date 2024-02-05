import { useState, useEffect } from "react";

export const useVerifyAccountNumber = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [data, setData] = useState([]);

    const apiUrl = new URL("https://beedplus.onrender.com/user/verify-account");

    useEffect(() => {
        const fetchData = async (bankCode, accountNumber) => {
            setIsPending(true);
            setError(null);

            try {
                // Add the necessary data to the query
                apiUrl.searchParams.set("bankCode", bankCode);
                apiUrl.searchParams.set("accountNumber", accountNumber)

                // Process the response
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log(data);
                setData(data);

            } catch (error) {
                setError(error.message);
            } finally {
                setIsPending(false);
            }
        }

        fetchData();

    }, []);

    useEffect(() => {
    }, [error]);

    return { isError: error, isLoading: isPending, data };
};

