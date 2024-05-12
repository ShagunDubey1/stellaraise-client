import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'

export default function __searchBar() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div
      className={`relative w-[40%] flex flex-row items-center justify-center bg-sidebar rounded-xl h-11 shadow-md border-white border-[0.2px] border-opacity-30`}
    >
      <span className="relative px-3 flex items-center justify-center">
        <IoSearch color="rgba(255, 255, 255, 0.5)" />
      </span>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="relative outline-none bg-transparent flex-1"
        type="text"
        placeholder="Search campaigns, events & organization"
        name="global-search-input"
      />
      {searchValue.length > 0 ? (
        <span className="relative px-3 flex items-center justify-center">
          <button
            className="p-[0.2rem] bg-white bg-opacity-10 rounded-full flex items-center justify-center"
            onClick={() => {
              setSearchValue('')
            }}
          >
            <IoClose color="rgba(255, 255, 255, 1)" />
          </button>
        </span>
      ) : null}
    </div>
  )
}
