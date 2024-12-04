import React from 'react'

const Chatmessage = ({name,text}) => {
  return (
    <div className='flex items-center'>
        <img className='w-12 h-12 rounded-lg my-2' src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="logo" />

    <span className='font-bold px-2'>{name}</span>
    <span>{text}</span>
    </div>
  )
}

export default Chatmessage