import { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../../constants/url';
import UserCard from '../user card/UserCard';

export default function GenresSection() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        //get all musicians/bands
        axios({
            method: 'get',
            url: url + 'bands/allgenres',
        }).then(function (response) {
            console.log(response.data);
            setGenres(response.data);
        }).catch(function (error){
            console.log(error);
        })
    }, [])

  return (
    <div className='section-container'>
            <h2 className='title'>Genres</h2>

            {genres?
                <div className='scrollable'>
                    {genres.map((genre,index)=>(
                        <UserCard
                            key={index}
                            name= {genre.genre_name}
                            picture={genre.picture}
                        />
                    ))}
                </div>
                : <h2>No Genres Yet</h2>
            }    
        </div>
  )
}
