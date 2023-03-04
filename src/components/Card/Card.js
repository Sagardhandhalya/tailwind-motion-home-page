import React from 'react'

const Card = ({title,text,component}) => {
  return (
    <div className='bg-[#101010] rounded-xl text-center w-96 m-3 px-5 py-12 flex flex-col justify-between'>
        <div>{component}</div>
        <div>
        <h2 className='text-white font-medium text-2xl mb-2'>{title}</h2>
        <p className='text-[#adadad] text-md'>{text}</p>
        </div>
    </div>
  )
}

export default Card