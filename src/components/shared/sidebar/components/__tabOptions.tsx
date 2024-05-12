import { NavLink, useLocation } from 'react-router-dom'
import { SideBarRoutesType } from '../../../../constants'
import { useEffect, useState } from 'react'

const __tabOptions = ({
  tab,
  activeTab,
  setActiveTab,
}: {
  tab: SideBarRoutesType
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [pathName, setPathName] = useState<string>(tab.path)
  const location = useLocation()

  useEffect(() => {
    setPathName(location.pathname)
  }, [location.pathname])

  return (
    <NavLink
      to={tab.path}
      className={`relative border-solid group transition-all duration-30 py-1 ${
        pathName !== '/profile' && activeTab === tab.tab
          ? 'bg-opacity-10 bg-light-primary rounded-sm '
          : ''
      }`}
      onClick={() => {
        setActiveTab(tab.tab)
      }}
    >
      <span
        className={`relative flex items-center text-base px-3 transition-all duration-30 py-[0.9rem] gap-3  ${
          activeTab === tab.tab
            ? ' border-[#BEF264] border-solid border-r-large rounded-s-sm group-hover:text-light-primary text-text'
            : 'text-light-primary'
        }`}
      >
        {<tab.icons size={20} color={activeTab === tab.tab ? '#BEF264': '#ffffff'} />}
        {tab.tab}
      </span>
    </NavLink>
  )
}

export default __tabOptions
