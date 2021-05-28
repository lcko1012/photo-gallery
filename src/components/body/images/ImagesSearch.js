import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation } from 'react-router-dom'
import Loading from '../../utils/Loading/Loading';

const ImagesSearch = () => {
    const API_KEY = 'artt4AFHfZ2wGl6lhYknNCUB_u538lI_zVSm0o-7edU'
    const location = useLocation()
    const search = location.search;
    const params = new URLSearchParams(search);
    const [keyword, ] = useState(params.get('keyword'))
    const [resultImages, setResultImages] = useState([])
    const [page, setPage] = useState(0)
    const [input, setInput] = useState(keyword)

    useEffect(() => {
        getKeyword()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword])

    const getKeyword = async () => {
        setPage(page+1)
        try {
            const res = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}`, {
                params: {
                    per_page: 20,
                    query: keyword,
                    page: page
                }
            })

            if (res) {
                setResultImages([...resultImages, ...res.data.results])
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onChange = (e) => {
        setInput(e.target.value)
    }
    const handleSearchSubmit = e => {
        e.preventDefault()
        window.location.href = `/search?keyword=${input}`
    }

    return (
        <div>
           <div className="home__page">
                <form className="home__search"
                onSubmit={handleSearchSubmit}>
                    <h3>Search everything you want:</h3>
                    <input
                    type="text"
                    value={input}
                    onChange={onChange}
                    ></input>
                </form>
            </div>

            <div className="images">
                    
                    <InfiniteScroll
                        dataLength={resultImages.length}
                        next={getKeyword}
                        hasMore={true}
                        loader={<Loading />}
                    >
                        <ul className="images__row">
                            {resultImages.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.urls.full}><img alt="" src={item.urls.regular} /></a>
                                    </li>
                                )
                            })}
                        </ul>
                    </InfiniteScroll>

            </div>
        </div>
    )
}

export default ImagesSearch
