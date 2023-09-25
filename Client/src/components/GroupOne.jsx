// import { useState } from "react";
// import LogIn from "./groupe_one/Login";
// import Services from "./groupe_one/Services";

// export default function GroupOne({ cssClass, childClass }) {
//     const [expend, setExpend] = useState(false);
//     const compCSS = `grid multi-gap grid-rows-size-20-g1 md:grid-rows-size-40-g1 duration-300 ${
//         expend && "grid-rows-size-20-g1-change md:grid-rows-size-40-g1-change"
//     }`;
//     const logInCSS = `hover:scale-x-scaleMD ${
//         expend ? "hover:scale-y-scaleMD " : "hover:scale-y-scaleLG "
//     }`;
//     const servicesCSS = "hover:scale-x-scaleMD hover:scale-y-scaleSM ";

//     function expendLogIn() {
//         setExpend((val) => !val);
//     }

//     return (
//         <div className={cssClass + compCSS}>
//             <LogIn cssClass={childClass + logInCSS} onParentExpend={expendLogIn} />
//             <Services cssClass={childClass + servicesCSS} />
//         </div>
//     );
// }
