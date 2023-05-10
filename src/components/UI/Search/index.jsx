import React, { useEffect, useState } from 'react'
import "./index.scss"
import GetMovies from '../../../API/GetMovies'
import axios from 'axios'

export const SearchWindow = ({}) => {
    return (
        <div className='search-window'>
            хуесос
        </div>
    )
}

export const Search = () => {
    const [text, setText] = useState("")
    const [searchWindow, setSearchWindow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState([])

    const fetchItems = async () => {
        setIsLoading(true)

        const limit = 1000
        const movies = await axios.get("https://api.kinopoisk.dev/v1/movie", {
            headers: {
                // 'X-API-KEY': 'GF1AKFK-QDQMK5V-N6ANZEM-MFJE27E', // Алексей
                'X-API-KEY': '3J11JSE-62ZMZVE-M13CAMT-NSMAJXV', // Павел
                'Content-Type': 'application/jsonp',
                "Access-Control-Allow-Origin": "*"
            },
            params: {
                limit: limit
            }
        });
        setItems(movies.data)

        setIsLoading(false)
    }

    console.log(items);

    useEffect(() => {
        fetchItems()
    }, [])

    useEffect(() => {
        if(text === "") {
            setSearchWindow(false)
        } else {
            setSearchWindow(true)
        }
    }, [text])

    return (
        <div className='search'>
            <input value={text} onChange={e => setText(e.target.value)} type="search" className='search__input' placeholder='Поиск...' />
            <button className='search__button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </button>

            {searchWindow && <SearchWindow/>}
        </div>
    )
}
