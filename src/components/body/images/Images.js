import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './images.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from '../../utils/Loading/Loading'

const Images = () => {
    const API_KEY = 'artt4AFHfZ2wGl6lhYknNCUB_u538lI_zVSm0o-7edU'
    const params = useParams()
    const topic = params.topic
    const [images, setImages] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        getImages()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [topic])


    const getImages = async () => {
        setPage(page+1)
        try {
            const res = await axios.get(`https://api.unsplash.com/topics/${topic}/photos?client_id=${API_KEY}`, {
                params: {
                    per_page: 30,
                    page: page
                }
            })
            if(res) {
                setImages([...images, ...res.data])
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="images">
        <h2>{topic}'s Photos</h2>
        <InfiniteScroll
            dataLength={images.length}
            next={getImages}
            hasMore={true}
            loader={<Loading />}
        >
            <ul className="images__row">
                {images.map((item,index) => {
                    return (
                        <li key={index}>
                        <a href={item.urls.full}><img alt=""  src={item.urls.regular}/></a>
                        </li>
                    )
                })}
            </ul>
        </InfiniteScroll>
        
        </div>
    )
    
}

export default Images
