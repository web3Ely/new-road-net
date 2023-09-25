import LoginButtons from "./LoginButtons";

export default function InitialFrame({ onExpend }) {
    return (
        <>
            <LoginButtons onAction={onExpend} diplayText={"Log In"} />
            <LoginButtons onAction={onExpend} diplayText={"Sign In"} />
        </>
    );
}
