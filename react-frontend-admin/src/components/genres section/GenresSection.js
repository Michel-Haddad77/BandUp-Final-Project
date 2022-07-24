import { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../../constants/url';
import UserCard from '../user card/UserCard';
import './styles.css';

export default function GenresSection({is_genre, getGenres, genres_or_instruments}) {

    useEffect(() => {
        //get all genres
       getGenres();
    }, [])

  return (
    <div className='genres-section-container'>
            <h2 className='title'>{is_genre? "Genres" : "Instruments"}</h2>

            {is_genre?
                (genres_or_instruments?
                <div className='scrollable'>
                    {genres_or_instruments.map((genre,index)=>(
                        <UserCard
                            key={index}
                            name= {genre.genre_name}
                            picture={genre.picture}
                        />
                    ))}
                </div> : <h2>No Genres Yet</h2>)
                : (genres_or_instruments?
                    <div className='scrollable'>
                        {genres_or_instruments.map((instrument,index)=>(
                            <UserCard
                                key={index}
                                name= {instrument.instrument_name}
                                picture={instrument.picture}
                            />
                        ))}
                    </div> : <h2>No Instruments Yet</h2>)
                
            }    
        </div>
  )
}
