import React, { useEffect, useState } from 'react'
import UserCard from '../user card/UserCard'
import './styles.css';
import url from '../../constants/url';
import axios from 'axios';

export default function UsersSection({is_musician}) {
    const [users,setUsers] = useState([]);
    var url2 = '';
    const token = localStorage.getItem('token');

    //change url according to user type
    if (is_musician){
        url2 = 'musicians/all';
    }else{
        url2 = 'bands/all'
    }

    //get all musicians/bands
    function getAllUsers(){
        axios({
            method: 'get',
            url: url + url2,
        }).then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        }).catch(function (error){
            console.log(error);
        })
    }

    useEffect(() => {
        getAllUsers();
    }, [])
    
     
    //function when the admin deletes a user
    //this function is passed down to each user card
    function deleteUser(id){
        axios({
            method: 'delete',
            url: url + 'admin/user',
            params: { user_id: id },
            headers: {
                "Authorization": token,
            }
        }).then(function (response) {
            console.log(response.data);
            getAllUsers();
        }).catch(function (error){
            console.log(error);
            alert(error.response.data);
        })
    }

    return (
        <div className='section-container'>
            <h2 className='title'>{is_musician? "Musicians":"Bands"}</h2>

            {users?
                <div className='scrollable'>
                    {users.map((user,index)=>(
                        <UserCard
                            key={index}
                            is_user={true}
                            id={user._id}
                            name= {is_musician? `${user.name} ${user.last_name}` : user.name}
                            picture={user.picture}
                            genre_instrument = {is_musician? (user.instrument?.instrument_name) : (user.genre?.genre_name)}
                            deleteUser = {()=>{deleteUser(user._id)}}
                        />
                    ))}
                </div>
                : <h2>No Users Yet</h2>
            }    
        </div>
    )
}
