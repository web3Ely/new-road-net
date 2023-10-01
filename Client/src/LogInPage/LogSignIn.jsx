import InputField from "./InputField";
import { Form } from "react-router-dom";

function LogSignIn() {
    return (
        <Form method="POST" className="w-2/3 md:w-1/2 sm:text-base text-sm flex flex-col gap-3">
            <InputField placeHolder={"Email"} />
        </Form>
    );
}

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    return null;
}

export default LogSignIn;
