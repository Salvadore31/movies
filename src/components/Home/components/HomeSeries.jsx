import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GetMovies from "../../../API/GetMovies";

export const HomeSeries = () => {
    const [series, setSeries] = useState([])

    const fetchData = async () => {
        const typeNumber = 2;
        const url = "https://api.kinopoisk.dev/v1/movie"
        const series = await GetMovies.getAll(url, typeNumber)
        setSeries(series.docs)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="home__series">
            <h2 className="home__subtitle">Сериалы</h2>
            <div className="recomendation">  {series.map((el) => {
                return (
                    <div key={el.id} className="recomendation__movie">
                        <img src={el.poster.url} alt="poster" className="img" />
                    </div>
                )
            })}</div>
            {/* Настроить навигацию */}
            <button className="home__button">
                <NavLink to={"/series"} className="home__link">Показать всё</NavLink>
            </button>
        </div>
    )
}