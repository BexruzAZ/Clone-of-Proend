export default function Clients() {
    const img = [
        {
            img: "https://api.proend.uz/uploads/partners/d022dd82ffd8c8d4cf9a772efae17dbe.svg",
            link: "https://newuu.uz/",
            name: "New Uzbekistan University",
        },
        {
            img: "https://api.proend.uz/uploads/partners/b0620639e606057e5ee30cd6d48d0ec4.svg",
            link: "https://yakkasaroy.gov.uz/",
            name: "Yakkasaroy Hokimyati",
        },
        {
            img: "https://api.proend.uz/uploads/partners/6d72a24f934343c1b9b6848bd5ddd5f6.svg",
            link: "https://yunusobodtumani.uz/",
            name: "Toshkent shahar Yunusobod hokimligi",
        },
        {
            img: "https://api.proend.uz/uploads/partners/2c88f2f4a847c282612c0e1ee9d779d9.png",
            link: "https://chamber.uz/oz",
            name: "O‘zbekiston Savdo-sanoat palatasi",
        },
        {
            img: "http://api.proend.uz/uploads/partners/partners-55ca4c2fb81babcce402de915e1ac4d3.png",
            link: "https://www.mdis.uz/",
            name: "MDIS",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-aca20d9767a53132988f4d5f94f3793d.png",
            link: "https://apply.diplomat.university/",
            name: "Diplomat University",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-7c6c925adaf1b9fd75f23e203d1d93c4.png",
            link: "https://greenuniversity.uz/",
            name: "Green University",
        },
        {
            img: "https://api.proend.uz/uploads/partners/bee32c4d5a233eba3076c6f85023d4bc.svg",
            link: "https://avloniy.uz/",
            name: "Avloniy",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-02c957eb540142fb7365226c3d08e616.png",
            link: "https://fasteducation.uz/",
            name: "Fast Education",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-3098504768dcd0ba1cc420cc58587f45.png",
            link: "https://oischool.uz/",
            name: "OIS",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-1cdaf767fb4cff2b691da60b28eeeacb.png",
            link: "",
            name: "Advicmode",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-3cebe06f9161a492b55c4a9021e0345e.png",
            link: "",
            name: "Miosta H",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-1c1270e9b54a86e450f172c7c4076ab7.png",
            link: "",
            name: "Taxi1313",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-335c1c48db94c3a804264b37a02b9734.png",
            link: "",
            name: "Mixnature",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-d049e8566853a7d31654a07b62d73557.png",
            link: "",
            name: "Hall of skills",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-69629604906ae4f5acd44beaefcb10f8.png",
            link: "",
            name: "Stroytech",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-fd1b1d0288735d565d7823835972eef1.png",
            link: "",
            name: "Sherwood Resort",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-a2bd1ef7879c237799199182a003c945.png",
            link: "",
            name: "Lead Managment",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-ae88dfe24979ff035d6d1c7a77cfd0c6.png",
            link: "",
            name: "Dilbar Un",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-87dbbf20ef65c0b933871ece71f2a41d.png",
            link: "",
            name: "Chintech Logistics",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-a6f9ebd5309c25d744ac42e9519e7cf6.png",
            link: "",
            name: "Ferman kimya",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-a84f324fab163f0ad38e3f67496ec9b0.png",
            link: "",
            name: "Hilmar Development",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-d29d8079bfe0b976b789dac46d59a399.png",
            link: "",
            name: "Magical Life",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-7c2afefcd7ccf483da4bfca854041665.png",
            link: "",
            name: "Saforia",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-7e517cc59d4c7e13e8a236a19fb573e5.png",
            link: "",
            name: "Energizer",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-9adaf0ea2c5b9a3ed817df1c3fc05fea.png",
            link: "",
            name: "Dori Darmon",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-0eaa2bd2abbe8753280070add3408445.png",
            link: "",
            name: "Turk Buxoro Eku Markazi",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-2aecb0e3f665a71ef90b5dbab70b859c.svg",
            link: "",
            name: "Sothis Research",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-bc212154b4c99325bb3fd72a0edef725.svg",
            link: "",
            name: "Hitechlab",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-b7e0cb59c01d3695dc2974487c1660ac.png",
            link: "",
            name: "Fayz Oil Imports",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-572f9028a1a5926e63003c9b36029cb3.png",
            link: "",
            name: "Maped",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-762ea466cbc03b85b56aac9bb5b21f1d.png",
            link: "",
            name: "Fokus Events",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-425ee098c3dd8fc3d372ce574c124c68.png",
            link: "",
            name: "Intellektual mulk markazi davlat muassasi",
        },
        {
            img: "https://api.proend.uz/uploads/partners/partners-6874ea0a092f0719df1c7e6f01571b58.png",
            link: "",
            name: "Meyfu Universal",
        },
        {
            img: "https://api.proend.uz/uploads/partners/3a32bc040156873f4930923f88fa7abf.svg",
            link: "https://it-park.uz/",
            name: "IT-PARK",
        },
        {
            img: "https://api.proend.uz/uploads/partners/504788e982a668df9be12a9a6c540c87.svg",
            link: "https://fayzconstruction.com/",
            name: "Fayz Construction Company",
        },
    ];

    return (
        <section className="clients">
            <p className="name">They trusted us</p>
            <h1>Our clients</h1>
            <div className="clients-logos">
                {img.map((e, eindex) =>
                    e.link ? (
                        <a
                            href={e.link}
                            key={eindex}
                            className="logo-c"
                        >
                            <img src={e.img} alt="" />
                            <span>{e.name}</span>
                        </a>
                    ) : (
                        <p
                        key={eindex}
                        className="logo-c"
                        >
                            <img src={e.img} alt="" />
                            <span>{e.name}</span>
                        </p>
                    )
                )}
            </div>
        </section>
    );
}
