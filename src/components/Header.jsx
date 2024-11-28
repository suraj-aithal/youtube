import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglemenu } from '../utils/navslice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { Cacheresults } from '../utils/searchslice';



const Header = () => {
    const [searchquery,setsearchquery] = useState("");
    const [suggestions,setsuggestions] = useState([]);
    const [showsuggestions,setshowsuggestions] = useState(false);
    const dispatch = useDispatch();
    const searchcache = useSelector(store=>store.search);

    useEffect(()=>{
        const timer = setTimeout(() => {
          if(searchcache[searchquery]){
            setsuggestions(searchcache[searchquery])
          }else{
            getsuggessions();
          }
        }, 200);
        return () =>{
            clearTimeout(timer);
        }
    },[searchquery])

    const getsuggessions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchquery);
        const json = await data.json();
        console.log("API CALL  " + searchquery);
        // console.log(json[1]); 
        setsuggestions(json[1]);

        dispatch(Cacheresults({
          [searchquery]:json[1],
        }))
    }  
    const hanndleclick = ()=>{
        dispatch(togglemenu())
    }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg bg-slate-500'>
        <div className='flex col-span-1'>
            <img className='h-8 cursor-pointer' alt='more' onClick={hanndleclick} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png' />
            <img className='h-8 mx-4' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png' />
        </div>
        <div className='col-span-10 px-16 mx-6'>
           <div>
           <input value={searchquery} onChange={(e)=>setsearchquery(e.target.value)}
           onFocus={()=>setshowsuggestions(true)}   
           onBlur={()=>setshowsuggestions(false)}    
            className='px-5 w-1/2  border border-white p-2  rounded-l-full text-white bg-slate-500' type='text' />
           <button className='px-5 py-2 text-[16px]  border border-white rounded-r-full p-2'>🔍</button>
           </div>
           {showsuggestions &&  <div className='absolute  px-2 bg-black w-1/3 shadow-lg rounded-lg border border-gray-100'>
            <ul className='text-white'>
              {
                suggestions.map((s)=>(<li key={s} className='py-2 px-2 shadow-sm hover:bg-gray-600'>🔍  {s}</li>))
              }
            </ul>
           </div>}
           
        </div>
        <div className='col-span-1'>
            <img className='h-8' alt='user-icon' src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' />
        </div>
    </div>
  )
}

export default Header