import { useState } from "react";
import { ICardInterface } from "../../interfaces/CardInterfaces";

const ChildTask = (props : ICardInterface) => {
    const {details:{id,model,year,color},handleColorChange} = props;
    const [handleColor, setHandleColor] = useState(color)
  return (
    <>
    <div className="card-details">
        <span className="d-block"><b>Model: </b>{model}</span>
        <span className="d-block"><b>Year: </b>{year}</span>
        <span className="d-block"><b>Color: </b>{color}</span>
    </div>
    <div>
        <button type="button" className="btn btn-primary my-2" onClick={() => handleColorChange(handleColor,id)}>Click to change color</button>
    </div>
    </>
  )
}

export default ChildTask