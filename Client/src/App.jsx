// import { useState } from "react";
import AboutUs from "./components/aboutUs";
import Login from "./components/login";
import AllAIs from "./components/allAIs";
// import MaxBusiness from "./components/maxBusiness";
// import MaxUser from "./components/maxUser";
// import LangAI from "./components/largelanAI";
// import MathAI from "./components/mathAI";
// import GameAI from "./components/gameAI";
import Figure from "./components/figure";
import QR from "./components/qr-code";
import Social from "./components/social-media";
import Growth from "./components/growth";
import Records from "./components/records";
import Phrase from "./components/phrase";
import "./App.css";

function App() {
    return (
        <div id="bento" className="bento-grid">
            <Phrase />
            <AboutUs />
            <Figure />
            <Login />
            <Growth />
            <Records />
            <QR />
            <Social />
            <AllAIs />
        </div>
    );
}

export default App;
