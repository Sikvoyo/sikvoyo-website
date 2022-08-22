import BGTest from "../../components/BGText/BGText"
import Start from "../../components/Start/Start"
import IconCircle from "../../components/IconCircle/IconCircle"
import Logo from "../../components/Logo/Logo"
import AboutMe from "../../components/AboutMe/AboutMe"
import Skills from "../../components/Skills/Skills"
import Footer from "../../components/Footer/Footer"
import Navbar from '../../components/Navbar/Navbar';
import Status from "../../components/Status/Status"
import { DEFAULT_BG_TEXT } from "../../consts"
import {React, useState } from 'react';

const Home = () => {
    const [bgText, setBGText] = useState(DEFAULT_BG_TEXT);

    return <>
        <BGTest text={bgText}/>
        <Navbar hoverChange={setBGText}/>
        <Start>
            <IconCircle hoverChange={setBGText}/>
            <Logo />
        </Start>
        <Status />
        <AboutMe hoverChange={setBGText}/>
        <Skills hoverChange={setBGText}/>
        <Footer />
    </>
}

export default Home;