import { useState } from 'react'
import SideBar from '../../components/side bar/SideBar'
import GenresSection from '../../components/genres section/GenresSection'
import AddGenreSection from '../../components/add genre section/AddGenreSection'
import url from '../../constants/url'
import axios from 'axios'

export default function GenresPage() {
  const [genres_or_instruments, setGenresOrInstuments] = useState([]);
  
  function getGenresInstruments(){
      axios({
        method: 'get',
        url: url + 'bands/allgenres',
      }).then(function (response) {
          console.log(response.data);
          setGenresOrInstuments(response.data);
      }).catch(function (error){
          console.log(error);
      })
  }

  return (
    <div className='page-container'>
    <SideBar />
    <div className='sections-container'>
        <GenresSection is_genre={true} getGenres={getGenresInstruments} genres_or_instruments={genres_or_instruments}/>
        <AddGenreSection is_genre={true} getGenresInstruments={getGenresInstruments}/>
    </div>
  </div>
  )
}
