import { useState } from "react";
import NavItem from "./NavItem";
function NavPages() {
    const [targetPos, setTargetPos] = useState(0);

    let fixedCSS =
        "-z-10 rounded-t-xl aspect-square fixed bg-gray-200/90 h-[60px] sm:h-[80px] md:h-[100px] transition-all duration-400 " +
        "-ml-[180px] sm:-ml-[240px] md:-ml-[300px] lg:ml-0 ";
    fixedCSS += targetPos == 1 ? "-ml-[60px] sm:-ml-[80px] md:-ml-[100px] lg:ml-[100px]" : "";
    fixedCSS += targetPos == 2 ? "ml-[60px] sm:ml-[80px] md:ml-[100px] lg:ml-[200px]" : "";
    fixedCSS += targetPos == 3 ? "ml-[180px] sm:ml-[240px] md:ml-[300px] lg:ml-[300px]" : "";

    return (
        <div className="flex justify-center lg:justify-start h-[60px] sm:h-[80px] md:h-[100px]">
            <NavItem
                onClicked={() => setTargetPos(0)}
                isSelected={targetPos == 0}
                compName={"Home"}
                linkPage={"/"}
            />
            <NavItem
                onClicked={() => setTargetPos(1)}
                isSelected={targetPos == 1}
                compName={"Us"}
                linkPage={""}
            />
            <NavItem
                onClicked={() => setTargetPos(2)}
                isSelected={targetPos == 2}
                compName={"AI"}
                linkPage={""}
            />
            <NavItem
                onClicked={() => setTargetPos(3)}
                isSelected={targetPos == 3}
                compName={"Join"}
                linkPage={"/JoinUs"}
            />
            <div className={fixedCSS}></div>
        </div>
    );
}

export default NavPages;
