import Navbar from '../../components/Navbar/Navbar';
import Buffer from '../../components/Buffer/Buffer';
import Game from '../../components/Things/Game/Game';
import Footer from '../../components/Footer/Footer';
import './Favorites.css'

const gamesJSON = require('../../jsons/favGames.json')
const moviesJSON = require('../../jsons/favFilms.json')
const songsJSON = require('../../jsons/favSongs.json')
const showsJSON = require('../../jsons/favSeries.json')

const Favorites = () => {
    const games = gamesJSON.games;
    const movies = moviesJSON.films;
    const songs = songsJSON.songs;
    const shows = showsJSON.series;

    const gamesArray = games.map((thing, index) => {
        return <Game key={index} name={thing.name} author={thing.author} year={thing.year} cover={thing.cover} link={thing.link}/>
    });

    const moviesArray = movies.map((thing, index) => {
        return <Game key={index+10} name={thing.nameEN} year={thing.year} cover={thing.cover} link={thing.link} /> 
    });

    const showsArray = shows.map((thing, index) => {
        return <Game key={index+20} name={thing.nameEN} year={thing.year} cover={thing.cover} link={thing.link}/>
    });

    const songsArray = songs.map((thing, index) => {
        return <Game key={index+30} name={thing.name} author={thing.artist} cover={thing.cover} year={thing.year}/>
    })

    return(
        <>
            <Navbar />
            <Buffer bufferHeight={50}/>
            <h1 className='purple center-t'>Alright, here are my favorite things!</h1>
            <h2 className='purple center-t'>Be sure to check them out! You won't regret it! Trust my taste :)</h2>
            <p className='center-t '><a href="#games" className='purple hover-w'>My favorite games!</a></p>
            <p className='center-t'><a href="#series" className='purple hover-w'>My favorite series!</a></p>
            <p className='center-t'><a href="#movies" className='purple hover-w'>My favorite movies!</a></p>
            <p className='center-t'><a href="#songs" className='purple hover-w'>My favorite songs!</a></p>
            <br />
            <h1 className=' center-t bigh' id="games">GAMES</h1>
            {gamesArray}
            <h1 className=' center-t bigh' id="series">SERIES</h1>
            {showsArray}
            <h1 className=' center-t bigh' id="movies">MOVIES</h1>
            {moviesArray}
            <h1 className='center-t bigh' id="songs">SONGS</h1>
            {songsArray}
            <Footer />
        </>
    );
}

export default Favorites;