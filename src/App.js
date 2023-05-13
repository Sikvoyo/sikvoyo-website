import {React} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import loadable from '@loadable/component';
import Funny from './pages/Funny/Funny'
import './App.css';
import lovely_img from './img/makesweet-djhszr.gif'


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
      </>} />
      <Route path='/announcments/during_jacob' element={
        <>
          <h1>During Jacob Update</h1>
          <p>I have a very bad habit. When I have an idea I like, I have troubles with keeping the idea to myself. There has been quite a lot of times when I said smth like "ooh! I am planning to do <b> this thing</b> or <b> that thing. </b> And then I never make it.</p>
          <p>It's just how my brain works, and I believe I am not the only one who has that habit to say instead of doing. I noticed that and decided to really shut the fuck up and maybe then I'll be able to actually make that idea become real. Like sikvoyo.fun for example. I never said anything about it and here it is! You are on sikvoyo.fun rn. There even used to be something on that website...</p>
          <p>So I had that idea, what if I try and make an album. And the point of the album would be me learning to make music. I knew album is a hard thing to do and it is quite easy to give up on it. So I tried to not tell anyone about it BUT I COULDN'T. IT'S SO HARD. I COULDN'T DO IT and said that "hey Imma bout to make a during jacob yay!" and then I was like omg no. I'll have to actually do my best to not give up on it.</p>
          <p>Don't worry DURING JACOB fans I'm not giving up on it. Just the thing is that ideas tend to change. They tend to develop. I came to realize that I want DURING JACOB to be special. To be something unironically good and not just some sort of a joke. I would like to combine electronic music with guitar, with real life sounds and stuff. I'll need quite a lot of time to get decent at this.</p>
          <p>Sorry. I should not have told anyone about DURING JACOB. I should have taken my time with it for real and announce it only when it would be almost there.</p>
          <p>I appreciate your patience.</p>
          <br/>
          <p>- kvvoya, from Team Cherry</p>
        </>
      }/>
      <Route path='/mmmm' element={
        <>
          <h1 className='mmmm'>MADDIE I LOVE YOU! ❤❤❤❤❤❤</h1>
          <img src={lovely_img} alt="funny gif, shame you can't see it 4 some reason"></img>
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
