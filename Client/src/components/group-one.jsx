import LogIn from "./groupe_one/login";
import AllAI from "./groupe_one/allAIs";

export default function groupOne({ cssClass }) {
    const childCSS =
        "bg-white/50 rounded-lg transition-all md:drop-shadow-md flex flex-col justify-center p-5 ";
    const compCSS = cssClass + " grid gap-1 md:gap-3 grid-rows-size-20-g1 md:grid-rows-size-40-g1";
    const logInCSS = childCSS + "hover:scale-x-scaleMD hover:scale-y-scaleLG ";
    const allAIsCSS = childCSS + "hover:scale-x-scaleMD hover:scale-y-scaleSM ";
    return (
        <div className={compCSS}>
            <LogIn cssClass={logInCSS} />
            <AllAI cssClass={allAIsCSS} />
        </div>
    );
}
