import React from 'react'
import SideBar from '../../components/side bar/SideBar'
import GenresSection from '../../components/genres section/GenresSection'
import AddGenreSection from '../../components/add genre section/AddGenreSection'

export default function GenresPage() {
  
  return (
    <div className='page-container'>
    <SideBar />
    <div className='sections-container'>
        <GenresSection />
        <AddGenreSection />
    </div>
  </div>
  )
}
