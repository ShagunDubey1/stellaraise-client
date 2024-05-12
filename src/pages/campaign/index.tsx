import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default function __campaign() {
  return (
    <div className=" flex relative px-4">
      <Card className="py-4" isPressable>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Donors</p>
          <small className="text-default-500">124254+</small>
          <h4 className="font-bold text-large">Covid</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
    </div>
  )
}
