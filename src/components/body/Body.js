import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home/Home'
import Images from './images/Images'
import ImagesSearch from './images/ImagesSearch'


const Body = () => {
    return (
        <div>
            <section>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/images/:topic" component={Images} exact />
                <Route path="/search" component={ImagesSearch} exact />
            </Switch>
            </section>
        </div>
    )
}

export default Body
