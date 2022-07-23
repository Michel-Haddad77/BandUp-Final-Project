import React, { useEffect, useState } from 'react'
import UserCard from '../user card/UserCard'
import './styles.css';
import url from '../../constants/url';
import axios from 'axios';

export default function UsersSection({is_musician}) {
    const [users,setUsers] = useState([]);

    var url2 = '';

    if (is_musician){
        url2 = 'musicians/all';
    }else{
        url2 = 'bands/all'
    }

    useEffect(() => {
        //get all musicians/bands
        axios({
            method: 'get',
            url: url + url2,
        }).then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        }).catch(function (error){
            console.log(error);
        })
    }, [])
    
        
    return (
        <div className='section-container'>
            <h2>{is_musician? "Musicians":"Bands"}</h2>

            {users?
                <div className='scrollable'>
                    {users.map((user,index)=>(
                        <UserCard
                            key={index}
                            name= {is_musician? `${user.name} ${user.last_name}` : user.name}
                            picture={user.picture}
                            genre_instrument = {is_musician? (user.instrument?.instrument_name) : (user.genre?.genre_name)}
                        />
                    ))}
                </div>
                : <h2>No Users Yet</h2>
            }    
        </div>
    )
}
