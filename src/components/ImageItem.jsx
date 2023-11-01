import React from 'react'

const ImageItem = ({ item }) => {
    return (
        <div>
            <img className='image-gif' src={item.images.downsized_medium.url} alt="" />
        </div>
    )
}

export default ImageItem