import { useState } from "react";

export default function Portfolio() {
    const [menu, setMenu] = useState("All");

    const [all1, setAll1] = useState([
        {
            name: "New Uzbekistan University",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/cf1469a998ee6636f571f71adb18e443.png",
        },
        {
            name: "Yakkasaroy District Administration",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/4c22774147836d6b32eb8ede1987f033.png",
        },
        {
            name: "The Administration of Yunusabad District...",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/b1f60dba7b4804f16c4e085dc4d7820e.jpg",
        },
        {
            name: "National Institute of Pedagogical Mastery...",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/portfolio-b281c526304d645dbf2a638ecb4965e4.png",
        },
        {
            name: "Ochiq muloqot",
            type: "Mobile applications",
            img: "https://api.proend.uz/uploads/portfolio/8c4a25b5bd8473525abf0c68839f8081.png",
        },
    ]);
    const [all2, setAll2] = useState([
        {
            name: "MDIS Tourism",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/07dbcfaa94ac861bc1290144e28b02bc.png",
        },
        {
            name: "Green university",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/5069de4a65a7afc756eb6e17810d041e.png",
        },
        {
            name: "Oxford international school",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/portfolio-024b35053ee4878b49faa1f2ba626927.png",
        },
        {
            name: "Diplomat university",
            type: "Web applications",
            img: "https://api.proend.uz/uploads/portfolio/portfolio-abda25c7778bcb56a43cc13f6adda039.png",
        },
        {
            name: "ois web app",
            type: "Mobile applications",
            img: "https://api.proend.uz/uploads/portfolio/919ea62e4a1d03459605dad04b58e727.png",
        },
    ]);

    const [websites1, setWebsites1] = useState([
        {
            name: "New Uzbekistan University",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/cf1469a998ee6636f571f71adb18e443.png",
        },
        {
            name: "Yakkasaroy District Administration",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/4c22774147836d6b32eb8ede1987f033.png",
        },
        {
            name: "The Administration of Yunusabad District...",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/b1f60dba7b4804f16c4e085dc4d7820e.jpg",
        },
        {
            name: "National Institute of Pedagogical Mastery...",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/portfolio-b281c526304d645dbf2a638ecb4965e4.png",
        },
        {
            name: "MDIS Tourism",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/07dbcfaa94ac861bc1290144e28b02bc.png",
        },
    ]);
    const [websites2, setWebsites2] = useState([
        {
            name: "Green university",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/5069de4a65a7afc756eb6e17810d041e.png",
        },
        {
            name: "fast education site",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/2bcfaa8db176cd484a8546ab406165d7.png",
        },
        {
            name: "taxi 1313",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/8b7d19604bf729e7528a8271bdc3f9c0.png",
        },
        {
            name: "Oxford international school",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/portfolio-024b35053ee4878b49faa1f2ba626927.png",
        },
        {
            name: "sherwood resort",
            type: "Web sites",
            img: "https://api.proend.uz/uploads/portfolio/a63b26583ee7f687d7de798d07b1d26b.png",
        },
    ]);

    const [webApp, setWebApp] = useState([
        {
            name: "Diplomat university",
            type: "Web applications",
            img: "https://api.proend.uz/uploads/portfolio/portfolio-abda25c7778bcb56a43cc13f6adda039.png",
        },
        {
            name: "ois web app",
            type: "Web applications",
            img: "https://api.proend.uz/uploads/portfolio/919ea62e4a1d03459605dad04b58e727.png",
        },
        {
            name: "fast education erp",
            type: "Web applications",
            img: "https://api.proend.uz/uploads/portfolio/portfolio-942a194e01bbd712596b35da7eff2d1e.png",
        },
    ]);

    const [mobileApp1, setMobile1] = useState([
        {
            name: "Ochiq muloqot",
            type: "Mobile applications",
            img: "https://api.proend.uz/uploads/portfolio/8c4a25b5bd8473525abf0c68839f8081.png",
        },
        {
            name: "OIS Students app",
            type: "Mobile applications",
            img: "https://api.proend.uz/uploads/portfolio/42dca18d6e582073ece7c31d10d71043.jpg",
        },
        {
            name: "OIS teachers app",
            type: "Mobile applications",
            img: "https://api.proend.uz/uploads/portfolio/cfb8dc5ce8aa432488ecd39efc044a64.jpg",
        },
        {
            name: "fast education Students app",
            type: "Mobile applications",
            img: "https://api.proend.uz/uploads/portfolio/feaffff8d6b246c06873ac1e905a049a.png",
        },
        {
            name: "fast education teachers app",
            type: "Mobile applications",
            img: "https://api.proend.uz/uploads/portfolio/5b40abd3aa6f232129046535be5ef1d2.png",
        },
    ]);

    const [mobileApp2, setMobile2] = useState([
        {
            name: "meyfu universal",
            type: "Mobile applications",
            img: "https://api.proend.uz/uploads/portfolio/dafd4533e6b30e106c985aab60f08116.png",
        },
    ]);

    const [tgBots, setTGBots] = useState([
        {
            name: "mdis telegram bot for applicants",
            type: "Telegram bots",
            img: "https://api.proend.uz/uploads/portfolio/dafd4533e6b30e106c985aab60f08116.png",
        },
    ]);

    return (
        <div className="portfolio">
            <p className="ad">WHAT HAVE WE SUCCESSFULLY ACHIEVED ?</p>
            <h2>
                <div className="portfolio-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="icon"
                        style={{ width: "32px", height: "32px" }}
                        fill="rgba(255,255,255, 0.6)"
                    >
                        <path d="M20 9V5H4v4zm0 2H4v8h16zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m2 9h3v5H5zm0-6h2v2H5zm4 0h2v2H9z"></path>
                    </svg>
                </div>
                Portfolio
            </h2>
            <div className="performance-menu">
                <button
                    className={`${menu === "All" ? "active" : ""}`}
                    onClick={() => setMenu("All")}
                >
                    All
                </button>
                <button
                    className={`${menu === "Web sites" ? "active" : ""}`}
                    onClick={() => setMenu("Web sites")}
                >
                    Web sites
                </button>
                <button
                    className={`${menu === "Web applications" ? "active" : ""}`}
                    onClick={() => setMenu("Web applications")}
                >
                    Web applications
                </button>
                <button
                    className={`${
                        menu === "Mobile applications" ? "active" : ""
                    }`}
                    onClick={() => setMenu("Mobile applications")}
                >
                    Mobile applications
                </button>
                <button
                    className={`${menu === "Telegram bots" ? "active" : ""}`}
                    onClick={() => setMenu("Telegram bots")}
                >
                    Telegram bots
                </button>
            </div>
            <div className="projects">
                <div className="first-row">
                    {menu === "All"
                        ? all1.map((prp, index) => (
                              <div key={index}>
                                  <h1>{prp.name}</h1>
                                  <span>{prp.type}</span>
                                  <img src={prp.img} alt="" />
                                  <a href="">
                                      View project
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 32 32"
                                          width={"24px"}
                                          height={"24px"}
                                          fill="#fff"
                                          className="icon"
                                          style={{}}
                                      >
                                          <path d="M21.562 14.667 14.41 7.514l1.885-1.886 10.371 10.37-10.37 10.372-1.886-1.886 7.152-7.152H5.333v-2.666z"></path>
                                      </svg>
                                  </a>
                              </div>
                          ))
                        : menu === "Web sites"
                        ? websites1.map((e, index) => (
                              <div key={index}>
                                  <h1>{e.name}</h1>
                                  <span>{e.type}</span>
                                  <img src={e.img} alt="" />
                                  <a href="">
                                      View project
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 32 32"
                                          width={"24px"}
                                          height={"24px"}
                                          fill="#fff"
                                          className="icon"
                                          style={{}}
                                      >
                                          <path d="M21.562 14.667 14.41 7.514l1.885-1.886 10.371 10.37-10.37 10.372-1.886-1.886 7.152-7.152H5.333v-2.666z"></path>
                                      </svg>
                                  </a>
                              </div>
                          ))
                        : menu === "Web applications"
                        ? webApp.map((e, index) => (
                              <div key={index}>
                                  <h1>{e.name}</h1>
                                  <span>{e.type}</span>
                                  <img src={e.img} alt="" />
                                  <a href="">
                                      View project
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 32 32"
                                          width={"24px"}
                                          height={"24px"}
                                          fill="#fff"
                                          className="icon"
                                          style={{}}
                                      >
                                          <path d="M21.562 14.667 14.41 7.514l1.885-1.886 10.371 10.37-10.37 10.372-1.886-1.886 7.152-7.152H5.333v-2.666z"></path>
                                      </svg>
                                  </a>
                              </div>
                          ))
                        : menu === "Mobile applications"
                        ? mobileApp1.map((e, index) => (
                              <div key={index}>
                                  <h1>{e.name}</h1>
                                  <span>{e.type}</span>
                                  <img src={e.img} alt="" />
                                  <a href="">
                                      View project
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 32 32"
                                          width={"24px"}
                                          height={"24px"}
                                          fill="#fff"
                                          className="icon"
                                          style={{}}
                                      >
                                          <path d="M21.562 14.667 14.41 7.514l1.885-1.886 10.371 10.37-10.37 10.372-1.886-1.886 7.152-7.152H5.333v-2.666z"></path>
                                      </svg>
                                  </a>
                              </div>
                          ))
                        : menu === "Telegram bots"
                        ? tgBots.map((e, index) => (
                              <div key={index}>
                                  <h1>{e.name}</h1>
                                  <span>{e.type}</span>
                                  <img src={e.img} alt="" />
                                  <a href="">
                                      View project
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 32 32"
                                          width={"24px"}
                                          height={"24px"}
                                          fill="#fff"
                                          className="icon"
                                          style={{}}
                                      >
                                          <path d="M21.562 14.667 14.41 7.514l1.885-1.886 10.371 10.37-10.37 10.372-1.886-1.886 7.152-7.152H5.333v-2.666z"></path>
                                      </svg>
                                  </a>
                              </div>
                          ))
                        : ""}
                </div>
                <div className="second-row">
                    {menu == "All"
                        ? all2.map((prp, index) => (
                              <div key={index}>
                                  <h1>{prp.name}</h1>
                                  <span>{prp.type}</span>
                                  <img src={prp.img} alt="" />
                                  <a href="">
                                      View project
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 32 32"
                                          width={"24px"}
                                          height={"24px"}
                                          fill="#fff"
                                          className="icon"
                                          style={{}}
                                      >
                                          <path d="M21.562 14.667 14.41 7.514l1.885-1.886 10.371 10.37-10.37 10.372-1.886-1.886 7.152-7.152H5.333v-2.666z"></path>
                                      </svg>
                                  </a>
                              </div>
                          ))
                        : menu === "Web sites"
                        ? websites2.map((e, index) => (
                              <div key={index}>
                                  <h1>{e.name}</h1>
                                  <span>{e.type}</span>
                                  <img src={e.img} alt="" />
                                  <a href="">
                                      View project
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 32 32"
                                          width={"24px"}
                                          height={"24px"}
                                          fill="#fff"
                                          className="icon"
                                          style={{}}
                                      >
                                          <path d="M21.562 14.667 14.41 7.514l1.885-1.886 10.371 10.37-10.37 10.372-1.886-1.886 7.152-7.152H5.333v-2.666z"></path>
                                      </svg>
                                  </a>
                              </div>
                          ))
                        : menu === "Mobile applications"
                        ? mobileApp2.map((e, index) => (
                              <div key={index}>
                                  <h1>{e.name}</h1>
                                  <span>{e.type}</span>
                                  <img src={e.img} alt="" />
                                  <a href="">
                                      View project
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 32 32"
                                          width={"24px"}
                                          height={"24px"}
                                          fill="#fff"
                                          className="icon"
                                          style={{}}
                                      >
                                          <path d="M21.562 14.667 14.41 7.514l1.885-1.886 10.371 10.37-10.37 10.372-1.886-1.886 7.152-7.152H5.333v-2.666z"></path>
                                      </svg>
                                  </a>
                              </div>
                          ))
                        : ""}
                </div>
            </div>
        </div>
    );
}
