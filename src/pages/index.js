import React, { useState } from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTh, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Service';
import Sidebar from '../components/Sidebar'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjTh} />
            <Footer />
        </>
    )
}

export default Home
