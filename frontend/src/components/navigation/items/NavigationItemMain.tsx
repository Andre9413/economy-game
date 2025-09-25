import * as React from "react";
import {useState} from "react";

interface Props {
    alt: string
}

function NavigationItemMain({alt}: Props) {

    const [image, setImage] = useState("./img/navigation/menu-horizontal.png")
    const handleClick = (MouseEvent: MouseEvent): void => {
        console.log(MouseEvent);
        if (image === "./img/navigation/menu-horizontal.png") {
            setImage("./img/navigation/menu-vertical.png")
        } else {
            setImage("./img/navigation/menu-horizontal.png")
        }
    }

    return (
        <div>
            <label className="" onClick={handleClick} data-toggle="collapse" href="#menu">
                <img className="d-inline-block align-top" src={image} height={50} alt={alt}/>
            </label>
        </div>
    )
}

export default NavigationItemMain