// import NavItem from "./NavItem";
import NavPages from "./NavPages";
function NavBar() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <NavPages />
            <div
                className={
                    "flex justify-center lg:justify-start h-[60px] sm:h-[80px] md:h-[100px] row-start-1 lg:col-start-2"
                }
            ></div>
        </div>
    );
}

export default NavBar;
