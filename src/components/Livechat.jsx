import React, { useEffect, useState } from 'react'
import Chatmessage from './Chatmessage'
import { useDispatch, useSelector } from 'react-redux'
import { addmessage } from '../utils/chatslice';
import store from '../utils/appstore';
import { generate_random_name, getRandomComment } from '../utils/helper';

const Livechat = () => {

    const dispatch = useDispatch();
    const [sendm,setsendm] = useState("");
    const chatmessages = useSelector((store)=>store.chat.message)

    useEffect(()=>{
        const i = setInterval(()=>{
       // api polling here

       dispatch(addmessage({
        name: generate_random_name(),
        text: getRandomComment()
       }))

       console.log('api polling')
        },500)

        return () => clearInterval(i);
    },[])
  return (
   <>
    <div className='w-full h-[600px] ml-2 p-2 border border-white bg-slate-500 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {
            chatmessages && chatmessages.map((c,i)=>(<Chatmessage name={c.name} text={c.text} key={i} />))
        }
    </div>
    <form className='w-full ml-2 p-2 border border-white' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addmessage({
            name:"Suraj AIthal",
            text:sendm
        }))
    }}>
        <input type="text" className='w-80 text-black px-2' value={sendm} onChange={(e)=>{
            setsendm(e.target.value)
        }}  />
        <button className='px-2 mx-2 bg-green-100 text-black'>Send</button>
    </form>
    </>
  )
}

export default Livechat