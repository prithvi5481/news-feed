import React from 'react'
import { FaStar } from 'react-icons/fa';

const MovieCard = ({rank,title,description,rating,movieImg,year}) => {
  return (
    <div className='border-black h-[430px] w-[275px] rounded-lg m-2 shadow-lg shadow-zinc-400'>

        <div className='flex justify-between h-14 pt-2 bg-slate-100'>
            <div className='font-myFont w-[216px]'>
                <h4 className='ml-2'>{rank}. {title}
                    
                </h4>
            </div>
            <div className='flex justify-center'>
                <div className='mr-1 font-semibold'>
                    {rating} 
                </div>
                <div><FaStar className='inline mr-2'/></div>
            </div>
        </div>

        <div>
            <img src={movieImg} className='w-64 h-64'/>
        </div>
        <div className='text-xs font-serif p-2'>
            {description}
        </div>
    </div>
  )
}

export default MovieCard