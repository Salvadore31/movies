import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Multfilms } from "../../Mulfilms";

export const HomeMultfilms = () => {
    const multfilms = useSelector(state => state.homePageMultfilms.homePageMultfilms)
    console.log(multfilms);
    return (
        <div className="home__multfilms">
            <h2 className="home__subtitle">Мультфильмы</h2>
            <div className="recomendation">  {multfilms.map((el) => {
                return (
                    <div className="recomendation__movie">
                        <img src={el.poster.url} alt="poster" className="img" />
                    </div>
                )
            })}</div>
            {/* Настроить навигацию */}
            <button className="home__button"><NavLink to={Multfilms} className="home__link">Показать всё</NavLink></button>
        </div>
    )
}