import React, { useState } from "react";

export default function Review() {
  const carusel = [
    {
      img: "https://api.proend.uz/uploads/reviews/95a44ba2e975f61e529ea3ed54acbc7d.png",
      text: `LLC 'PROEND-TEAM' provided direct assistance in developing the official website for the Singapore Management Institute in Tashkent. Additionally, in February 2023, we jointly developed an interactive Telegram bot (<a href='https://t.me/mdistofficial_bot' rel='noopener noreferrer' target='_blank'>https://t.me/mdistofficial_bot</a>) to facilitate applicants. During the programming process, there were no disagreements, and the project was delivered on time.`,
      director:
        "https://api.proend.uz/uploads/reviews/850ec47fbe562a99ec1189b0b7190415.jpg",
      name: "Mamatkulov Ilkhom Abdurashidovich",
      who: "Rector of Management Development Institute of Singapore in Tashkent (MDIS)",
    },
    {
      img: "https://api.proend.uz/uploads/reviews/b181549c670ea014b3a8bcb1f96e1c81.svg",
      text: `During the update of the official website of the A. Avloni National Institute of Pedagogical Mastery (<a href="https://avloniy.uz/" rel="noopener noreferrer" target="_blank">https://avloniy.uz/</a>), collaboration with LLC ‘PROEND TEAM’ was established. They developed a new site design, created various sections, and built the database. ‘PROEND TEAM’ launched a user-friendly and modern website in a short timeframe. The institute’s management expressed their gratitude and hopes for continued collaboration in the future.`,
      director:
        "https://api.proend.uz/uploads/reviews/5d2db4984e5d4632dee857f174b752b0.jpg",
      name: "Ismailov Abduvali Abdumalikovich ",
      who: "Rector of A. Avloni National Institute of Pedagogical Mastery",
    },
    {
      img: "https://api.proend.uz/uploads/reviews/reviews-69458dcc89acbafe2d9be9f095462cd6.svg",
      text: `"LLC ‘PROEND-TEAM’ provided significant assistance in developing the online platform for accepting applicants for DIPLOMAT UNIVERSITY. During the programming process, there were no disagreements, and the project was delivered on time."`,
      director:
        "https://api.proend.uz/uploads/reviews/reviews-e9d118bb9e2061d2a6b9ae4ef008c269.png",
      name: "Maxmudov Elyor Azimovich ",
      who: "Rector of Diplomat University",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carusel.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carusel.length) % carusel.length);
  };

  const cardCount = carusel.length;

  // Current va keyingi indexni hisoblash (circular)
  const getIndex = (i) => (i + cardCount) % cardCount;

  return (
    <section className="review">
      <p className="name">What do they say about us ?</p>
      <h1>Reviews</h1>
      <div className="carusell">
        <div
          className="carusel"
          style={{
            display: "flex",
            gap: "30px",
            width: "calc(776px * 3 + 30px * 2)", // 3 ta karta joyi (chunki sikl uchun 1 ortiqcha karta kerak)
            transform: `translateX(-${currentIndex * (776 + 30)}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {/* 3 ta karta - 2 ko'rsatiladi, 1 ortiqcha sikl uchun */}
          {[...carusel, carusel[0]].map((item, index) => (
            <div className="review-card" key={index} style={{ flexShrink: 0, width: "776px" }}>
              <div className="review-header">
                <img src={item.img} alt="company logo" className="company-logo" />
              </div>
              <div className="review-text" dangerouslySetInnerHTML={{ __html: item.text }} />
              <div className="review-director">
                <img src={item.director} alt={item.name} className="director-photo" />
                <div className="director-info">
                  <p className="director-name">{item.name}</p>
                  <p className="director-who">{item.who}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btns">
          <button onClick={prevSlide} aria-label="Previous review">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="icon"
              style={{ width: "24px", height: "24px" }}
              fill="#fff"
            >
              <path d="m10.438 17.334 7.152 7.151-1.885 1.886-10.371-10.37 10.37-10.372 1.886 1.886-7.152 7.152h16.229v2.667z"></path>
            </svg>
          </button>
          <button onClick={nextSlide} aria-label="Next review">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="icon"
              style={{ width: "24px", height: "24px" }}
              fill="#fff"
            >
              <path d="M21.562 14.667 14.41 7.514l1.885-1.886 10.371 10.37-10.37 10.372-1.886-1.886 7.152-7.152H5.333v-2.666z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
