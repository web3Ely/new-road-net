// import { useState } from "react";

// import AboutUs from "./components/AboutUs";
// import Figure from "./components/Figure";
// import QRcode from "./components/QRcode";
// import SocialMedia from "./components/SocialMedia";
// // import GroupOne from "./components/GroupOne";
// import Growth from "./components/Growth";
// import GroupTwo from "./components/GroupTwo";
// import Phrase from "./components/Phrase";
// import LogIn from "./components/Login";
// import Services from "./components/Services";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./HomePage/HomePage";
import LogSignIn, { action as logInAction } from "./LogInPage/LogSignIn";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                element: <HomePage />,
                path: "/",
            },
            {
                element: <LogSignIn />,
                action: logInAction,
                path: "/JoinUs",
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
    // const [expendOne, setExpendOne] = useState(false);
    // const childCSS =
    //     "bg-white/50 rounded-lg transition-all md:drop-shadow-lg flex flex-col justify-center multi-pad ";
    // const threeXtwoCSS = "col-span-3 row-span-2 ";
    // const twoXtwoCSS = "col-span-2 row-span-2 ";
    // const twoXoneCSS = "col-span-2 ";
    // const twoXfourCSS = "col-span-2 row-span-4 ";
    // const growthCSS =
    //     "hover:scale-x-scaleSM hover:scale-y-scaleMD col-start-1 row-start-6 lg:col-start-1 lg:row-start-2 xl:col-start-3 xl:row-start-2 ";
    // const phraseCSS =
    //     "hover:scale-x-scaleMD hover:scale-y-scaleLG col-start-1 row-start-1 lg:col-start-1 lg:row-start-1 xl:col-start-3 xl:row-start-1 ";
    // const socialCSS =
    //     "hover:scale-x-scaleMD hover:scale-y-scaleLG col-start-3 row-start-1 lg:col-start-2 lg:row-start-4 xl:col-start-4 xl:row-start-4 ";
    // const aboutUsCSS =
    //     "duration-300 hover:scale-x-scaleMD hover:scale-y-scaleMD col-start-1 row-start-2 lg:col-start-4 lg:row-start-1 xl:col-start-1 xl:row-start-1 ";
    // const groupOneCSS =
    //     "col-start-3 row-start-2 lg:col-start-4 lg:row-start-3 xl:col-start-6 xl:row-start-1 grid multi-gap grid-rows-size-20-g1 md:grid-rows-size-40-g1 duration-300 " +
    //     `${expendOne && "grid-rows-size-20-g1-change md:grid-rows-size-40-g1-change"}`;
    // const groupTwoCSS =
    //     "hover:scale-x-scaleMD hover:scale-y-scaleMD col-start-1 row-start-4 lg:col-start-2 lg:row-start-5 xl:col-start-1 xl:row-start-3 ";
    // const qrCSS =
    //     "hover:scale-x-scaleLG hover:scale-y-scaleLG col-start-4 row-start-7 lg:col-start-1 lg:row-start-4 xl:col-start-3 xl:row-start-4 ";
    // const figureCSS =
    //     "hover:scale-x-scaleLG hover:scale-y-scaleLG col-start-4 row-start-6 lg:col-start-3 lg:row-start-1 xl:col-start-5 xl:row-start-1 ";
    // const logInCSS = `hover:scale-x-scaleMD ${
    //     expendOne ? "hover:scale-y-scaleMD " : "hover:scale-y-scaleLG "
    // }`;
    // const servicesCSS = "hover:scale-x-scaleMD hover:scale-y-scaleSM ";
    // const mainCSS =
    //     "max-w-7xl multi-pad backdrop-blur-sm bg-stone-100/30 drop-shadow-2xl grid multi-gap grid-rows-size-20 md:grid-rows-size-40-md lg:grid-rows-size-40-lg xl:grid-rows-size-40-xl grid-cols-size-20 md:grid-cols-size-40-md lg:grid-cols-size-40-lg xl:grid-cols-size-40-xl";
    // function onParentExpend() {
    //     setExpendOne(!expendOne);
    // }
    // return (
    // <main className={mainCSS}>
    //     <Phrase cssClass={childCSS + twoXoneCSS + phraseCSS} />
    //     <AboutUs cssClass={childCSS + twoXtwoCSS + aboutUsCSS} />
    //     <Figure cssClass={childCSS + figureCSS} />
    //     <div className={twoXfourCSS + groupOneCSS}>
    //         <LogIn cssClass={childCSS + logInCSS} onParentExpend={onParentExpend} />
    //         <Services cssClass={childCSS + servicesCSS} />
    //     </div>
    //     <Growth cssClass={childCSS + threeXtwoCSS + growthCSS} />
    //     <GroupTwo cssClass={childCSS + twoXtwoCSS + groupTwoCSS} />
    //     <QRcode cssClass={childCSS + qrCSS} />
    //     <SocialMedia cssClass={childCSS + twoXoneCSS + socialCSS} />
    // </main>
    // );
}

export default App;
