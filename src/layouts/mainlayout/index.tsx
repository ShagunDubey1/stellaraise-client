import { Outlet, useLocation } from 'react-router-dom'
import { Header, Sidebar } from '../../components/shared'
import { useState } from 'react'

const __mainLayout = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(true)

  // const toggleSideBar = (): void => {
  //   setSideBarOpen(!sideBarOpen)
  // }

  return (
    <div className=" w-full relative flex">
      <Sidebar sideBarOpen={sideBarOpen} />
      <div className={`flex flex-1 flex-col overflow-hidden`}>
        <Header
        // toggleSideBar={toggleSideBar}
        />
        <Outlet />
      </div>
    </div>
  )
}

export default __mainLayout
