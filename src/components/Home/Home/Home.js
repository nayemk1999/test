import React from 'react'
import HeadCarousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import OurPartner from '../OurPartner/OurPartner';
import Properties from '../Properties/Properties';
import RecentlyAdded from '../RecentlyAdded/RecentlyAdded'
// import Carousell from './../Carousel/Carousell';

export default function Home() {
    return (
        <div>
            <Header/>
            <HeadCarousel/>
            <RecentlyAdded/>
            <Properties/>
            <OurPartner/>
            <Footer/>
        </div>
    )
}
