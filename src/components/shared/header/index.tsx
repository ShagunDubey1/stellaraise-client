import {
  Badge,
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
import { FcDeleteRow } from 'react-icons/fc'

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

      <div>
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
              <DropdownItem className=" p-3">Overview</DropdownItem>
              <DropdownItem className=" p-3">My Campaigns</DropdownItem>
              <DropdownItem className=" p-3" startContent={''}>
                My Organization
              </DropdownItem>
              <DropdownItem className=" p-3" startContent={''}>
                Profile
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              <DropdownItem
                key="delete"
                className="text-danger"
                color="danger"
                startContent={<FcDeleteRow />}
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
