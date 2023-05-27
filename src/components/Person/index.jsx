import React, { useEffect, useState } from 'react';
import './index.scss'
import GetMovies from '../../API/GetMovies';
import { useParams } from 'react-router-dom';

export const Person = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [person, setPerson] = useState([]);
    const { id } = useParams();

    console.log(person);

    const fetchItem = async () => {
        setIsLoading(true);

        const url = `https://api.kinopoisk.dev/v1/person/${id}`;
        const person = await GetMovies.getAll(url);
        setPerson(person);

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
