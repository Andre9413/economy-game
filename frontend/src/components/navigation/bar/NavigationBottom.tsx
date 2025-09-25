import NavigationItemIcon from "../items/NavigationItemIcon";

function NavigationBottom() {
    return (
        <>
            <nav className="navbar fixed-bottom navbar-dark bg-dark-subtle">
                <div className="btn-group btn-group-toggle mx-auto gap-2" data-toggle="buttons">
                    <NavigationItemIcon image={"/img/navigation/company.png"} alt={"Company"}/>
                    <NavigationItemIcon image={"/img/navigation/warehouse.png"} alt={"Warehouse"}/>
                    <NavigationItemIcon image={"/img/navigation/market.png"} alt={"Market"}/>
                    <NavigationItemIcon image={"/img/navigation/statistics.png"} alt={"Statistics"}/>
                </div>
            </nav>
        </>
    )
}
export default NavigationBottom