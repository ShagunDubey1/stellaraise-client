import { Input } from '@nextui-org/react'
import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { IoEye, IoEyeOff } from 'react-icons/io5'

export default function __signup() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className=" w-full relative flex justify-center items-center h-full">
      <div>
        <h2>
          Create <br /> new account <span>.</span>
        </h2>

        <form action="" className=" w-full flex flex-col justify-center gap-4">
          <div className=" w-full flex items-center justify-center gap-4">
            <Input
              type="text"
              label="First Name"
              variant="bordered"
              radius="lg"
              color="primary"
              classNames={{
                innerWrapper: ['px-2'],
                label: ['px-2'],
              }}
            />
            <Input
              type="text"
              label="Last Name"
              variant="bordered"
              radius="lg"
              color="primary"
              classNames={{
                innerWrapper: ['px-2'],
                label: ['px-2'],
              }}
            />
          </div>
          <Input
            type="text"
            label="Email"
            variant="bordered"
            radius="lg"
            color="primary"
            classNames={{
              innerWrapper: ['px-2'],
              label: ['px-2'],
            }}
            endContent={
              <MdEmail className="text-2xl self-center text-primary pointer-events-none " />
            }
          />
          <Input
            label="First Name"
            variant="bordered"
            radius="lg"
            color="primary"
            classNames={{
              innerWrapper: ['px-2'],
              label: ['px-2'],
            }}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <IoEye className="text-2xl text-primary pointer-events-none" />
                ) : (
                  <IoEyeOff className="text-2xl text-primary pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? 'text' : 'password'}
          />
        </form>
      </div>
    </div>
  )
}
