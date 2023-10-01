function InputField() {
    return (
        <>
            <label htmlFor="email" className="block text-gray-900 ">
                Your email
            </label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="my@example.com"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none p-5 block w-full"
            />
            <button className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg py-2.5 text-center ">
                Join
            </button>
        </>
    );
}

export default InputField;
