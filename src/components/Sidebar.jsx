import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const showbar = useSelector((store)=>store.app.ismenuopen)
    if(!showbar)
        return null;
  return (
    <div className='p-5 w-44 shadow-lg'>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Live</li>
            <li>Videos</li>
        </ul>
        <br />
        <hr />
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Sports</li>
            <li>Entertainment</li>
            <li>Comedy</li>
            <li>Music</li>
        </ul>
        <br />
        <hr />
        <h1 className='font-bold pt-5'>Watch later</h1>
        <ul>
            <li>Sports</li>
            <li>Entertainment</li>
            <li>Comedy</li>
            <li>Music</li>
        </ul><br />
        <hr />
    </div>
  )
}

export default Sidebar