import { Outlet } from "react-router-dom";
import NavBar from "./Nav/NavBar";
function AppLayout() {
    return (
        <div className="max-w-7xl p-[1.5%] xl:p-5 text-sm sm:text-base backdrop-blur-sm bg-stone-100/30 drop-shadow-2xl w-11/12 flex flex-col">
            <NavBar />
            <main className="bg-gray-200/70 rounded-b-xl flex flex-col justify-center items-center min-h-[600px] w-full">
                <Outlet />
            </main>
        </div>
    );
}
export default AppLayout;
