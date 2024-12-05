import React from 'react'
import { useDispatch } from 'react-redux';
import { addvideos, deletevideos } from '../utils/vidoesslice';

const Button = ({name}) => {
  const dispatch = useDispatch();
  const buttonfunc = async (name)=>{
    const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${name}&type=video&key=AIzaSyC4RzOUpiMXxpCNukwWJrZmE8PVjCoZwJU`);
    const json = await data.json();

    dispatch(deletevideos());  
    //  console.log(json.items);     
    dispatch(addvideos(json.items))
  }
  return (
    <div>
        <button className='px-5 py-2 m-2 rounded-lg bg-slate-800' onClick={()=>{
          if(!(name==="All"))
          buttonfunc(name)
        else{
          window.location.reload();
        }
        }}>{name}</button>
    </div>
  )
}

export default Button