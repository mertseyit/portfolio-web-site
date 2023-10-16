import { Link, useLocation } from "react-router-dom"

const SidebarLinkList = () => {
  return (
    <div className='p-8 mt-10 w-full h-full flex flex-col gap-5'>
        <CustomLink label='Ana Sayfa' to='/'/>
        <CustomLink label='Hakkımda' to='/about'/>
        <CustomLink label='CV' to='/resume'/>
        <CustomLink label='Projeler' to='/projects'/>
        <CustomLink label='Deneyim' to='/experience'/>
        <CustomLink label='İletişim' to='/contact'/>
    </div>
  )
}

const CustomLink = ({ to, label }:{ to: string, label: string }) => {
  const { pathname } = useLocation()

  return (
    <Link className={`text-white tracking-widest pb-2  ${to === pathname ? "border-white" : "border-transparent"} border-b-2`} to={to}>{label}</Link>
  )
}

export default SidebarLinkList