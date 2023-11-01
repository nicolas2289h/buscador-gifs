import React, { useEffect, useState } from 'react'

const useApi = (url) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    const fetchApi = () => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data.data))
            .catch(error => console.log(error))
        setLoading(false)
    }

    useEffect(() => {
            fetchApi()
    }, [url])

    return { data, loading }
}

export default useApi