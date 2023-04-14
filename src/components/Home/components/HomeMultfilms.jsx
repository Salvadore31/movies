import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import GetMovies from "../../../API/GetMovies";

export const HomeMultfilms = () => {
    const [multfilms, setMultfilms] = useState([])

    const fetchData = async () => {
        const typeNumber = 3;
        const url = "https://api.kinopoisk.dev/v1/movie"
        const multfilm = await GetMovies.getAll(url, typeNumber)
        setMultfilms(multfilm.docs)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="home__multfilms">
            <h2 className="home__subtitle">Мультфильмы</h2>
            <div className="recomendation">  {multfilms.map((el) => {
                return (
                    <div key={el.id} className="recomendation__movie">
                        <img src={el.poster.url} alt="poster" className="img" />
                    </div>
                )
            })}</div>
            {/* Настроить навигацию */}
            <button className="home__button">
                <NavLink to={'/multfilm'} className="home__link">Показать всё</NavLink>
            </button>
        </div>
    )
}