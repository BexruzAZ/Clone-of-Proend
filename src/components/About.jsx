export default function About() {
    return (
        <div className="about">
            <div className="text">
                <p className="ad">Who are we and what we do?</p>
                <h2>
                    <div className="asd">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 80 100"
                            className="icon"
                            style={{
                                width: "32px",
                                height: "32px",
                            }}
                            fill="rgba(255,255,255,0.6)"
                        >
                            <path
                                fillRule="evenodd"
                                d="M0 20v60l19.976 20V40h39.95L39.95 20z"
                                clipRule="evenodd"
                            ></path>
                            <path
                                fillRule="evenodd"
                                d="M19.976 60h39.95V0l19.976 20v60H39.95z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    About
                </h2>
                <div className="as">
                    <p className="ab">
                        We are a leading IT company specializing in the
                        development of innovative solutions and providing
                        high-quality services in the field of information
                        technology.
                    </p>
                    <a href="">
                        To learn more{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="icon"
                        >
                            <path d="M21.562 14.667 14.41 7.514l1.885-1.886 10.371 10.37-10.37 10.372-1.886-1.886 7.152-7.152H5.333v-2.666z"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="image">
                <img
                    src="https://api.proend.uz/uploads/menu/d493eaee6db3f08b3c920b819a4d3b6b.png"
                    alt=""
                />
            </div>
        </div>
    );
}
