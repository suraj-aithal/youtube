import React from 'react'
import { useDispatch } from 'react-redux'
import { togglemenu } from '../utils/navslice';

const Header = () => {
    const dispatch = useDispatch();
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
            <input className='w-1/2  border border-white p-2  rounded-l-full text-white bg-slate-500' type='text' />
            <button className='px-5 py-2 text-[16px]  border border-white rounded-r-full p-2'>🔍</button>
        </div>
        <div className='col-span-1'>
            <img className='h-8' alt='user-icon' src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' />
        </div>
    </div>
  )
}

export default Header