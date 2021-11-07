import { useState, useEffect } from 'react';

export function useData(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData(url) {
            setIsLoading(true);
            const res = await fetch(url);
            const responseData = await res.json();

            if (Array.isArray(responseData)) {
                setData(responseData);
            }
            setIsLoading(false);
        }

        fetchData(url);
    }, [url])

    return { data, isLoading };
}