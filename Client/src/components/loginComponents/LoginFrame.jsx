function LoginFrame() {
    return (
        <div className="mx-auto">
            <input
                className=" w-4/5 md:w-full placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-1 pl-3 pr-3 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm md:text-base"
                placeholder="Email"
                type="text"
            />
            <input
                className=" w-4/5 md:w-full placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-1 pl-3 pr-3 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm md:text-base"
                placeholder="Password"
                type="Password"
            />
        </div>
    );
}

export default LoginFrame;
