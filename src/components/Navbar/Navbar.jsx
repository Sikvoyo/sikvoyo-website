import { useState } from 'react';
import navham from '../../img/navham.png';
import './Navbar.css';
import { DEFAULT_BG_TEXT } from '../../consts';

const Navbar = ({hoverChange}) => {
    const [navExpanded, setNavExpanded] = useState(false);

    const mouseLeave = () => {
        hoverChange(DEFAULT_BG_TEXT)
    }

    return(
        <nav className='navbar'>
            <a href="/" className='navlogo'>kvvoya</a>
            <button className='ham' onClick={
                () => setNavExpanded(!navExpanded)
            }>
                <img src={navham} alt="" width={20}/>
            </button>
            <div className={
                navExpanded ? 'nav-menu expanded' : 'nav-menu'
            }>
                <ul>
                    <li onMouseOver={() => hoverChange('My projects!')} onMouseLeave={mouseLeave}>
                        <a href="/projects" className='hover-w'>Projects</a>
                    </li>
                    <li onMouseOver={() => hoverChange('My drawings!')} onMouseLeave={mouseLeave}>
                        <a href="/drawings" className='hover-w'>Drawings</a>
                    </li>
                    <li onMouseOver={() => hoverChange('My videos!')} onMouseLeave={mouseLeave}>
                        <a href="/videos" className='hover-w'>Videos</a>
                    </li>
                    <li onMouseOver={() => hoverChange('My favorites!')} onMouseLeave={mouseLeave}>
                        <a href="/favorites" className='hover-w'>Want me something to recommend?</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;