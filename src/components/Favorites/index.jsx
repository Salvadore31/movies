import React from 'react'
import './index.scss'
import { useSelector } from 'react-redux'

export const Favorite = () => {
    const favorites = useSelector(state => state.favorites.favorites)
    console.log(favorites);
    return (
        <div>Favorite</div>
    )
}
