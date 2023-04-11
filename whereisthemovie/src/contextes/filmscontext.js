import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const FilmsContext = createContext();

function FilmsProvider(props) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f5d4d8c4dbmsh398db41ba71204ap183ad8jsnd0bd57e35806',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };
    
    fetch('https://streaming-availability.p.rapidapi.com/v2/search/basic?country=fr&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=fr', options)
        .then(response => response.json())
        .then(response => {
            if (Array.isArray(response.result)) {
                setFilms(response.result);
              } else {
                // If it's a single object, put it into an array and set the state
                setFilms([response.result]);
              }
            })
        .catch(err => console.error(err));
    }, []);
  

  return (
    <FilmsContext.Provider value={{ 
        films }}>
      {props.children}
    </FilmsContext.Provider>
  );
}

export { FilmsProvider, FilmsContext };

