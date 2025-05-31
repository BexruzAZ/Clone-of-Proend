import { useState, useEffect } from "react";

export default function Nav() {
    const [showMessage, setShowMessage] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowMessage(window.scrollY === 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav
            style={{
                top: `${showMessage ? "54px" : "0"}`,
            }}
        >
            <div className="logo">
                <a href="#home">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 50"
                        className="icon"
                        style={{}}
                    >
                        <path
                            fill="#4A51DD"
                            fillRule="evenodd"
                            d="M.107 9.995V39.96l9.976 9.989V19.983h19.952L20.06 9.995z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            fill="#4ED89D"
                            fillRule="evenodd"
                            d="M10.084 29.972h19.952V.006l9.976 9.988V39.96H20.059z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            fill="#fff"
                            d="m195.279 39.959-.427-2.354h-.215a6.6 6.6 0 0 1-1.539 1.413q-2.052 1.369-4.873 1.37-4.276 0-7.162-3.147t-2.886-8.197 2.886-8.198q2.886-3.146 7.162-3.146 2.564 0 4.703 1.413.897.599 1.495 1.37h.214V9.994h5.345v29.964zm-10.219-6.186q1.539 1.692 4.02 1.691t4.018-1.69q1.539-1.692 1.539-4.73 0-3.04-1.539-4.73-1.539-1.692-4.018-1.692-2.481 0-4.02 1.692-1.538 1.69-1.538 4.73 0 3.038 1.538 4.73m-31.251 6.185V18.128h4.915l.428 2.14h.214q.513-.642 1.454-1.284 1.966-1.284 4.531-1.284 3.72 0 6.136 2.547t2.415 6.656v13.056h-5.344V27.33q0-2.097-1.304-3.403-1.304-1.305-3.399-1.305t-3.399 1.305q-1.305 1.305-1.304 3.404v12.628zm-10.69-6.421h5.559q-.214.814-.834 1.82t-1.753 2.226q-1.134 1.22-3.099 2.012-1.967.792-4.361.792-4.831 0-7.974-3.19t-3.141-8.154q0-4.966 3.141-8.154 3.143-3.19 7.974-3.19 4.488 0 7.589 3.146 3.098 3.146 3.099 7.77 0 .385-.129 1.54l-.085.6h-16.247q.343 2.31 1.924 3.724 1.582 1.413 3.848 1.413 1.71 0 2.908-.75 1.196-.747 1.581-1.604m-10.26-6.42h11.116q-.385-2.184-1.775-3.553-1.389-1.37-3.569-1.37-2.31 0-3.784 1.348t-1.988 3.574m-27.854-6.229q3.142-3.19 7.973-3.19 4.832 0 7.973 3.19 3.144 3.189 3.144 8.154 0 4.966-3.144 8.155-3.141 3.189-7.973 3.189t-7.973-3.19q-3.143-3.187-3.142-8.154-.001-4.965 3.142-8.154m3.869 12.777q1.667 1.798 4.104 1.798t4.104-1.798q1.668-1.798 1.668-4.623t-1.668-4.623q-1.667-1.797-4.104-1.797t-4.104 1.797-1.668 4.623q0 2.826 1.668 4.623m-21.548 6.293V18.127h4.49l.427 1.927h.214q.385-.514.94-.942 1.326-.984 2.908-.984h4.275v5.136h-3.848q-4.061 0-4.061 4.067v12.628zm-27.362 0V9.995H73.43q4.233 0 6.82 2.739 2.585 2.74 2.586 7.32t-2.587 7.32q-2.586 2.74-6.819 2.74h-7.91v9.844zm5.558-15.196h7.695q1.84 0 2.95-1.242 1.112-1.24 1.112-3.467 0-2.226-1.112-3.467-1.11-1.242-2.95-1.242h-7.695z"
                        ></path>
                    </svg>
                </a>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="icon"
                    >
                        <path d="M19.938 8H21a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8 8 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 0 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0M3 10v4h1v-4zm17 0v4h1v-4zM7.76 15.785l1.06-1.696A5.97 5.97 0 0 0 12 15a5.97 5.97 0 0 0 3.18-.911l1.06 1.696A7.96 7.96 0 0 1 12 17a7.96 7.96 0 0 1-4.24-1.215"></path>
                    </svg>
                    +998 12 345 67 89
                </button>
            </div>
            <div className="menu">
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Portfolio</a>
                <a href="">Our Clients</a>
                <a href="">Blog</a>
                <a href="">Contacts</a>
            </div>
            <div className="buttons">
                <button>EN</button>
                <button>
                    <a href="#form">Apply <svg xmlns="http://www.w3.org/2000/svg" style={{width:'24px', height:'24px'}} fill="#fff" viewBox="0 0 32 32" className="icon"><path d="M21.562 14.667 14.41 7.514l1.885-1.886 10.371 10.37-10.37 10.372-1.886-1.886 7.152-7.152H5.333v-2.666z"></path></svg></a>
                </button>
            </div>
            <span
                style={{
                    width: `${scrollProgress}%`,
                }}
                className="scrollHeight"
            ></span>
        </nav>
    );
}
