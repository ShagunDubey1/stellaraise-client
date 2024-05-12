import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Tooltip } from '@nextui-org/tooltip'
import { SideBarRoutesType } from '../../../../constants'

const __tabIconOptions = ({
  tab,
  activeTab,
  setActiveTab,
}: {
  tab: SideBarRoutesType
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [pathName, setPathName] = useState<string>(tab.path)
  // console.log(pathName)
  const location = useLocation()

  useEffect(() => {
    setPathName(location.pathname)
  }, [location.pathname])

  return (
    <NavLink
      to={tab.path}
      className={`relative border-solid group transition-all duration-30 ${
        pathName !== '/profile' && activeTab === tab.tab
          ? 'bg-opacity-10 bg-light-primary rounded-lg '
          : ''
      }`}
      onClick={() => {
        // setPathName(tab.path)
        setActiveTab(tab.tab)
      }}
    >
      <Tooltip title={tab.tab} placement="right-end">
        <span
          className={`relative flex items-center text-sm px-3 transition-all duration-30 py-[0.9rem] gap-4 font-bold ${
            pathName !== '/profile' && activeTab !== tab.tab
              ? 'group-hover:bg-light-primary group-hover:bg-opacity-10 group-hover:text-light-primary text-light-primary rounded-lg'
              : pathName !== '/profile' && activeTab === tab.tab
                ? 'text-light-primary'
                : ''
          } ${activeTab !== tab.tab && pathName === '/profile' ? 'group-hover:bg-light-primary group-hover:bg-opacity-10  group-hover:text-light-primary text-text-primary' : 'text-text-primary'}`}
        >
          {<tab.icons />}
        </span>
      </Tooltip>
    </NavLink>
  )
}

export default __tabIconOptions
