import NavigationItem from "./NavigationItem";

function Navigation() {

    return (
        <>
            <nav className="navbar fixed-bottom navbar-dark bg-dark-subtle">
                <div className="container">
                    <NavigationItem image={"/img/navigation/company.png"} alt={"Company"} />
                    <NavigationItem image={"/img/navigation/warehouse.png"} alt={"Warehouse"} />
                    <NavigationItem image={"/img/navigation/market.png"} alt={"Market"} />
                    <NavigationItem image={"/img/navigation/statistics.png"} alt={"Statistics"} />
                </div>
            </nav>
        </>
    )
}

export default Navigation