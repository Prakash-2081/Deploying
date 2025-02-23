import React, { useContext, useState } from 'react'
import  { UseContextApi } from '../store/ContextApi'

const FilterImage = () => {
    const {AfterfilteringImage}=useContext(UseContextApi);
  return (
    <>
    <div className='bg-blue-600 w-[80%] h-[100vh]'>

        <div className='grid grid-cols-3 bg-amber-400 p-3'>
            {AfterfilteringImage.map((AllImage,index)=>(
                <div className='mx-2'>
                <img className='w-[400px]' src={AllImage.image} alt={AllImage.id} key={index} />
                <h4 className=''>Name: {AllImage.title}</h4>
                <p>Price: {AllImage.price}</p>
                </div>
            ))}
        </div>

    </div>
    </>
  )
}

export default FilterImage
