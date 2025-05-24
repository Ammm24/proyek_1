// src/components/Portofolio.js
import React from 'react';
import './Portofolio.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mobileEComplaint from '../assets/mobile-e-complaint.JPG';
import eComplaint from '../assets/e-complaint.jpg';
import newProjectImage from '../assets/E-TAYLOR.JPG';

const portofolioData = [
  {
    id: 1,
    title: 'E-Complaint Mobile',
    description: 'Aplikasi e-complaint, atau sering disebut juga aplikasi pengaduan elektronik, adalah platform digital yang dirancang untuk memfasilitasi proses pengajuan keluhan, aduan, atau masukan dari masyarakat (konsumen, warga, dll.) kepada suatu entitas (pemerintah, perusahaan, organisasi, dll.) secara online. Tujuannya adalah untuk membuat proses pengaduan menjadi lebih mudah, transparan, dan efisien dibandingkan dengan metode manual (misalnya, datang langsung, surat, atau telepon).',
    technologies: ['Golang', 'Flutter', 'CSS', 'API'],
    image: mobileEComplaint,
    githubLink: 'https://github.com/yourusername/ecommerce-app',
    liveDemo: ''
  },
  {
    id: 2,
    title: 'AYO RELIEVE',
    description: 'AYO Relieve World, website yang dibangun dengan React JS yang bertujuan untuk Berikan dampak kepada masyarakat yang membutuhkan bantuan melalui berbagai program untuk mengatasi isu pandemi, perubahan iklim, dan pemanasan global dan membantu para disabilitas.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React JS', 'API', 'BOOTSTRAP'],
    image: eComplaint,
    githubLink: 'https://github.com/AYO-RELIEVE',
    liveDemo: 'https://ayo-relieve-world.netlify.app/'
  },
  {
    id: 3,
    title: 'E-Taylor',
    description: 'E-taylor adalah platform atau aplikasi yang memfasilitasi transaksi dan interaksi antara pelanggan dan penjahit (tailor) secara digital. Tujuannya adalah untuk membawa layanan penjahitan, pembuatan pakaian custom, atau perbaikan pakaian ke ranah online, sehingga lebih mudah diakses, efisien, dan transparan bagi kedua belah pihak.',
    technologies: ['PHP', 'MySQL', 'Flutter', 'firebase', 'API'],
    image: newProjectImage,
    githubLink: 'https://github.com/yourusername/e-taylor',
    liveDemo: ''
  },
];

function Portofolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // centerMode dan centerPadding akan kita atur per breakpoint
    // Ini defaultnya, bisa tidak diatur di sini jika ingin sepenuhnya diatur di responsive
    // slidesToShow: 1, // Kita akan atur ini di responsive saja

    responsive: [
      {
        breakpoint: 1024, // Untuk layar di bawah 1024px (desktop kecil/tablet besar)
        settings: {
          slidesToShow: 2, // Tampilkan 2 card
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false, // Nonaktifkan center mode jika menampilkan lebih dari 1 slide
          // Jika Anda ingin 2 slide terlihat tapi ada bagian dari slide ketiga
          // Anda bisa pakai slidesToShow: 2, centerMode: true, centerPadding: '20px'
          // Tapi itu akan membuat card di tengah sedikit lebih kecil.
          // Untuk saat ini, kita akan fokus pada 2 slide sejajar.
        }
      },
      {
        breakpoint: 768, // Untuk layar di bawah 768px (tablet)
        settings: {
          slidesToShow: 1, // Tampilkan 1 card
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true, // Kembali aktifkan center mode untuk 1 slide
          centerPadding: '50px', // Sesuaikan padding agar card di sampingnya terlihat cukup
          // Ini sangat penting: padding ini di sisi kiri dan kanan dari card tengah
          // sehingga kita bisa melihat sebagian dari card sebelumnya/berikutnya.
        }
      },
      {
        breakpoint: 480, // Untuk layar di bawah 480px (mobile)
        settings: {
          slidesToShow: 1, // Hanya 1 card di mobile
          slidesToScroll: 1,
          centerMode: true, // Tetap aktifkan center mode
          centerPadding: '30px', // Padding lebih kecil lagi untuk mobile
        }
      }
    ]
  };

  return (
    <section id="portofolio" className="portofolio-section">
      <div className="container">
        <h2>Karya Portofolio Saya</h2>
        <div className="portofolio-carousel-container">
          <Slider {...settings}>
            {portofolioData.map(item => (
              <div key={item.id} className="portofolio-card-wrapper">
                <div className="portofolio-card">
                  {item.image && <img src={item.image} alt={item.title} className="project-image" />}
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="technologies">
                    {item.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="portofolio-links">
                    {item.githubLink && <a href={item.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {item.liveDemo && <a href={item.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Portofolio;