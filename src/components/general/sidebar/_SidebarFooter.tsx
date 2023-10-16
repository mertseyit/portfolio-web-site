import React from 'react'

const SidebarFooter = () => {
  return (
    <div className='fixed bottom-5 left-8'>
      <p className='text-white text-xs tracking-wider'>&copy; {new Date().getFullYear()} All Right Reserved</p>
    </div>
  )
}

export default SidebarFooter