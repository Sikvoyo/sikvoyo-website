import {React} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import loadable from '@loadable/component';
import Funny from './pages/Funny/Funny'
import Game from './components/Things/Game/Game';
import './App.css';


const Home = loadable(() => import('./pages/Home/Home'));
const Discord = loadable(() => import('./pages/Discord/Discord'));
const FourOFour = loadable(() => import('./pages/404/404'));
const Birthday = loadable(() => import('./pages/280822/280822'));
const Projects = loadable(() => import('./pages/Projects/Projects'));
const Drawings = loadable(() => import('./pages/Drawings/Drawings'));
const Videos = loadable(() => import('./pages/Videos/Videos'));
const Favorites = loadable(() => import('./pages/Favorites/Favorites'));

function App() {

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  }

  return (
    <>
    <Routes>
      <Route index element={
        <Home />
      } />
      <Route path='/discord' element={
        <Discord navigateHome={navigateHome}/>
      } />
      <Route path='/funny' element={
        <Funny />
      }/>
      <Route path='/280822' element={
        <Birthday />
      }/>
      <Route path='/projects' element={
        <Projects />
      }/>
      <Route path='/drawings' element={
        <Drawings />
      }/>
      <Route path='/videos' element={
        <Videos />
      }/>
      <Route path='/favorites' element={
        <Favorites />
      }/>
      <Route path='/testing...testing...testing...' element={
        <Game name='NieR: Automata' author='PlatinumGames' cover='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bob_Odenkirk_%289362546281%29_%28cropped%29.jpg/220px-Bob_Odenkirk_%289362546281%29_%28cropped%29.jpg'/>
      }/>
      <Route path='*' element={
        <FourOFour />
      }/>
    </Routes>
    </>
  );
}

export default App;
