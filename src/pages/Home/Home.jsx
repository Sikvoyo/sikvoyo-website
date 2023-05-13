import {React} from 'react';
import css from './Home.module.css'

const Home = () => {

    return <>
    <div className={css.container}>
        <h1 className={css.kvvoya}>kvvoya</h1>
        <h4 className={css.kvvoya}>under construction</h4>
        <h6 className={css.kvvoya}>it won't be finished soon</h6>
        <ul className='links'>
            <li><a href='https://www.twitter.com/kvvoya'>Twitter</a></li>
            <li><a href='https://instagram.com/kvvoya'>Instagram</a></li>
            <li><a href='https://rateyourmusic.com/~kvvoya'>RateYourMusic</a></li>
            <li><a href='https://github.com/kvvoya'>GitHub</a></li>
            <li><a href='https://steamcommunity.com/id/kvvoya'>Steam</a></li>
            <li><a href='https://open.spotify.com/user/uf54ekf86axg4lvzivm1wedqr'>Spotify</a></li>
            <li><a href='https://www.last.fm/user/kvvoya'>Last.fm</a></li>
            <li>kvvoya#2445</li>
        </ul>
        <br />
        <p className={css.pinfo}>Hello! I am kvvoya! I am drain-pilled and i really really love madeline UwU</p>
        <p className={css.pinfo}>Anyway, I am pretty <strike>normal</strike> silly, like <strike>nothing</strike> everything special. I like doing stuff, but I don't do that so often. One day there will be stuff I would like to share, and this website will be the place for it. The idea for a new website is kinda crazy, so it will take time and energy and won't happen in a near time.</p>
        <p className={css.pinfo}>I am. You can find me on the links above!</p>
        <p className={css.pinfo}>I am also working on some of my major projects such as my debut album and secret stuff! There will be information about it once I remake this website (hopefully some time maybe)</p>
        <p className={css.pinfo}>So, yeah! I hope you're doing well! Uhhhhmmmmm....</p>
    </div>
    </>
}

export default Home;