import {React} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import loadable from '@loadable/component';
import Funny from './pages/Funny/Funny'
import './App.css';


const Home = loadable(() => import('./pages/Home/Home'));
const Discord = loadable(() => import('./pages/Discord/Discord'));
const FourOFour = loadable(() => import('./pages/404/404'));
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
      <Route path='/thoughts/about_art' element={<>
        <h1>Kvvoya's deep thoughts about good art</h1>
        <p>Recently I made a little drawing of myself. I wanted to portray my personality through it. I wanted to show who I am with my drawing. It is currently my pfp on Twitter which allows my followers
          and other people to understand me better. I believe that said drawing succeeds at it. I mean, you can get a rough idea about me by just looking at the picture which is amazing. However, some people didn't think so. 
        </p>
        <p>There is a Telegram group chat about drawing where people can share their own drawings. This is a wonderful place for artists because anyone can view your work and there is not a chance your drawing won't be noticed, because it is actually quite a small community.</p>
        <p>I decided to share my drawing I made. I didn't ask anyone for what I could improve there because really I tried the best I could and that what matters the most. But there were two self-proclaimed artists that stated that my drawing doesn't have any anatomy. I was confused by their complaints. My character clearly has a head, arms, therefore there is an anatomy, by definition. I tried to understand what was wrong with my drawing and they told me that my head is rough and arms are way too thin. The thing is that they had no idea that I didn't intend to show a straight head in the first place. I never wanted to portray anatomically correct arms. What I wanted to do is to make a self-portrait of myself.</p>
        <p>Instead of trying to understand what did I, as an artist, try to say with my artwork, they decided to show their "skill" and gave a vague critique of my drawing. In my opinion, that behavior clearly portrays that we unfortunately live in society. When people see a drawing that was made by an amateur artist the first thing they try to do is to find what was wrong with their drawing. But artists don't draw for people to say what is wrong. They draw to say something. And in response they get this kind of feedback when people say how to make your drawing less interesting, generic and "anatomically correct". I bet these are the same people that say that art is dying, not realizing that it is entirely the fault of their closed minds that aren't yet developed to understand the idea of artist's intent.</p>
        <p>I am not offended by these people who said that my drawing is "anatomically incorrect". They even started to say mean things. I respect their attempt to insult me, because that's what I tried to do with my art. I wanted to draw something that people would react to in some sort of way. Even just seeing it as my pfp and trying to get an idea of what I am is the reacton I am trying to get here. </p>
        <p>I wish they succeed in their creative carreer but I am afraid that if they don't change their views on art, if they don't get rid of the idea of drawings being correct, if they don't try to break boundaries and create something unique and thoughtful, they will be disappointed.</p>
        <p>If you are an artist, remember, there is no such thing as "good art" or "bad art". It's just art, it's your art.</p>
        <br/>
        <p>- kvvoya</p>
      </>}
      />
      <Route path='/testing...testing...testing...' element={
        <>
          
        </>
      }/>
      <Route path='*' element={
        <FourOFour />
      }/>
    </Routes>
    </>
  );
}

export default App;
