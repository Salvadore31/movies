import axios from "axios"
import { Content } from "../Content"
import { Footer } from "../Footer"
import { Header } from "../Header"
import "./index.scss"
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { getRandomFilm } from "../../store/Reducers/RandomFilm"

export const Layout = () => {
    const dispatch = useDispatch() 

    async function fetchApi() {
        const response = await axios.get("https://api.kinopoisk.dev/v1/movie/random", {
            headers: {
                'X-API-KEY': 'GF1AKFK-QDQMK5V-N6ANZEM-MFJE27E',
                'Content-Type': 'application/jsonp',
                "Access-Control-Allow-Origin": "*"
          }})

        dispatch(getRandomFilm(response.data))
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div className="layout">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
