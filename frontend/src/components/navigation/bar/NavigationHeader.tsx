import NavigationItemMain from "../items/NavigationItemMain";

function NavigationHeader() {
    return (
        <>
            <nav className="navbar fixed-top navbar-dark bg-dark-subtle">
                <NavigationItemMain alt="Menu"/>
            </nav>
        </>
    )
}

export default NavigationHeader