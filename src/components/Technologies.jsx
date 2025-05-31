import { useEffect, useState } from "react";

export default function Technologies() {
    const [menubar, setMenu] = useState("Programming languages");
    const [logos1, setLogos1] = useState([]);
    const [logos2, setLogos2] = useState([]);
    const [logos3, setLogos3] = useState([]);
    const [logos4, setLogos4] = useState([]);

    useEffect(() => {
        if (menubar === "Programming languages") {
            setLogos1([
                {
                    name: "Go",
                    img: "https://api.proend.uz/uploads/technologies/technologies-c614910c1677d82267d8bc1b2717e833.png",
                    bgSize: { width: "90px", height: "90px" },
                    imgSize: { width: "48px", height: "48px" },
                },
                {
                    name: "JavaScript",
                    img: "https://api.proend.uz/uploads/technologies/technologies-836f3d64260615ff270bfc2f06da1f28.png",
                    bgSize: { width: "80px", height: "80px" },
                    imgSize: { width: "38px", height: "38px" },
                },
            ]);
            setLogos2([
                {
                    name: "TypeScript",
                    img: "https://api.proend.uz/uploads/technologies/technologies-edbd24595417fd86375d51a383c2d177.png",
                    bgSize: { width: "110px", height: "110px" },
                    imgSize: { width: "68px", height: "68px" },
                },
                {
                    name: "Python",
                    img: "https://api.proend.uz/uploads/technologies/technologies-27127db66cb26160b40c0dff0f936abc.png",
                    bgSize: { width: "140px", height: "140px" },
                    imgSize: { width: "98px", height: "98px" },
                },
            ]);
            setLogos3([
                {
                    name: "PHP",
                    img: "https://api.proend.uz/uploads/technologies/technologies-34f0e3602a92855166eebe7e31b428bd.png",
                    bgSize: { width: "110px", height: "110px" },
                    imgSize: { width: "68px", height: "68px" },
                },
                {
                    name: "Swift",
                    img: "https://api.proend.uz/uploads/technologies/technologies-20f88ed43a0dafdab624d3a60583c0df.png",
                    bgSize: { width: "140px", height: "140px" },
                    imgSize: { width: "98px", height: "98px" },
                },
            ]);
            setLogos4([
                {
                    name: "Java",
                    img: "https://api.proend.uz/uploads/technologies/technologies-e0abfd3bb431998c65226073fea16176.png",
                    bgSize: { width: "120px", height: "120px" },
                    imgSize: { width: "78px", height: "78px" },
                },
                {
                    name: "Dart",
                    img: "https://api.proend.uz/uploads/technologies/d03a5c32970373ab6a537f02264b7e35.svg",
                    bgSize: { width: "90px", height: "90px" },
                    imgSize: { width: "48px", height: "48px" },
                },
            ]);
        } else if (menubar === "Database") {
            setLogos1([
                {
                    name: "MySql",
                    img: "https://api.proend.uz/uploads/technologies/ac8c134602e047b95a44e9ca7d925fc8.png",
                    bgSize: { width: "90px", height: "90px" },
                    imgSize: { width: "48px", height: "48px" },
                },
                {
                    name: "Postgresql",
                    img: "https://api.proend.uz/uploads/technologies/48fdc14279f6100bff765d12c09c07ed.svg",
                    bgSize: { width: "80px", height: "80px" },
                    imgSize: { width: "38px", height: "38px" },
                },
            ]);
            setLogos2([]);
            setLogos4([]);
            setLogos3([
                {
                    name: "MariaDB",
                    img: "https://api.proend.uz/uploads/technologies/03d84a18fd5e7fd2068fe3aff921f5f3.png",
                    bgSize: { width: "110px", height: "110px" },
                    imgSize: { width: "68px", height: "68px" },
                },
                {
                    name: "MongoDB",
                    img: "https://api.proend.uz/uploads/technologies/90b904ba08039cdd36ac671f1458a85d.png",
                    bgSize: { width: "140px", height: "140px" },
                    imgSize: { width: "98px", height: "98px" },
                },
            ]);
        } else if (menubar === "Frameworks") {
            setLogos1([
                {
                    name: "Flutter",
                    img: "https://api.proend.uz/uploads/technologies/7870ec1be84c675423cf29527dab361f.png",
                    bgSize: { width: "90px", height: "90px" },
                    imgSize: { width: "48px", height: "48px" },
                },
                {
                    name: "Vue js",
                    img: "https://api.proend.uz/uploads/technologies/e5653707ff3866518dc28555d9f8fb2c.svg",
                    bgSize: { width: "80px", height: "80px" },
                    imgSize: { width: "38px", height: "38px" },
                },
            ]);
            setLogos2([
                {
                    name: "Buffalo",
                    img: "https://api.proend.uz/uploads/technologies/e001af24be7547010af114013d17c7da.svg",
                    bgSize: { width: "110px", height: "110px" },
                    imgSize: { width: "68px", height: "68px" },
                },
                {
                    name: "Swiftui",
                    img: "https://api.proend.uz/uploads/technologies/0f7860d5ac45d097b72588d5a1584f40.png",
                    bgSize: { width: "140px", height: "140px" },
                    imgSize: { width: "98px", height: "98px" },
                },
            ]);
            setLogos3([
                {
                    name: "Nuxt js",
                    img: "https://api.proend.uz/uploads/technologies/f2be47726d859a0fa9b4fa9bfcb2f547.webp",
                    bgSize: { width: "110px", height: "110px" },
                    imgSize: { width: "68px", height: "68px" },
                },
                {
                    name: "Codergniter",
                    img: "https://api.proend.uz/uploads/technologies/bd6a8786539ba3d3bc4b09aa78511bb4.png",
                    bgSize: { width: "140px", height: "140px" },
                    imgSize: { width: "98px", height: "98px" },
                },
            ]);
            setLogos4([
                {
                    name: "Bootstrap",
                    img: "https://api.proend.uz/uploads/technologies/0cb1252c471e71848501cd9b37dfc610.svg",
                    bgSize: { width: "120px", height: "120px" },
                    imgSize: { width: "78px", height: "78px" },
                },
                {
                    name: "Laravel",
                    img: "https://api.proend.uz/uploads/technologies/adff63cd4fc4c0e31cb22175e5cc4a76.svg",
                    bgSize: { width: "90px", height: "90px" },
                    imgSize: { width: "48px", height: "48px" },
                },
            ]);
        } else if (menubar === "Design") {
            setLogos1([
                {
                    name: "Figma",
                    img: "https://api.proend.uz/uploads/technologies/bb2a7de0cd2474938cb0eca2a3370304.svg",
                    bgSize: { width: "90px", height: "90px" },
                    imgSize: { width: "48px", height: "48px" },
                },
                {
                    name: "Photoshop",
                    img: "https://api.proend.uz/uploads/technologies/b9ea47afb01ec389f27db4924c81ebcd.png",
                    bgSize: { width: "80px", height: "80px" },
                    imgSize: { width: "38px", height: "38px" },
                },
            ]);
            setLogos2([
                {
                    name: "After effects",
                    img: "https://api.proend.uz/uploads/technologies/ca69b917336abb2b07bfba29bad9ac90.svg",
                    bgSize: { width: "110px", height: "110px" },
                    imgSize: { width: "68px", height: "68px" },
                },
                {
                    name: "Adobe premier",
                    img: "https://api.proend.uz/uploads/technologies/e7267b5b6baa6b18d89c187ef516ed82.svg",
                    bgSize: { width: "140px", height: "140px" },
                    imgSize: { width: "98px", height: "98px" },
                },
            ]);
            setLogos3([
                {
                    name: "Adobe Illustrator",
                    img: "https://api.proend.uz/uploads/technologies/244a4e6326658b72ce64fe17a9f00686.svg",
                    bgSize: { width: "110px", height: "110px" },
                    imgSize: { width: "68px", height: "68px" },
                },
                {
                    name: "CorelDRAW",
                    img: "https://api.proend.uz/uploads/technologies/5b65c5b356b829a745fa2ec946c2e8f5.png",
                    bgSize: { width: "140px", height: "140px" },
                    imgSize: { width: "98px", height: "98px" },
                },
            ]);
            setLogos4([
                {
                    name: "Adobe XD",
                    img: "https://api.proend.uz/uploads/technologies/4ccd65910437eff51d1358a1cc115a58.svg",
                    bgSize: { width: "120px", height: "120px" },
                    imgSize: { width: "78px", height: "78px" },
                },
                {
                    name: "Adobe After Effects",
                    img: "https://api.proend.uz/uploads/technologies/0e6a269af3da7069b1a4500bbd965b0f.svg",
                    bgSize: { width: "90px", height: "90px" },
                    imgSize: { width: "48px", height: "48px" },
                },
            ]);
        }
    }, [menubar]);

    return (
        <section className="technologies">
            <p className="name">we are using</p>
            <h1>Technologies</h1>
            <div className="performance-menu">
                <button
                    className={`${
                        menubar === "Programming languages" ? "active" : ""
                    }`}
                    onClick={() => setMenu("Programming languages")}
                >
                    Programming languages
                </button>
                <button
                    className={`${menubar === "Database" ? "active" : ""}`}
                    onClick={() => setMenu("Database")}
                >
                    Database
                </button>
                <button
                    className={`${menubar === "Frameworks" ? "active" : ""}`}
                    onClick={() => setMenu("Frameworks")}
                >
                    Frameworks
                </button>
                <button
                    className={`${menubar === "Design" ? "active" : ""}`}
                    onClick={() => setMenu("Design")}
                >
                    Design
                </button>
            </div>
            <div className="logos">
                <div className="one">
                    <div className="first">
                        {logos1.map((logo, index) => (
                            <div
                                key={index}
                                className="logo"
                                style={logo.bgSize}
                            >
                                <span>{logo.name}</span>
                                <img
                                    src={logo.img}
                                    alt=""
                                    style={logo.imgSize}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="second">
                        {logos2.map((logo, index) => (
                            <div
                                key={index}
                                className="logo"
                                style={logo.bgSize}
                            >
                                <span>{logo.name}</span>
                                <img
                                    src={logo.img}
                                    alt=""
                                    style={logo.imgSize}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg">
                    <div className="main-logo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 80 100"
                            className="icon _2"
                            style={{}}
                        >
                            <path
                                fill="#4A51DD"
                                fillRule="evenodd"
                                d="M0 20v60l19.976 20V40h39.95L39.95 20z"
                                clipRule="evenodd"
                            ></path>
                            <path
                                fill="#4ED89D"
                                fillRule="evenodd"
                                d="M19.976 60h39.95V0l19.976 20v60H39.95z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div className="two">
                    <div className="third">
                        {logos3.map((logo, index) => (
                            <div
                                key={index}
                                className="logo"
                                style={logo.bgSize}
                            >
                                <span>{logo.name}</span>
                                <img
                                    src={logo.img}
                                    alt=""
                                    style={logo.imgSize}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="fourth">
                        {logos4.map((logo, index) => (
                            <div
                                key={index}
                                className="logo"
                                style={logo.bgSize}
                            >
                                <span>{logo.name}</span>
                                <img
                                    src={logo.img}
                                    alt=""
                                    style={logo.imgSize}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
