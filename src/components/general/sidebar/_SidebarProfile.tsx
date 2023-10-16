import React from 'react'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'
import user_profile from '../../../assets/img/user-profile/user-profile.jpeg'
import { Link } from 'react-router-dom'

const SidebarProfile = () => {
  return (
    <div className='w-full h-auto  rounded-full flex flex-col items-center'>
      <img src={user_profile} alt="User Profile" className='w-[140px] h-[140px] rounded-full p-1 border' />
      <h1 className='text-center text-2xl mt-3 font-bold text-white'>Cem Karaca</h1>
      <UserSocialMeadiLinkList />
    </div>
  )
}

const UserSocialMeadiLinkList = () => {
  return (
    <div className='flex gap-4 w-full mt-5 justify-center'>
      <Link to="/" className=' p-1 bg-gray-300 text-black flex items-center justify-center group rounded-full'>
        <RiLinkedinFill className="text-2xl group-hover:text-[#5B0888] transition-all duration-100 cursor-pointer" />
      </Link>
      <Link to="/" className=' p-1 bg-gray-300 text-black flex items-center justify-center group rounded-full'>
        <AiOutlineInstagram className="text-2xl group-hover:text-[#5B0888] transition-all duration-100 cursor-pointer" />
      </Link>
      <Link to="/" className=' p-1 bg-gray-300 text-black flex items-center justify-center group rounded-full'>
        <AiOutlineTwitter className="text-2xl group-hover:text-[#5B0888] transition-all duration-100 cursor-pointer" />
      </Link>
      <Link to="/" className=' p-1 bg-gray-300 text-black flex items-center justify-center group rounded-full'>
        <AiFillFacebook className="text-2xl group-hover:text-[#5B0888] transition-all duration-100 cursor-pointer" />
      </Link>
    </div>
  )
}

export default SidebarProfile