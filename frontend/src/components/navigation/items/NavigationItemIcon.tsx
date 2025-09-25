import * as React from "react";

interface Props {
    image: string,
    alt: string
}

function NavigationItemIcon({image, alt}: Props) {

    const [className, setClassName] = React.useState("");
    if (!className) {
        setClassName("btn bg-dark-subtle");
    }
    const handleMouseOver = (MouseEvent: MouseEvent): void => {
        setClassName("btn bg-dark");
        console.log(MouseEvent);
    };
    const handleMouseLeave = (MouseEvent: MouseEvent): void => {
        setClassName("btn bg-dark-subtle");
        console.log(MouseEvent);
    }

    return (
        <div>
            <label className={className} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <img className="d-inline-block align-top" src={image} height={50} alt={alt}/>
            </label>
        </div>
    )
}

export default NavigationItemIcon