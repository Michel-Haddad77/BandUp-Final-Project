import React from 'react'
import UserCard from '../user card/UserCard'
import './styles.css'

export default function UsersSection() {
  return (
    <div className='section-container'>
        <h2>Musicians</h2>
        <UserCard/>
    </div>
  )
}
