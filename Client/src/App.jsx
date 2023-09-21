import AboutUs from "./components/aboutUs";
import Figure from "./components/figure";
import QR from "./components/qr-code";
import Social from "./components/social-media";
import GroupOne from "./components/group-one";
import Growth from "./components/growth";
import GroupTwo from "./components/group-two";
import Phrase from "./components/phrase";

function App() {
    const childCSS =
        "bg-white/50 rounded-lg transition-all md:drop-shadow-lg flex flex-col justify-center p-5 ";
    const threeXtwoCSS = "col-span-3 row-span-2 ";
    const twoXtwoCSS = "col-span-2 row-span-2 ";
    const twoXoneCSS = "col-span-2 ";
    const twoXfourCSS = "col-span-2 row-span-4 ";

    const growthCSS =
        childCSS +
        threeXtwoCSS +
        "hover:scale-x-scaleSM hover:scale-y-scaleMD " +
        "col-start-1 row-start-6 lg:col-start-1 lg:row-start-2 xl:col-start-3 xl:row-start-2";
    const phraseCSS =
        childCSS +
        twoXoneCSS +
        "hover:scale-x-scaleMD hover:scale-y-scaleLG " +
        "col-start-1 row-start-1 lg:col-start-1 lg:row-start-1 xl:col-start-3 xl:row-start-1";
    const socialCSS =
        childCSS +
        twoXoneCSS +
        "hover:scale-x-scaleMD hover:scale-y-scaleLG " +
        "col-start-3 row-start-1 lg:col-start-2 lg:row-start-4 xl:col-start-4 xl:row-start-4";
    const aboutUsCSS =
        childCSS +
        twoXtwoCSS +
        "hover:scale-x-scaleMD hover:scale-y-scaleMD " +
        "col-start-1 row-start-2 lg:col-start-4 lg:row-start-1 xl:col-start-1 xl:row-start-1";
    const groupOneCSS =
        twoXfourCSS +
        "col-start-3 row-start-2 lg:col-start-4 lg:row-start-3 xl:col-start-6 xl:row-start-1";
    const groupTwoCSS =
        childCSS +
        twoXtwoCSS +
        "hover:scale-x-scaleMD hover:scale-y-scaleMD " +
        "col-start-1 row-start-4 lg:col-start-2 lg:row-start-5 xl:col-start-1 xl:row-start-3";
    const qrCSS =
        childCSS +
        "hover:scale-x-scaleLG hover:scale-y-scaleLG " +
        "col-start-4 row-start-7 lg:col-start-1 lg:row-start-4 xl:col-start-3 xl:row-start-4";
    const figureCSS =
        childCSS +
        "hover:scale-x-scaleLG hover:scale-y-scaleLG " +
        "col-start-4 row-start-6 lg:col-start-3 lg:row-start-1 xl:col-start-5 xl:row-start-1";

    return (
        <div
            className="max-w-7xl p-3 md:p-5 backdrop-blur-sm bg-stone-100/30 drop-shadow-2xl
                        grid gap-1 md:gap-3
                        grid-rows-size-20 md:grid-rows-size-40-md lg:grid-rows-size-40-lg xl:grid-rows-size-40-xl
                        grid-cols-size-20 md:grid-cols-size-40-md lg:grid-cols-size-40-lg xl:grid-cols-size-40-xl"
        >
            <Phrase cssClass={phraseCSS} />
            <AboutUs cssClass={aboutUsCSS} />
            <Figure cssClass={figureCSS} />
            <GroupOne cssClass={groupOneCSS} />
            <Growth cssClass={growthCSS} />
            <GroupTwo cssClass={groupTwoCSS} />
            <QR cssClass={qrCSS} />
            <Social cssClass={socialCSS} />
        </div>
    );
}

export default App;
