import { IHeading } from "../interfaces/CardInterfaces"

const Heading = ({title} : IHeading) => {
  return (
    <div className="container d-flex justify-content-center fs-1">
        {title}
    </div>
  )
}

export default Heading