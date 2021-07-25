
import React from 'react'
import Header from '../Header/Header/Header'
import RecentlyAdded from '../RecentlyAdded/RecentlyAdded'
import Carousell from './../Carousel/Carousell';

export default function Home() {
    return (
        <div>
            <Header/>
            <Carousell/>
            <RecentlyAdded/>
        </div>
    )
}
