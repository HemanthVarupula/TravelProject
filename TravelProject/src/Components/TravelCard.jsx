import React from 'react'
import { Link } from 'react-router-dom'
const TravelCard = ({img,name,to,id}) => {
  return (
    <div className='flex flex-3 flex-wrap'>
        <div className='h-auto w-[400px] p-5 border-2 m-10'>
         <h1 className='text-[1.8rem] text-orange-500'>{name}</h1>
         <img src={img} className='h-[250px] w-[250px] mt-3 hover:scale-90 transition-transform duration-300 ease-in-out'></img>
         <Link to={`/details/${id}`}> <button className='border-2 p-2  mt-2 cursor-pointer hover:bg-red-300 rounded-2xl'>More Details</button></Link>
        </div>
    </div>
  )
}

export default TravelCard