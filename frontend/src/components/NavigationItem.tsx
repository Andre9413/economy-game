interface Props {
    image: string,
    alt: string
}

function NavigationItem({ image, alt }: Props) {

    return (
        <a className="navbar-brand" href="/">
            <img className="d-inline-block align-top" src={image} height={50} alt={alt} />
        </a>
    )
}

export default NavigationItem