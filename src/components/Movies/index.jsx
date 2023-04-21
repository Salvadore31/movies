import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GetMovies from '../../API/GetMovies';
import './index.scss'
import { Spinner } from '../UI/Spinner';
import kp from "../../assets/icon/kp.svg";
import imdb from '../../assets/icon/imdb.svg'

export const Movies = () => {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const fetchData = async () => {
        const typeNumber = 1
        const url = "https://api.kinopoisk.dev/v1/movie?limit=32"
        const movies = await GetMovies.getAll(url, typeNumber)
        setMovies(movies.docs)

        setIsLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const onClick = (el) => {
        navigate(`/movies/${el.id}`, { state: { el } })
    }

    function getClassByRate(vote) {
        if (vote > 7.5) {
            return 'green'
        } else if (vote >= 5) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    return (
        <div className="movies">
            <h2 className="movies__subtitle">Фильмы</h2>
            {isLoading ? (
                <div>
                    <Spinner />
                </div>
            ) : (
                <>
                    <div className="movies__items"> {movies.map((el) => {
                        return (
                            <div key={el.id} className="movies__item">
                                <img onClick={() => onClick(el)} src={el.poster.url} alt="poster" className='img' />
                                <div className="movies__info">
                                    <p className={`movies__rating movies__rating-${getClassByRate(el.rating.kp)}`}>{el.rating.kp.toFixed(1)}</p>
                                    <p className='movies__genres'>{el.genres[0].name}</p>
                                    <p className='movies__year'>{el.year}</p>
                                    <p className='movies__length'>{el.movieLength} мин</p>
                                </div>
                                <div className="movies__buttons">
                                    <button onClick={() => onClick(el)} className="btn_more" >Подробнее</button>
                                    <button className='btn_favorite'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            fill="currentColor"
                                            className="bi bi-star"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </>
            )}
        </div>
    )
}
