import { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../../constants/url';
import UserCard from '../user card/UserCard';
import './styles.css';

export default function GenresSection({is_genre}) {
    const [genres_or_instruments, setGenresOrInstuments] = useState([]);
    var url2 = ''

    if(is_genre){
        url2 = 'bands/allgenres';
    }else{
        url2 = 'musicians/allinstruments';
    }

    useEffect(() => {
        //get all genres/instruments
        axios({
            method: 'get',
            url: url + url2,
        }).then(function (response) {
            console.log(response.data);
            setGenresOrInstuments(response.data);
        }).catch(function (error){
            console.log(error);
        })
    }, [])

  return (
    <div className='section-container'>
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
