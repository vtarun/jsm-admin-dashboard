import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import avatar from '../data/avatar.jpg';
import Button from './Button';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  const {currentColor, setIsClicked} = useStateContext();
  return (
    <div className='nav-item absolute right-36 top-16 bg-white shadow-2xl w-96 p-8 rounded-md'>
      <div className='flex justify-between items-center border-blue-500 border-xl'>
        <p className="font-extrabold font">Notifications <span className="text-xs p-0 ml-3 pl-2 pr-2 rounded-md" style={{backgroundColor: currentColor}}>5 new</span> </p>   
        <div>
          <button 
            onClick={() => setIsClicked(prev => ({...prev, ['notification']: false}))}
            type="button" 
            className='text-xl rounded-full hover:bg-light-gray p-2'>
              <MdOutlineCancel />
          </button>
        </div>
      </div>

      <div className='mt-5'>
        <div className='flex items-center gap-5 border-b-1 border-gray-200 pb-3 hover:bg-gray-100 cursor-pointer'>
          <img className="rounded-full w-8 h-8" src={avatar} />
          <div>
            <p className="font-semibold dark:text-gray-200">Roman Joined the Team!</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">Congratulate him</p>
          </div>
        </div>

        <div className='flex items-center gap-5 border-b-1 border-gray-200 pb-3 hover:bg-gray-100 cursor-pointer'>
          <img className="rounded-full w-8 h-8" src={avatar} />
          <div>
            <p className="font-semibold dark:text-gray-200">Roman Joined the Team!</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">Congratulate him</p>
          </div>
        </div>

        <div className='flex items-center gap-5 border-b-1 border-gray-200 pb-3 hover:bg-gray-100 cursor-pointer'>
          <img className="rounded-full w-8 h-8" src={avatar} />
          <div>
            <p className="font-semibold dark:text-gray-200">Roman Joined the Team!</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">Congratulate him</p>
          </div>
        </div>

        <div className='flex items-center gap-5 border-b-1 border-gray-200 pb-3 hover:bg-gray-100 cursor-pointer'>
          <img className="rounded-full w-8 h-8" src={avatar} />
          <div>
            <p className="font-semibold dark:text-gray-200">Roman Joined the Team!</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">Congratulate him</p>
          </div>
        </div>

        <div className="mt-6">
            <Button color="white" bgColor={currentColor} text="See all notifications" borderRadius="10px" size="md" className="w-full"/>
          </div>
      </div>
      
    </div>
  )
}

export default Notification
