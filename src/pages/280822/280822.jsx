import React from 'react';
import css from './280822.module.css';
import Fade from 'react-reveal/Fade';
import { useState } from 'react';

const Birthday = () => {
    const [pageState, setPageState] = useState(0);

    if (pageState === 0) {
        return(<>
            <div className={css.whiteBody}>
                <div className={css.container}>
                    <Fade top duration={750} distance={"10%"}>
                        <img src={require('../../img/HrjQ.gif')} alt="" className={css.cat} onClick={
                            () => {setPageState(1)}
                        }/>
                        <h1 className={css.pressCat}>НАЖИМАЙ НА КОТА!!!</h1>
                    </Fade>
                </div>
            </div>
        </>);
    } else if (pageState === 1) {
        return(
            <>
                <div className={css.whiteBody}>
                    <div className={css.container}>
                        <h1 style={{fontSize: 50}}>С ДНЁМ РОЖДЕНИЯ!</h1>
                        <div className={css.buffer} ></div>
                        <p style={{fontSize: 20}}>{"Я (sikvoyø) желаю тебе (соня<3) всего самого наилучшего!! Чтобы все мечты сбывались, всегда всё было замечательно. Теперь тебе 15, кстати, это на год больше, чем 14!! Ура!! Снизу есть разные смешные фотки с котиками!! Они тоже желают тебе добра :)"}</p>
                            <img src="https://c.tenor.com/ZhfMGWrmCTcAAAAM/cute-kitty-best-kitty.gif" alt="" className={css.catImg}/>
                            <img src="https://media1.giphy.com/media/ICOgUNjpvO0PC/giphy.gif" alt="" className={css.catImg}/>
                            <img src="https://i0.wp.com/dianaurban.com/wp-content/uploads/2017/07/01-cat-stretching-feet.gif?resize=500%2C399&ssl=1" alt="" className={css.catImg}/>
                            <img src="https://c.tenor.com/k-tV1c5bCCkAAAAM/cat-smile-happy-cat.gif" alt="" className={css.catImg}/>
                            <div className={css.centerHeart} style={{animation: 'Heartbeat 1s infinite'}}>
                                <img src={require('../../img/heart.png')} alt="" className={css.heart} />
                            </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Birthday;