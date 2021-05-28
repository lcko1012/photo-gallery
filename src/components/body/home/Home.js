import React, { useEffect, useState } from 'react'
import ImagesBar from './imagesBar/ImagesBar'
import './home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const API_KEY = 'artt4AFHfZ2wGl6lhYknNCUB_u538lI_zVSm0o-7edU'
    const [filmImgs, setFilmImgs] = useState([]) 
    const [streetImgs, setStreetImgs] = useState([]) 
    const [travelImgs, setTravelImgs] = useState([]) 
    const [artsImgs, setArtsImgs] = useState([]) 
    const [keyword, setKeyword] = useState('')



    useEffect(() => {
        const getFilm = async () => {
            try {
                const res = await axios.get(`https://api.unsplash.com/topics/film/photos?client_id=${API_KEY}`)
                if (res) {
                    setFilmImgs(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getFilm()
    }, [])

    useEffect(() => {
        const getStreet = async () => {
            try {
                const res = await axios.get(`https://api.unsplash.com/topics/street-photography/photos?client_id=${API_KEY}`)
                if (res) {
                    setStreetImgs(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getStreet()
    }, [])

    useEffect(() => {
        const getTravel = async () => {
            try {
                const res = await axios.get(`https://api.unsplash.com/topics/travel/photos?client_id=${API_KEY}`)
                if (res) {
                    setTravelImgs(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getTravel()
    }, [])

    useEffect(() => {
        const getArts = async () => {
            try {
                const res = await axios.get(`https://api.unsplash.com/topics/arts-culture/photos?client_id=${API_KEY}`)
                if (res) {
                    setArtsImgs(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getArts()
    }, [])

    const onChange = (e) => {
        setKeyword(e.target.value)
    }
    const handleSearchSubmit = e => {
        e.preventDefault()
        window.location.href = `/search?keyword=${keyword}`
    }

    return (
        <div>
            <div className="home__page">
                <form className="home__search"
                onSubmit={handleSearchSubmit}>
                    <h3>Search everything you want:</h3>
                    <input
                    type="text"
                    value={keyword}
                    onChange={onChange}
                    ></input>
                </form>
            </div>

            <div className="home__moreImg">
                <h3>Film</h3>
                <Link to="/images/film">Click more</Link>
            </div>
            <ImagesBar Imgs={filmImgs} />

            <div className="home__moreImg">
                <h3>Street Photography</h3>
                <Link to="/images/street-photography">Click more</Link>
            </div>
            <ImagesBar  Imgs={streetImgs}/>

            <div className="home__moreImg">
                <h3>Travel</h3>
                <Link to="/images/travel">Click more</Link>
            </div>
            <ImagesBar Imgs={travelImgs}/>

            <div className="home__moreImg">
                <h3>Arts & Culture</h3>
                <Link to="/images/arts-culture">Click more</Link>
            </div>
            <ImagesBar Imgs={artsImgs} />
        </div>
            
    )
}

export default Home
