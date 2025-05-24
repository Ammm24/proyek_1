import React, { useState, useEffect } from 'react';
import './About.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import skillHtml from '../assets/FOTO-1.JPG';
import skillCss from '../assets/FOTO-2.JPG';
import skillReact from '../assets/FOTO-3.JPG';
import skillLaravel from '../assets/WhatsApp Image 2025-05-23 at 17.31.40.jpeg';

function About() {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const fullHiText = "HI EVERYONE !!!";
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, fullHiText.length * 100 + 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [fullHiText]);

  const renderAnimatedText = () => {
    const parts = fullHiText.split(" ");
    let delay = 0;
    return parts.map((word, wordIndex) => (
      <React.Fragment key={wordIndex}>
        {word.split("").map((letter, letterIndex) => (
          <span key={`${wordIndex}-${letterIndex}`} className="animated-letter" style={{ animationDelay: `${delay++ * 0.1}s` }}>
            {letter}
          </span>
        ))}
        {wordIndex < parts.length - 1 && <span>&nbsp;</span>}
      </React.Fragment>
    ));
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>Tentang Saya</h2>
        <div className="about-content">
          <div className="about-text-column">
            <p className="about-paragraph">
              {animate ? renderAnimatedText() : <span>{fullHiText}</span>}
              Perkenalkan nama saya MUHAMMAD ILHAM, saya seorang programmer HTML, CSS, REACT.JS, Laravel, dan Mobile khususnya Flutter.
              Sebagai lulusan S1 Teknik Informatika pada pengembangan web dan mobile, saya terus mengikuti perkembangan teknologi terkini untuk menghadirkan solusi yang relevan dan kompetitif. Dengan keahlian yang solid dalam beberapa framework dan bahasa pemrograman pada front-end dan back-end, saya siap berkontribusi dalam menciptakan produk digital yang inovatif dan sesuai dengan kebutuhan pasar.
            </p>
          </div>

          <div className="about-image-column">
            <div className="skills-carousel">
              <Slider {...settings}>
                <div>
                  <img src={skillHtml} alt="FOTO Muhammad Ilham" />
                </div>
                <div>
                  <img src={skillCss} alt="FOTO Muhammad Ilham" />
                </div>
                <div>
                  <img src={skillReact} alt="FOTO Muhammad Ilham" />
                </div>
                <div>
                  <img src={skillLaravel} alt="FOTO Muhammad Ilham" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;