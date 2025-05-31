import { useEffect, useState } from "react";

export default function Message() {
    const [showMessage, setShowMessage] = useState(true);

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
        <div
            className="topMessage"
            style={{
                top: showMessage ? "0px" : "-54px",
            }}
        >
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    style={{ width: "24px", height: "24px" }}
                >
                    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z"></path>
                </svg>
                info@proend.uz
            </div>

            <div>
                <div>
                    Social media:
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="icon"
                            style={{ width: "24px", height: "24px" }}
                            fill="#fff"
                        >
                            <path d="M22 3H10a7.007 7.007 0 0 0-7 7v12a7.01 7.01 0 0 0 7 7h12a7.01 7.01 0 0 0 7-7V10a7.01 7.01 0 0 0-7-7m-6 19a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6m7.5-12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M20 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0"></path>
                        </svg>
                    </a>
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="icon"
                            style={{ width: "24px", height: "24px" }}
                            fill="#fff"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0m7.416 10.881c-.24 2.53-1.283 8.67-1.812 11.503-.224 1.2-.667 1.601-1.093 1.64-.93.085-1.635-.615-2.535-1.204-1.408-.923-2.204-1.497-3.57-2.399-1.58-1.041-.557-1.613.343-2.548.236-.245 4.33-3.969 4.41-4.306.009-.043.02-.2-.075-.283s-.232-.055-.33-.032q-.212.048-6.75 4.46-.958.658-1.736.641c-.57-.012-1.67-.322-2.487-.589-1.001-.325-1.798-.499-1.729-1.05q.053-.433 1.19-.885 6.995-3.048 9.33-4.02c4.444-1.848 5.367-2.169 5.97-2.18.754-.01.935.612.874 1.252"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="icon"
                            style={{ width: "24px", height: "24px" }}
                            fill="#fff"
                        >
                            <path d="M30.67 28.779h.302l-.58-.878c.355 0 .543-.225.546-.501q0-.017-.002-.033c0-.376-.227-.556-.692-.556h-.752v1.968h.283v-.858h.348zm-.567-1.08h-.328v-.666h.416c.215 0 .46.035.46.316 0 .323-.247.35-.548.35m-7.048-2.269h-4.01v-6.278c0-1.497-.026-3.424-2.085-3.424-2.088 0-2.408 1.63-2.408 3.316v6.387h-4.008V12.519h3.85v1.764h.053a4.22 4.22 0 0 1 3.797-2.086c4.064 0 4.812 2.674 4.812 6.15zM6.02 10.754a2.326 2.326 0 1 1 0-4.652 2.326 2.326 0 0 1 0 4.652m2.004 14.678H4.011V12.519h4.013zm17.03-23.054H1.995A1.975 1.975 0 0 0 0 4.328V27.48a1.975 1.975 0 0 0 1.996 1.952h23.057a1.98 1.98 0 0 0 2.004-1.952V4.327a1.98 1.98 0 0 0-2.004-1.951"></path>
                            <path d="M30.137 25.935a1.844 1.844 0 1 0 .036 0zm.043 3.477c-.893.015-1.672-.696-1.687-1.59a1.617 1.617 0 1 1 3.235-.053v.027a1.583 1.583 0 0 1-1.548 1.616h-.041Z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
