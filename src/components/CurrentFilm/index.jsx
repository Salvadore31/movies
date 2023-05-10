import React, { useState, useEffect } from "react";
import "./index.scss";
import { useLocation, useParams } from "react-router-dom";
import imdb from "../../assets/icon/imdb.svg";
import kp from "../../assets/icon/kp.svg";
import GetMovies from "../../API/GetMovies";
import { Spinner } from "../UI/Spinner";

export const CurrentFilm = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState({});

  console.log(item);

  const fetchItem = async () => {
    setIsLoading(true);

    const url = `https://api.kinopoisk.dev/v1/movie/${id}`;
    const movies = await GetMovies.getAll(url);
    setItem(movies);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="current-film">
          <img src={item?.poster?.url} alt="poster" className="img" />

          <div className="info">
            <div className="info__title">{item.name}</div>
            <div className="info__description">
              <span>Описание:</span>
              {item.description}
            </div>
            <div className="info__year">
              <span>Год выпуска:</span> {item.year}
            </div>
            <div className="info__genres">
              <span>Жанр:</span>
              {item?.genres?.map(el => {
                return Object.values(el)
              }).join(", ")}
            </div>
            <div className="info__country">
              <span>Страна: </span> 
              {item?.countries?.map(el => {
                return Object.values(el)
              }).join(", ")}
            </div>
            <div className="info__rating">
              <span>Оценки: </span>
              <div className="kp">
                <img className="icon" src={kp} alt="" />
                {item?.rating?.kp.toFixed(1)}
              </div>
              <div className="imdb">
                <img className="icon" src={imdb} alt="" /> {item?.rating?.imdb}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
