import { useState } from "react";

import InitialFrame from "./loginComponents/InitialFrame";
import LoginFrame from "./loginComponents/LoginFrame";

export default function Login({ cssClass, onParentExpend }) {
    const [userLogIn, setUserLogIn] = useState(false);
    function expend() {
        onParentExpend();
        setUserLogIn(!userLogIn);
    }

    return (
        <div className={cssClass}>
            {!userLogIn && <InitialFrame onExpend={expend} />}
            {userLogIn && <LoginFrame />}
        </div>
    );
}
