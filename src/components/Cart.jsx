import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { cartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import Button from './Button'


const Cart = () => {
  const {
    currentColor, 
    setIsClicked
  } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400 p-8">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Shopping Cart</p>
          <button
            type="button" 
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            onClick={() => setIsClicked(prev => ({...prev, ['cart']: false}))}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div>
          {cartData.map((item, index) => (
            <div key={item.name}>
              <div>
                <div className="flex items-center gap-5 leading-8 border-b-1 border-color p-4">
                  <img src={item.image} className="rounded w-20 h-18"/>

                  <div>
                    <p className="font-extrabold text-gray-800 dark:text-gray-200">{item.name}</p>
                    <p className='font-semibold text-sm text-gray-600 dark:text-gray-400'>{item.category}</p>

                    <div className='flex gap-4 mt-2 items-center'>
                      <p className='font-semibold text-lg'>{item.price}</p>
                      <div className='flex items-center border-1 border-r-0 border-color rounded'>
                        <p className='p-2 border-r-1 text-red-600 dark:text-gray-600'><AiOutlineMinus /></p>
                        <p className='p-2 border-r-1 border-color text-green-600 dark:text-gray-600'>0</p>
                        <p className='p-2 border-r-1 border-color text-green-600 dark:text-gray-600'><AiOutlinePlus /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 mb-3 pl-2 pr-2">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className='font-semibold'>$890</p>
          </div>

          <div className="flex justify-between items-center mt-3">
            <p className='text-gray-500 dark:text-gray-200'>Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-6">
          <Button color="white" bgColor={currentColor} text="Place Order" borderRadius="10px" size="md" className="w-full"/>
        </div>
      </div>
    </div>
  )
}

export default Cart;
