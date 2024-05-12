import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  User,
} from '@nextui-org/react'
import { SearchBar } from './components'
import { BiSolidMessageSquareDetail } from 'react-icons/bi'
import { IoNotifications } from 'react-icons/io5'
import { FaHome, FaLink } from 'react-icons/fa'
import { BsCalendar2EventFill, BsCopy } from 'react-icons/bs'
import { PiBuildingApartmentFill } from 'react-icons/pi'
import { FaUserCog } from 'react-icons/fa'
import { HiOutlineLogout } from 'react-icons/hi'
import { Metamask_Icon } from '../../../assets/icons'
import { useState } from 'react'

export default function __header() {
  const [isConnected, setIsConnected] = useState<boolean>(false)

  return (
    <div className=" sticky z-50 w-full  flex flex-row items-center justify-between px-4 text-white my-6">
      <SearchBar />

      <div className="flex items-center justify-center gap-8">
        {!isConnected ? (
          <Button
            color="primary"
            className=" font-semibold"
            startContent={<FaLink />}
            onClick={() => setIsConnected(true)}
          >
            Connect Wallet
          </Button>
        ) : (
          <div className="relative flex flex-row items-center justify-start border-white border-[1.5px] rounded-2xl border-opacity-30">
            <div className="relative flex items-center justify-center py-3 px-4">
              <img
                src={Metamask_Icon}
                className="relative w-8 object-contain object-center"
              />
              <div className="absolute h-full w-full" />
            </div>
            <div className="relative flex items-start justify-center flex-col gap-1">
              <h4 className="relative text-sm flex items-center justify-start gap-2 text-white text-opacity-60">
                <FaLink size={13} />{' '}
                <span className="relative bg-green-400 bg-opacity-20 py-[0.05rem] px-2 rounded-full text-[0.6rem] text-green-500">
                  CONNECTED
                </span>
              </h4>
              <p className="relative text-sm">{'0x12r45...6HJ9'}</p>
            </div>
            <button
              className="relative bg-white bg-opacity-5 mx-4 h-10 w-10 hover:bg-opacity-10 duration:200 transition-all flex items-center justify-center rounded-xl"
              onClick={() => {
                alert('Wallet Address Copied')
                navigator.clipboard.writeText('0x12r45...6HJ9')
              }}
            >
              <BsCopy color="rgba(255, 255, 255, 0.6)" />
            </button>
          </div>
        )}

        <div className="flex items-center gap-4">
          <Badge color="danger" content={5} shape="circle">
            <IoNotifications className="fill-current" size={30} />
          </Badge>
          <Badge color="danger" content={50} shape="circle">
            <BiSolidMessageSquareDetail size={30} />
          </Badge>
        </div>

        <Dropdown
          placement="bottom-start"
          classNames={{ base: ['dark', 'w-[250px]'] }}
        >
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
              }}
              className="transition-transform"
              description="@tonyreichert"
              name="Tony Reichert"
            />
          </DropdownTrigger>
          <DropdownMenu
            variant="flat"
            color="primary"
            aria-label="Dropdown menu with description"
            classNames={{ list: ['text-text'] }}
            itemClasses={{
              wrapper: ['w-[250px]', 'text-text'],
            }}
          >
            <DropdownSection showDivider>
              <DropdownItem className=" p-3" startContent={<FaHome />}>
                Overview
              </DropdownItem>
              <DropdownItem
                className=" p-3"
                startContent={<BsCalendar2EventFill />}
              >
                My Campaigns
              </DropdownItem>
              <DropdownItem
                className=" p-3"
                startContent={<PiBuildingApartmentFill />}
              >
                My Organization
              </DropdownItem>
              <DropdownItem className=" p-3" startContent={<FaUserCog />}>
                Profile
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              <DropdownItem
                key="delete"
                className="text-danger py-3"
                color="danger"
                startContent={<HiOutlineLogout />}
              >
                Log Out
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}
