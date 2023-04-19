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

    console.log(movies);

    const onClick = (el) => {
        navigate(`/movies/${el.id}`, { state: { el } })
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
                            <div onClick={() => onClick(el)} key={el.id} className="movies__item">
                                <img src={el.poster.url} alt="poster" className='img' />
                                <div className="movies__info">
                                    <p className='movies__rating'>{el.rating.kp.toFixed(1)}</p>
                                    <p className='movies__genres'>{el.genres[0].name}</p>
                                    <p className='movies__year'>{el.year}</p>
                                    <p className='movies__length'>{el.movieLength} мин</p>
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
