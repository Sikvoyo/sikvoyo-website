import css from './Game.module.css';
import React from 'react';
import Tilt from 'react-parallax-tilt';

const Game = (props) => {
    const {name, author, year, cover, link} = props;

    return(
        <>
            <div className={css.container}>
                <Tilt tiltReverse={true}>
                    <a href={link}>
                        <img src={cover} alt="" />
                    </a>
                </Tilt>
                <div>
                    <a href={link}>
                        <h1 className={`purple ${css.title}`}>{name}</h1>
                    </a>
                    <h4 className='purple'>{year}</h4>
                    <h4 className='purple'>{author}</h4>
                </div>
            </div>
        </>
    );
}

export default Game;