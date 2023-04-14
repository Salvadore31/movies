import React from "react";
import { useSelector } from "react-redux";
import { Series } from "../../Series";
import { NavLink } from "react-router-dom";

export const HomeMovies = () => {
    const films = useSelector(state => state.homePageFilms.homePageFilms)
    return (
        <div className="home__movies">
            <h2 className="home__subtitle">Фильмы</h2>
            <div className="recomendation">  {films.map((el) => {
                return (
                    <div className="recomendation__movie">
                        <img src={el.poster.url} alt="poster" className="img" />
                    </div>
                )
            })}</div>
            {/* Настроить навигацию */}
            <button className="home__button"><NavLink to={Series} className="home__link">Показать всё</NavLink></button>
        </div>
    )
}