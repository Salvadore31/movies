import React, { useEffect, useState } from 'react';
import './index.scss'
import GetMovies from '../../API/GetMovies';
import { useParams } from 'react-router-dom';

export const Person = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [persons, setPersons] = useState([]);
    const { id } = useParams();

    console.log(persons);

    const fetchItem = async () => {
        setIsLoading(true);

        const url = `https://api.kinopoisk.dev/v1/person/${id}`;
        const movies = await GetMovies.getAll(url);
        setPersons(movies.persons);

        setIsLoading(false);
    };

    useEffect(() => {
        fetchItem();
    }, []);



    return (
        <div>
            PERSON
        </div>
    )
}
