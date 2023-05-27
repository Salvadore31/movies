import React from 'react';
import './index.scss'
import GetMovies from '../../API/GetMovies';

export const Person = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [persons, setPersons] = useState([]);

    // console.log(persons);

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
            asdfasdfsadfsadfsa
            <dfn>asdf
                asdfasdfsadfsadfsadf
                sadf
                asdfasdfsadfsadfsa
            </dfn>
        </div>
    )
}
