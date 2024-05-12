import { TabIconOptions, TabOptions } from './components'
import { useState } from 'react'
import { SideBarTabs } from '../../../constants'

interface SideBarProps {
  sideBarOpen: boolean
}

const __sideBar = ({ sideBarOpen }: SideBarProps) => {
  const [activeTab, setActiveTab] = useState<string>('Dashboards')

  return (
    <>
      <section
        className={` bg-[#F7F8F9] min-h-[100vh] top-0 px-2 flex-shrink-0 transition-all ease-in-out duration-500 ${sideBarOpen ? '-translate-x-full hidden ' : 'translate-x-0 '}`}
      >
        <div className=" w-full py-8  flex justify-center items-center flex-col gap-2">
          {/* <img src={Logo_Icon} alt="logo icon" /> */}
          <h1>Stellarraise</h1>
        </div>

        <hr className=" border-gray-200 h-[0.2px]" />

        <nav className=" w-full flex flex-col px-2 gap-1 py-1">
          {SideBarTabs.map((tab, index) => (
            <TabIconOptions
              key={index}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </nav>
      </section>
      {/* ======================== */}
      <section
        className={` bg-[#F7F8F9] min-h-[100vh] top-0 flex-shrink-0 transition-all ease-in-out duration-500 ${sideBarOpen ? 'translate-x-0 w-[224px]' : '-translate-x-full w-0'}`}
      >
        <div className=" w-full px-6 py-4 flex justify-center items-center flex-col gap-2">
          <img src={Logo_Icon} alt="logo icon" />
          <img src={Logo} alt="logo " className=" w-[6rem]" />
        </div>

        <hr className=" border-gray-200 h-[0.2px]" />

        <nav
          className={` w-full flex flex-col px-2 gap-1 py-1 transition-all ease-in-out duration-500 ${!sideBarOpen ? ' -translate-x-[1500%] ' : 'translate-x-0 '}`}
        >
          {SideBarTabs.map((tab, index) => (
            <TabOptions
              key={index}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </nav>
      </section>
    </>
  )
}

export default __sideBar
