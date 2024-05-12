import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function __signup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isCPVisible, setIsCPVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)
  const toggleCPVisibility = () => setIsCPVisible(!isCPVisible)

  return (
    <div className=" w-full relative flex justify-center gap-16 items-center h-full">
      <div className=" px-6">
        <h3 className=" uppercase text-lg font-medium">Join for free</h3>
        <h2 className=" text-3xl font-semibold capitalize mb-6">
          Empower NGOs and NPOs <br /> in Web 3.0 with our cutting-edge <br />
          <span className=" text-primary">crowdfunding donation app!</span>
        </h2>
        <p>
          Get started with the easiest and most secure website <br />
          to start your journey
        </p>

        <div className=" flex gap-4 mt-8">
          <Link to={'/login'}>
            <Button
              color="primary"
              variant="shadow"
              size="lg"
              className=" text-base font-semibold mt-4"
            >
              Log In
            </Button>
          </Link>

          <Button
            color="primary"
            variant="bordered"
            size="lg"
            className=" text-base font-semibold mt-4"
          >
            Explore
          </Button>
        </div>
      </div>

      <div>
        <h2 className=" text-5xl font-semibold mb-6">
          Create <br /> new account<span className=" text-primary">.</span>
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
                label: ['px-2', 'text-default-700'],
                inputWrapper: ['border-white'],
              }}
              endContent={
                <FaUser className="text-xl self-center text-default-700 pointer-events-none " />
              }
            />
            <Input
              type="text"
              label="Last Name"
              variant="bordered"
              radius="lg"
              color="primary"
              classNames={{
                innerWrapper: ['px-2'],
                label: ['px-2', 'text-default-700'],
                inputWrapper: ['border-white'],
              }}
              endContent={
                <FaUser className="text-xl self-center text-default-700 pointer-events-none " />
              }
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
              label: ['px-2', 'text-default-700'],
              inputWrapper: ['border-white'],
            }}
            endContent={
              <MdEmail className="text-2xl self-center text-default-700 pointer-events-none " />
            }
          />

          <div className=" w-full flex items-center justify-center gap-4">
            <Input
              label="Password"
              variant="bordered"
              radius="lg"
              color="primary"
              classNames={{
                innerWrapper: ['px-2'],
                label: ['px-2', 'text-default-700'],
                inputWrapper: ['border-white'],
              }}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <IoEye className="text-2xl text-default-700 pointer-events-none self-center mb-2" />
                  ) : (
                    <IoEyeOff className="text-2xl text-default-700 pointer-events-none self-center mb-2" />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
            />

            <Input
              label="Comfirm Password"
              variant="bordered"
              radius="lg"
              color="primary"
              classNames={{
                innerWrapper: ['px-2'],
                label: ['px-2', 'text-default-700'],
                inputWrapper: ['border-white'],
              }}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleCPVisibility}
                >
                  {isCPVisible ? (
                    <IoEye className="text-2xl text-default-700 pointer-events-none self-center mb-2" />
                  ) : (
                    <IoEyeOff className="text-2xl text-default-700 pointer-events-none self-center mb-2" />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
            />
          </div>

          <p className=" font-bold text-white self-end">
            Already a Member?{' '}
            <Link to={'/login'} className=" text-primary">
              Log in
            </Link>
          </p>

          <Button
            color="primary"
            variant="shadow"
            size="lg"
            className=" text-base font-semibold mt-4"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  )
}
