import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closemenu } from '../utils/navslice'
import { useSearchParams } from 'react-router-dom'
import Comments from './Comments'
import Livechat from './Livechat'

const Watch = () => {
    const dispatch = useDispatch()
    const [searchparams] = useSearchParams();
    console.log(searchparams.get("v"));
    useEffect(()=>{
        dispatch(closemenu())
        
    },[])

  return (
   <div className='flex flex-col w-full'>
     <div className='px-5 flex w-full'>
        <div>
        <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchparams.get('v')+"?autoplay=1"} title="YouTube video player" frameborder="0" autoplay="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className='w-full'>
          <Livechat />
        </div>
    </div>
    <Comments />
   </div>
  )
}

export default Watch