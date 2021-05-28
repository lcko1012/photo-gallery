import React from 'react'
import './ImagesBar.css'

const ImagesBar = ({Imgs}) => {
    return (
        <div className="horizontal-snap">
            {Imgs.map((image, index) => {
                return(
                    <div key={index} style={{height: '196px'}}>
                        <a href={image.urls.full}><img alt="" src={image.urls.regular}/></a>
                    </div>
                    
                )
            })}
        </div>
    )
}

export default ImagesBar
