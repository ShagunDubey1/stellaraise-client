import { FaHome } from 'react-icons/fa'
import { BsCalendar2EventFill } from 'react-icons/bs'
import { PiBuildingApartmentFill } from 'react-icons/pi'
import { FaUserCog } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { GiDiamondTrophy } from 'react-icons/gi'

export interface SideBarRoutesType {
  tab: string
  path: string
  icons: IconType
}

export const SideBarTabs: SideBarRoutesType[] = [
  {
    tab: 'Home',
    path: '/',
    icons: FaHome,
  },
  {
    tab: 'Campaigns',
    path: '/campaign',
    icons: BsCalendar2EventFill,
  },
  {
    tab: 'Organization',
    path: '/organization',
    icons: PiBuildingApartmentFill,
  },
  {
    tab: 'Rewards',
    path: '/rewards',
    icons: GiDiamondTrophy,
  },
  {
    tab: 'Profile',
    path: '/profile',
    icons: FaUserCog,
  },
]
