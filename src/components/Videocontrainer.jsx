import React, { useEffect, useState } from 'react'
import { YOUTUBE_VEDIOS_API } from '../utils/constants'
import Videocard, { Addvideo } from './Videocard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addvideos } from '../utils/vidoesslice'

const Videocontrainer = () => {

  // const [videos,setvideos] = useState([]) 
  const dispatch = useDispatch();

  const data = useSelector((store)=>store.video.videolist)
  //  {console.log(data)}  

  useEffect(()=>{
    getvideos();
    // setvideos(data) 

  },[])

  // {console.log(videos)} 
  const getvideos = async()=>{
    const data = await fetch(YOUTUBE_VEDIOS_API)
    const json = await data.json()
    // setvideos(json.items) 
    dispatch(addvideos(json.items))
  }

  return (
    <div className='flex flex-wrap'>
      {/* {videos[0] && <Addvideo info={videos[0]} />}    This is for the higher order component */}
      {
      data && data.map((video)=>(
         <Link to={"/watch?v="+video.id}> 
         <Videocard key={video.id} info={video}/>
         </Link>
        ))
      }
    </div>
  )
}

export default Videocontrainer