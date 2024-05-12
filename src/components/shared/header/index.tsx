import { Badge } from '@nextui-org/react'
import { SearchBar } from './components'
import { BiSolidMessageSquareDetail } from 'react-icons/bi'
import { IoNotifications } from 'react-icons/io5'

export default function __header() {
  return (
    <div className=" sticky z-50 w-full dark:bg-dark-secondary flex flex-row items-center justify-between px-4 text-white mt-4">
      <SearchBar />

      <div className="flex items-center gap-4">
        <Badge color="danger" content={5} shape="circle">
          <IoNotifications className="fill-current" size={30} />
        </Badge>
        <Badge color="danger" content={50} shape="circle">
          <BiSolidMessageSquareDetail size={30} />
        </Badge>
      </div>
    </div>
  )
}
