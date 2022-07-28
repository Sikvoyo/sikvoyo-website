import {React, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Start from './components/Start/Start';
import Logo from './components/Logo/Logo'
import IconCircle from './components/IconCircle/IconCircle';
import BGTest from './components/BGText/BGText.jsx';
import AboutMe from './components/AboutMe/AboutMe';
import Discord from './pages/Discord.jsx';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import { DEFAULT_BG_TEXT } from './consts';
import './App.css';

function App() {

  const [bgText, setBGText] = useState(DEFAULT_BG_TEXT);
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  }

  return (
    <>
    <Routes>
      <Route path='/' element={
        <>
          <BGTest text={bgText}/>
          <Start>
            <IconCircle hoverChange={setBGText}/>
          <Logo />
          </Start>
          <AboutMe hoverChange={setBGText}/>
          <Skills hoverChange={setBGText}/>
          <Footer />
          </>
      } />
      <Route path='/discord' element={
        <Discord navigateHome={navigateHome}/>
      } />
    </Routes>
    </>
  );
}

export default App;
