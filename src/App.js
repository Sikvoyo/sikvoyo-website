import {React} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import loadable from '@loadable/component';
import Funny from './pages/Funny/Funny'
import './App.css';

const Home = loadable(() => import('./pages/Home/Home'));
const Discord = loadable(() => import('./pages/Discord/Discord'));
const FourOFour = loadable(() => import('./pages/404/404'));

function App() {

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  }

  return (
    <>
    <Routes>
      <Route index element={
        <Home/>
      } />
      <Route path='/discord' element={
        <Discord navigateHome={navigateHome}/>
      } />
      <Route path='/funny' element={
        <Funny />
      }/>
      <Route path='*' element={
        <FourOFour />
      }/>
    </Routes>
    </>
  );
}

export default App;
