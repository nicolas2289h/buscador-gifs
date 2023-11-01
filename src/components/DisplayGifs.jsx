import React from 'react'
import useApi from '../hooks/useApi'
import ImageItem from './ImageItem'

const DisplayGifs = ({ category }) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SLgSMifceuveizI4RG9LsLya2mtpXhYU&q=${category}&limit=20`
    const { data, loading } = useApi(url)

    return (
        <div className='container-gifs p-3 mt-4 d-flex justify-content-evenly flex-wrap'>

            {loading
            ?
            'Cargando'
            :            
            data?.map(item => (
                <ImageItem key={item.id} item={item} />
            ))}

        </div>
    )
}

export default DisplayGifs