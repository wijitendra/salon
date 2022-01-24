import React from 'react'
import Photos from './Photos'
import './PhotoGrid.css'
const PhotoGrid = () => {
    return (
        <div className='photogrid_container'>
            {
                Photos.map((currVal,index,arr)=>{
                    return(
                        <div className='photo_item' style={{backgroundImage:"url(./../../public/images/"+currVal.src+")"}} key={index}></div>
                    )
                })
            }
        </div>
    )
}

export default PhotoGrid
