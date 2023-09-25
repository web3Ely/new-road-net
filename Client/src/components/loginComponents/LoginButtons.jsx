export default function LoginButtons({ cssClass = "", diplayText, onAction }) {
    const btnCSS =
        "bg-cyan-500 hover:bg-cyan-600 w-1/2 m-1 md:w-2/5 py-1 md:py-2 rounded-md self-center";
    return (
        <button className={cssClass + btnCSS} onClick={onAction}>
            {diplayText}
        </button>
    );
}
