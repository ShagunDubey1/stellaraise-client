import { TabIconOptions, TabOptions } from './components'
import { useState } from 'react'
import { SideBarTabs } from '../../../constants'
import { Logo } from '../../../assets/images'

interface SideBarProps {
  sideBarOpen: boolean
}

const __sideBar = ({ sideBarOpen }: SideBarProps) => {
  const [activeTab, setActiveTab] = useState<string>('Dashboards')

  return (
    <>
      <section
        className={` bg-sidebar min-h-[100vh] top-0 px-2 flex-shrink-0 transition-all ease-in-out duration-500 ${sideBarOpen ? '-translate-x-full hidden ' : 'translate-x-0 '}`}
      >
        <div className=" w-full py-8  flex justify-center items-center flex-col gap-2">
          {/* <img src={Logo_Icon} alt="logo icon" /> */}
          <h1>Stellaraise</h1>
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
      {/* ===============large screen========= */}
      <section
        className={` bg-sidebar min-h-[100vh] top-0 flex-shrink-0 transition-all ease-in-out duration-500 ${sideBarOpen ? 'translate-x-0 w-[200px]' : '-translate-x-full w-0'}`}
      >
        <div className=" w-full px-6 py-8 flex items-center gap-2">
          <img src={Logo} alt="logo icon" className=" h-7 w-7" />
          <h1 className=" text-white text-xl from-content4">Stellaraise</h1>
        </div>

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
