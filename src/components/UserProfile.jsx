import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsPersonSquare, BsEnvelopePaperFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";

import avatar from '../data/avatar.jpg';
import Button from './Button';
import { useStateContext } from '../contexts/ContextProvider';

const UserProfile = () => {
  const {currentColor, setIsClicked} = useStateContext();
  return (
    <div className='nav-item absolute right-4 top-16 bg-white shadow-2xl w-11/12 md:w-96 p-8 rounded-md'>
      <div className='flex justify-between items-center border-blue-500 border-xl'>
        <p className="font-extrabold font">User Profile</p>   
        <div>
          <button 
            onClick={() => setIsClicked(prev => ({...prev, ['userProfile']: false}))}
            type="button" 
            className='text-xl rounded-full hover:bg-light-gray p-2'>
              <MdOutlineCancel />
          </button>
        </div>
      </div>

      <div className='mt-5'>
        <div className='flex items-center gap-5 border-b-1 border-gray-200 pb-3 hover:bg-gray-100 cursor-pointer'>
          <img className="rounded-full w-12 h-12" src={avatar} />
          <div className='ml-2'>
            <p className="font-extrabold dark:text-gray-200">Michael Roberts</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">Administrator</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">info@shop.com</p>
          </div>
        </div>

        <div className='flex items-center gap-5 border-b-1 border-gray-200 pb-3 pl-2 hover:bg-gray-100 cursor-pointer'>
          <BsPersonSquare className="w-8 h-8 text-red-500" style={{color: `${currentColor}`}}/>
          <div>
            <p className="font-semibold dark:text-gray-200">My Profile</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">Account Settings</p>
           
          </div>
        </div>

        <div className='flex items-center gap-5 border-b-1 border-gray-200 pb-3 pl-2 hover:bg-gray-100 cursor-pointer'>
          <BsEnvelopePaperFill className="w-8 h-8 text-red-500" style={{color: `${currentColor}`}} />
          <div>
            <p className="font-semibold dark:text-gray-200">My Inbox</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">Messages & Emails</p>
           
          </div>
        </div>

        <div className='flex items-center gap-5 border-b-1 border-gray-200 pb-3 pl-2 hover:bg-gray-100 cursor-pointer'>
          <FaTasks className="w-8 h-8 text-red-500" style={{color: `${currentColor}`}} />
          <div>
            <p className="font-semibold dark:text-gray-200">My Tasks</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">To-do and Daily Tasks</p>
           
          </div>
        </div>

        <div className="mt-6">
          <Button color="white" bgColor={currentColor} text="See all messages" borderRadius="10px" size="md" className="w-full"/>
        </div>
      </div>
      
    </div>
  )
}

export default UserProfile
