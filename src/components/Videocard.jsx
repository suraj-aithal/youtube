import React from 'react'

const Videocard = ({info}) => {
  

    if(!info?.snippet)return;
    const {title,channelTitle,thumbnails} = info?.snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-2xl cursor-pointer'>
        <img className='rounded-lg' src={thumbnails?.medium?.url} alt='Thumbnail' />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
           { info?.statistics &&  <li>{info?.statistics?.viewCount} Views</li>}
        </ul>
    </div>
  )
}

// export const Addvideo = ({info}) =>{     Higher Order Component
//   return (
//     <div className='border border-red-700 p-2 m-2'><Videocard info={info} /></div>
//   )
// }

export default Videocard