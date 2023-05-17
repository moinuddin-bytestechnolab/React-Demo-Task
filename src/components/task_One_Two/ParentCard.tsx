import { useState } from 'react';
import Data from '../../data/Data';
import ChildCard from './ChildCard';

const ParentCard = () => {
    const [handleColor, setHandleColor] = useState('')
    const [handleColorID, setHandleColorID] = useState(0);
    const [color,setColor] = useState("")
    
    const generateColor = () =>{
        setColor(`#${Math.random().toString(16).substr(-6)}`);
    };

    const handleColorChange = (color : string, index : number) => {
        setHandleColor(color)
        setHandleColorID(index)
        generateColor()
    }

  return (
    <section>
        <div className="container g-3">
            <div className="row">
                {
                    Data.map((item,index) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-12" key={index}>
                                <div className="card border p-3 my-3 shadow">
                                    <div className="heading">
                                        <img src={item.image} alt="img" className="d-block"/>
                                        <h3 className="text-center" style={{color : handleColorID===index ? color : item.color }}>{item.color}</h3>
                                    </div>
                                    <ChildCard details={item} handleColorChange={(color,index) => handleColorChange(color,index)}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default ParentCard