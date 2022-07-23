import React from 'react'
import SideBar from '../../components/side bar/SideBar'
import GenresSection from '../../components/genres section/GenresSection'

export default function GenresPage() {
  return (
    <div className='page-container'>
    <SideBar />
    <div className='sections-container'>
        <GenresSection/>
    </div>
  </div>
  )
}
