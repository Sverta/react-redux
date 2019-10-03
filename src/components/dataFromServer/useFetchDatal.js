import { useState, useEffect } from 'react';

// custom hook for get data from server
const useFetchData = (url, options) => {
    const [data, setData] = useState([]);

    async function fetchUrl(url, options) {
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
    }

    useEffect(() => {
        fetchUrl(url, options);
    }, [url, options]);

    return data;
}

export default useFetchData;