import { useEffect, useState } from "react";

function useFetch(url) {
    let [data, setData] = useState(null);
    let [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setData(data); 
                setError(null);
            })
            .catch(error=>{
                setError(error.message)
            })
    }, [url])



    return {data, error};
}

export default useFetch;