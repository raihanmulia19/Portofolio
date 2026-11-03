import { Head, Link } from '@inertiajs/react';
import PortfolioLayout from '@/Layouts/PortfolioLayout';
import { useState, useRef } from 'react';

export default function Work({ auth }) {
    const [activeIndex, setActiveIndex] = useState(2);
    const touchStartX = useRef(null);

    const projects = [
        {
            id: 1,
            title: "Game Unity: Forest Secrets",
            description: "Dalam \"Forest Secrets\", kamu bermain sebagai penjelajah yang harus bertahan hidup di alam liar. Jelajahi hutan eksotis untuk mengumpulkan buah-buahan sambil melindungi diri dari hewan buas menggunakan sebilah pisau. Game petualangan ini dikembangkan dengan Unity Engine.",
            link: "https://youtu.be/afWrtaLL2CM?si=Y7_YrHD0H8F-J-xv",
            color1: "#1d3224",
            color2: "",
            image: "/forest-secrets.png",
        },
        {
            id: 2,
            title: "Sistem ERP PT CSA",
            description: "Sistem informasi terintegrasi (ERP) yang dikembangkan khusus untuk PT CSA, sebuah perusahaan yang bergerak di bidang perkebunan sawit. Aplikasi ini dirancang untuk mendigitalisasi alur kerja, mempermudah proses pengajuan, dan meningkatkan efisiensi operasional.",
            link: "#",
            color1: "#597e52",
            color2: "#dad8c9",
            image: "/csa-login.png", // Tambahkan path gambar di sini
        },
        {
            id: 3,
            title: "Sistem Akademik Kampus",
            description: "Sistem Informasi Akademik (SIAKAD) terpadu yang dirancang khusus untuk mendukung kelancaran administrasi perguruan tinggi di Institut Teknologi Bisnis Riau. Dibangun menggunakan kerangka kerja Laravel dan React, aplikasi ini menyediakan fitur pengelolaan data akademik secara komprehensif, mulai dari pengisian KRS daring, integrasi absensi dan nilai, hingga pembuatan laporan akademik yang terstruktur.",
            link: "#",
            color1: "#20409a",
            color2: "linear-gradient(105deg, #20409a 48%, #f4f2ee 48%)",
            image: "/itbr-login.png", // Tambahkan path gambar di sini
        },
        {
            id: 4,
            title: "Sistem RPOS",
            description: "RPOS merupakan platform POS dan manajemen toko berbasis SaaS untuk bisnis F&B dan ritel UMKM. Dikembangkan menggunakan Laravel, React, dan Inertia.js dengan arsitektur multi-tenant untuk mengelola transaksi kasir, pembayaran QRIS, produk, stok, HPP, laporan keuangan, analitik bisnis, serta operasional multi-cabang secara terintegrasi.",
            link: "https://rpos.raihan.sbs/",
            color1: "#222",
            color2: "",
            image: "/kasir-login.jpeg",
        },
        {
            id: 5,
            title: "Sistem Web Bank Sampah",
            description: "Sistem Web Bank Sampah terpadu untuk mendukung program peduli lingkungan. Dibangun dengan kerangka kerja CodeIgniter, aplikasi ini menyediakan fitur manajemen data nasabah, kalkulasi konversi nilai sampah menjadi saldo tabungan, serta jadwal operasional yang terstruktur.",
            link: "#",
            color1: "#508e61",
            color2: "",
            image: "/banksampah.png",
        }
    ];

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(deltaX) > 40) {
            if (deltaX < 0) {
                setActiveIndex((prev) => (prev + 1) % projects.length);
            } else {
                setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
            }
        }
        touchStartX.current = null;
    };

    const getPos = (index) => {
        const diff = index - activeIndex;
        // Handle wrap around so it loops infinitely in visuals if needed
        // But since we only have 5 items, we can just use the absolute difference
        // Let's implement a simple wrap-around logic
        if (diff < -2) return diff + projects.length;
        if (diff > 2) return diff - projects.length;
        return diff;
    };

    return (
        <PortfolioLayout auth={auth}>
            <Head title="Work - Muhammad Raihan" />
            
            <style dangerouslySetInnerHTML={{__html: `
                /* Work Gallery */
                .gallery{
                  max-width: 1100px;
                  margin: 0 auto;
                  padding: 40px 40px 110px;
                }
                .gallery-head{
                  display:flex;
                  justify-content:space-between;
                  align-items:flex-end;
                  gap:24px;
                  flex-wrap:wrap;
                  margin-bottom: 60px;
                }
                .gallery-eyebrow{
                  font-size:11px;
                  letter-spacing:0.18em;
                  color:var(--muted);
                  margin-bottom:12px;
                }
                .gallery-head h2{
                  font-size: clamp(34px, 4.5vw, 46px);
                  font-weight:800;
                  margin:0 0 14px;
                  letter-spacing:-0.01em;
                }
                .gallery-head p{
                  color:var(--muted);
                  font-size:15px;
                  max-width:460px;
                  margin:0;
                  line-height:1.5;
                }
                .view-more{
                  display:inline-flex;
                  align-items:center;
                  gap:8px;
                  background:var(--text);
                  color:var(--bg) !important;
                  text-decoration:none;
                  border:none;
                  border-radius:999px;
                  padding:13px 22px;
                  font-size:13px;
                  font-weight:700;
                  white-space:nowrap;
                  cursor:pointer;
                  transition: transform 0.2s ease, opacity 0.2s ease;
                }
                .view-more:hover {
                  opacity: 0.9;
                  transform: scale(1.02);
                }

                .stack{
                  position: relative;
                  height: 280px;
                  display:flex;
                  align-items:center;
                  justify-content:center;
                  margin: 0 0 64px;
                }
                .card{
                  position: absolute;
                  border-radius:16px;
                  overflow:hidden;
                  box-shadow: 0 24px 50px rgba(0,0,0,0.35);
                  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
                  cursor: pointer;
                }
                .card:hover {
                  filter: brightness(1.1);
                }
                
                /* Positional Classes for Slider */
                .card[data-pos="0"] { width: 320px; height: 240px; z-index: 3; transform: translateX(0) scale(1) translateY(0); opacity: 1; }
                .card[data-pos="-1"] { width: 200px; height: 200px; z-index: 2; transform: translateX(-170px) scale(0.95) translateY(10px); opacity: 0.85; }
                .card[data-pos="1"] { width: 200px; height: 200px; z-index: 2; transform: translateX(170px) scale(0.95) translateY(10px); opacity: 0.85; }
                .card[data-pos="-2"] { width: 150px; height: 170px; z-index: 1; transform: translateX(-280px) scale(0.9) translateY(20px); opacity: 0.55; }
                .card[data-pos="2"] { width: 150px; height: 170px; z-index: 1; transform: translateX(280px) scale(0.9) translateY(20px); opacity: 0.55; }
                
                /* Hide cards that are out of bounds (if more than 5) */
                .card[data-pos^="3"], .card[data-pos^="-3"],
                .card[data-pos^="4"], .card[data-pos^="-4"] {
                    opacity: 0;
                    pointer-events: none;
                    z-index: 0;
                    transform: translateX(0) scale(0.5);
                }

                .card-fill{ position:absolute; inset:0; }
                .card-bar{ height:22px; display:flex; align-items:center; gap:5px; padding:0 10px; position:relative; z-index:2; }
                .card-dot{ width:6px; height:6px; border-radius:50%; background:rgba(255,255,255,0.5); }

                .gallery-project{ text-align:center; min-height: 180px; }
                .gallery-project h3{
                  font-size: clamp(20px, 2.6vw, 27px);
                  font-weight:800;
                  max-width:720px;
                  margin: 0 auto 18px;
                  line-height:1.35;
                  transition: opacity 0.3s ease;
                }
                .gallery-project p{
                  color:var(--muted);
                  max-width:600px;
                  margin: 0 auto 26px;
                  font-size:14px;
                  line-height:1.65;
                  transition: opacity 0.3s ease;
                }
                .view-project{
                  font-size:13px;
                  font-weight:700;
                  border-bottom:1px solid var(--text);
                  padding-bottom:3px;
                  transition: opacity 0.2s ease;
                }
                .view-project:hover {
                  opacity: 0.7;
                }
                
                .stack-dots {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  gap: 8px;
                  margin: -36px 0 36px;
                }
                .stack-dot {
                  width: 8px;
                  height: 8px;
                  border-radius: 999px;
                  border: none;
                  padding: 0;
                  background: var(--line);
                  cursor: pointer;
                  transition: all 0.25s ease;
                }
                .stack-dot.active {
                  width: 24px;
                  background: var(--text);
                }

                @media (max-width: 768px) {
                  .gallery { padding: 28px 20px 80px; }
                  .gallery-head { margin-bottom: 36px; gap: 18px; }
                  .gallery-head h2 { font-size: 30px; margin-bottom: 10px; }
                  .gallery-head p { font-size: 14px; }
                  .stack { height: 220px; margin: 0 0 44px; }
                  .card[data-pos="0"] { width: 250px; height: 190px; transform: translateX(0) scale(1) translateY(0); }
                  .card[data-pos="-1"] { width: 170px; height: 160px; transform: translateX(-95px) scale(0.92) translateY(10px); }
                  .card[data-pos="1"] { width: 170px; height: 160px; transform: translateX(95px) scale(0.92) translateY(10px); }
                  .card[data-pos="-2"] { width: 130px; height: 135px; transform: translateX(-145px) scale(0.85) translateY(18px); opacity: 0.4; }
                  .card[data-pos="2"] { width: 130px; height: 135px; transform: translateX(145px) scale(0.85) translateY(18px); opacity: 0.4; }
                  .stack-dots { margin: -20px 0 28px; }
                  .gallery-project { min-height: auto; padding: 0 4px; }
                  .gallery-project h3 { font-size: 20px; margin-bottom: 12px; }
                  .gallery-project p { font-size: 13.5px; line-height: 1.6; margin-bottom: 20px; }
                }
                @media (max-width: 480px) {
                  .view-more { width: 100%; justify-content: center; }
                  .stack { height: 200px; }
                  .card[data-pos="0"] { width: 225px; height: 172px; }
                  .card[data-pos="-1"] { width: 150px; height: 145px; transform: translateX(-75px) scale(0.9) translateY(10px); }
                  .card[data-pos="1"] { width: 150px; height: 145px; transform: translateX(75px) scale(0.9) translateY(10px); }
                  .card[data-pos="-2"] { width: 115px; height: 120px; transform: translateX(-112px) scale(0.82) translateY(18px); opacity: 0.35; }
                  .card[data-pos="2"] { width: 115px; height: 120px; transform: translateX(112px) scale(0.82) translateY(18px); opacity: 0.35; }
                }
            `}} />

            <div className="gallery">
                <div className="gallery-head">
                    <div>
                        <div className="gallery-eyebrow">SELECTED WORK</div>
                        <h2>Work Gallery</h2>
                        <p>Kumpulan sistem, proyek digital, dan karya teknis yang pernah saya buat.</p>
                    </div>
                    <Link href="/projects" className="view-more">View More Projects</Link>
                </div>

                <div className="stack" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    {projects.map((project, index) => {
                        const pos = getPos(index);
                        return (
                            <div 
                                key={project.id} 
                                className="card" 
                                data-pos={pos}
                                onClick={() => handleCardClick(index)}
                                style={{ background: project.color1 }}
                            >
                                <div className="card-bar">
                                    <div className="card-dot"></div>
                                    <div className="card-dot"></div>
                                    <div className="card-dot"></div>
                                </div>
                                {project.image ? (
                                    <div 
                                        className="card-fill" 
                                        style={{ top: '22px' }}
                                    >
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                        />
                                    </div>
                                ) : project.color2 && (
                                    <div 
                                        className="card-fill" 
                                        style={{ 
                                            background: project.color2, 
                                            top: '22px' 
                                        }}
                                    ></div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="stack-dots">
                    {projects.map((project, idx) => (
                        <button
                            key={project.id}
                            type="button"
                            className={`stack-dot ${idx === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(idx)}
                            aria-label={`Pilih proyek ${project.title}`}
                        />
                    ))}
                </div>

                <div className="gallery-project">
                    <h3>{projects[activeIndex].title}</h3>
                    <p>{projects[activeIndex].description}</p>
                    {projects[activeIndex].link !== "#" && (
                        <a 
                            href={projects[activeIndex].link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="view-project"
                            style={{ display: 'inline-block', textDecoration: 'none', color: 'var(--text)' }}
                        >
                            {projects[activeIndex].link.includes('youtu') ? 'Tonton Video ↗' : 'Kunjungi Website ↗'}
                        </a>
                    )}
                </div>
            </div>
        </PortfolioLayout>
    );
}
