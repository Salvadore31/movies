import React, { useState } from "react";
import './index.scss'
import { useLocation } from "react-router-dom";

export const CurrentFilm = () => {
    const { state } = useLocation()
    const [item, setItem] = useState(state.el)

    return (
        <div className="current-film">
            {item.name}
        </div>
    )
}