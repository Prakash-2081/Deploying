import React, { useContext } from 'react'
import { UseContextApi } from '../store/ContextApi'

const Filtering = () => {
  const {handleChange}=useContext(UseContextApi);
  return (
    <>
      <div className='w-[20%] h-[100vh] bg-red-300'>
        <div className='bg-amber-600 w-[full] h-[50%] my-40'>
            <div className='flex flex-col'>
                <label>
            <input type="radio" name='first' value='flats' onChange={handleChange} />
                    <span>Flats</span>
                </label>
                <label>
            <input type="radio" name='first' value='sneaker' onChange={handleChange} />
                    <span>Sneaker</span>
                </label>
                <label>
            <input type="radio" name='first' value='sandle' onChange={handleChange}/>
                    <span>Sandle</span>
                </label>

                <label>
            <input type="radio" name='first' defaultChecked value='All' onChange={handleChange}/>
                    <span>show All</span>
                </label>
            
            </div>
        </div>
      </div>
    </>
  )
}

export default Filtering
