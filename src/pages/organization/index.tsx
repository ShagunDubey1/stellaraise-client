import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from '@nextui-org/react'
import { BsBuildingFillAdd } from 'react-icons/bs'

export default function __organization() {
  return (
    <div className=" flex relative items-start px-4 gap-[1.6%]">
      <Card isFooterBlurred className=" h-[300px] w-[32%]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            "Empowering Lives, Building Futures"
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Brighter Tomorrow Foundation
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cove brightness-50"
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Breathing App</p>
              <p className="text-tiny text-white/60">
                Get a good night's sleep.
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            See Details
          </Button>
        </CardFooter>
      </Card>

      <Card className=" relative flex h-[300px] w-[32%] p-14">
        <CardBody className=" border-1 border-opacity-30 border-white border-dashed rounded-lg flex justify-center items-center">
          <Button
            isIconOnly
            variant="faded"
            aria-label="Add Organization"
            className=' w-[80px] h-[80px]'
          >
            <BsBuildingFillAdd size={40} className=" cursor-pointer" />
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}
