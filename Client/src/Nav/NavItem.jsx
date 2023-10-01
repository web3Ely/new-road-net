import { Link } from "react-router-dom";

function NavItem({ isSelected, onClicked, compName, linkPage }) {
    // let compCSS = "h-full rounded-t-xl aspect-square flex flex-col justify-center ";
    // compCSS += isSelected ? "bg-gray-200/90" : "";
    let buttonCSS =
        "bg-white/50 rounded-lg w-[85%] aspect-square self-center flex flex-col justify-center hover:shadow-lg transition-all duration-400 ";
    buttonCSS += isSelected ? "shadow-lg" : "";
    return (
        <div className="h-full aspect-square flex flex-col justify-center">
            <Link className={buttonCSS} to={linkPage} onClick={onClicked}>
                <span className="self-center">{compName}</span>
            </Link>
        </div>
    );
}

export default NavItem;
