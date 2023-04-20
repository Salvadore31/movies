import React, { useState, useEffect } from "react";
import './index.scss'
import { useLocation } from "react-router-dom";
import imdb from "../../assets/icon/imdb.svg";
import kp from '../../assets/icon/kp.svg';

export const CurrentFilm = () => {
    const { state } = useLocation()
    const [item, setItem] = useState(state.el)
    const [countries, setCountries] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        setCountries(
            item.countries
                ?.map((el) => {
                    return Object.values(el);
                })
                .join(", ")
        );
        setGenres(
            item.genres
                ?.map((el) => {
                    return Object.values(el);
                })
                .join(", ")
        );
    }, [item]);

    console.log(item);

    return (
        <div className="current-film">
            <img src={item.poster.url} alt="poster" className="img" />
            <div className="info">
                <div className="info__title">{item.name}</div>
                <div className="info__description">
                    <span>Описание:</span>{item.description}
                </div>
                <div className="info__year">
                    <span>Год выпуска:</span> {item.year}
                </div>
                <div className="info__genres">
                    <span>Жанр:</span> {genres}
                </div>
                <div className="info__country">
                    <span>Страна: </span> {countries}
                </div>
                <div className="info__rating">
                    <span>Оценки: </span>
                    <div className="kp">
                        <img className="icon" src={kp} alt="" /> {item.rating.kp.toFixed(1)}
                    </div>
                    <div className="imdb">
                        <img className="icon" src={imdb} alt="" /> {item.rating.imdb}
                    </div>
                </div>
            </div>
        </div>
    )
}