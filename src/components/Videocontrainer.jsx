import React, { useEffect, useState } from 'react'
import { YOUTUBE_VEDIOS_API } from '../utils/constants'
import Videocard from './Videocard'
import { Link } from 'react-router-dom'

const Videocontrainer = () => {

  const [videos,setvideos] = useState([])

  useEffect(()=>{
    getvideos();

  },[])
  const getvideos = async()=>{
    const data = await fetch(YOUTUBE_VEDIOS_API)
    const json = await data.json()
    setvideos(json.items)
  }

  return (
    <div className='flex flex-wrap'>
      {
        videos.map((video)=>(
         <Link to={"/watch?v="+video.id}> 
         <Videocard key={video.id} info={video}/>
         </Link>
        ))
      }
    </div>
  )
}

export default Videocontrainer