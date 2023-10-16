import SidebarProfile from './_SidebarProfile'
import SidebarLinkList from './_SideBarLinkList'
import SidebarFooter from './_SidebarFooter'

const Sidebar = () => {
  return (
    <div className='h-screen px-8 py-5 bg-[#5B0888] sticky left-0 top-0'>
      <div className='w-full flex flex-col items-center justify-center h-full'>
        <SidebarProfile />
        <SidebarLinkList />
        <SidebarFooter />
      </div>
    </div>
  )
}






export default Sidebar