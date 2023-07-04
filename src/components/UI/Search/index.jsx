import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { useMemo } from "react";
import kp from '../../../assets/icon/kp.svg';
import imdb from '../../../assets/icon/imdb.svg';
import { getClassByRate } from '../../../constatns/functions';

export const SearchWindow = ({ items }) => {
  return (
    <div className="search-window">
      {items.map((el) => {
        return <div className="result" key={el.id}>
          <img className="result__poster" src={el.poster.url} alt={el.name} />
          <div className="result__info">
            <div className="result__names">
              <div className="result__name">{el.name}</div>
              <div className="result__alternativeNameAndYear">{el.alternativeName}  {el.year}</div>
            </div>
            <div className="result__rating">
              <div className={`kp kp-${getClassByRate(el.rating.kp)}`}>
                <img className="icon" src={kp} alt="КП" />{el.rating.kp.toFixed(1)}
              </div>
              <div className={`imdb imdb-${getClassByRate(el.rating.imdb)}`}>
                <img className="icon" src={imdb} alt="imdb" />{el.rating?.imdb}
              </div>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export const Search = () => {
  const [text, setText] = useState("");
  const [searchWindow, setSearchWindow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [result, setResult] = useState([]);

  const fetchItems = async () => {
    setIsLoading(true);

    const movies = await axios.get("https://api.kinopoisk.dev/v1.3/movie", {
      headers: {
        "X-API-KEY": "GF1AKFK-QDQMK5V-N6ANZEM-MFJE27E", // Алексей
        // 'X-API-KEY': '3J11JSE-62ZMZVE-M13CAMT-NSMAJXV', // Павел
        "Content-Type": "application/jsonp",
        "Access-Control-Allow-Origin": "*",
      },
      params: {
        limit: 10000,
      },
    });
    setItems(movies.data.docs);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (text === "") {
      setSearchWindow(false);
    } else {
      setSearchWindow(true);
    }
  }, [text]);

  useMemo(() => {
    const search = items.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    setResult(search);
  }, [text]);

  return (
    <div className="search">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="search"
        className="search__input"
        placeholder="Поиск..."
      />
      <button className="search__button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>

      {searchWindow && <SearchWindow items={result} />}
    </div>
  );
};
