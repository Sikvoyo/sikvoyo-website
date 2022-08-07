import css from './404.module.css';

const FourOFour = () => {
    return(
        <>
            <div className={css.container}>
                <h1 className={`${css.text} ${css.header}`}>404</h1>
                <h3 className={css.text}>You are looking for something that doesn't exist</h3>
            </div>
        </>
    )
}

export default FourOFour;