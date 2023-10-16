import { useState } from 'react'
import Sidebar from '../general/sidebar/Sidebar'
import { useWindowSize } from '../../hooks/useWindowSize'
import { AiOutlineMenu } from 'react-icons/ai'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { width } = useWindowSize()
  const [showSideMenu, setShowSideMenu] = useState(false)

  return (
    <>
      {
        width > 860 ? (
          <div className='flex w-full h-screen'>
            <Sidebar />
            {children}
          </div>
        ) : (
          <div>
            <div onClick={() => setShowSideMenu(pre => !pre)} className={` ${showSideMenu ? "   bg-black bg-opacity-60  z-50 fixed top-0 left-0 w-full" : "w-0 z-20 fixed top-0 left-0 bg-opacity-0 bg-transparent"}`}>
              <div className={`z-40 w-[300px] ${showSideMenu ? "-translate-x-0" : "-translate-x-96" } transition-all duration-100`}>
                <Sidebar />
              </div>
            </div>
            <div className='flex justify-end w-full p-5 bg-[#5B0888] sticky top-0 left-0 z-40'>
              <button onClick={() => setShowSideMenu(pre => !pre)}>
                <AiOutlineMenu className="text-2xl text-white font-bold" />
              </button>
            </div>
            {children}
          </div>
        )
      }
    </>
  )
}

export default Layout