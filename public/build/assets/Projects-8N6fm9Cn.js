import{j as a,H as o}from"./app-VmLk_eGs.js";import{P as l}from"./PortfolioLayout-Dgo-ikBX.js";function d({auth:i}){const n=[{id:"01",title:"Game Unity: Forest Secrets",description:'Dalam "Forest Secrets", kamu bermain sebagai penjelajah yang harus bertahan hidup di alam liar. Jelajahi hutan eksotis untuk mengumpulkan buah-buahan sambil melindungi diri dari hewan buas menggunakan sebilah pisau. Game petualangan ini dikembangkan dengan Unity Engine.',tech:"UNITY C#",link:"https://youtu.be/afWrtaLL2CM?si=Y7_YrHD0H8F-J-xv",icons:["unity/unity-original.svg","csharp/csharp-original.svg"]},{id:"02",title:"Sistem ERP PT CSA",description:"Sistem informasi terintegrasi (ERP) yang dikembangkan khusus untuk PT CSA, sebuah perusahaan yang bergerak di bidang perkebunan sawit. Aplikasi ini dirancang untuk mendigitalisasi alur kerja, mempermudah proses pengajuan (rekuisisi), dan meningkatkan efisiensi operasional.",tech:"LARAVEL REACT.JS",link:"#",icons:["laravel/laravel-original.svg","react/react-original.svg","php/php-original.svg","mysql/mysql-original.svg"]},{id:"03",title:"Sistem Akademik Kampus",description:"Sistem Informasi Akademik (SIAKAD) terpadu yang dirancang khusus untuk mendukung kelancaran administrasi perguruan tinggi di Institut Teknologi Bisnis Riau. Dibangun menggunakan kerangka kerja Laravel dan React, aplikasi ini menyediakan fitur pengelolaan data akademik secara komprehensif, mulai dari pengisian KRS daring, integrasi absensi dan nilai, hingga pembuatan laporan akademik yang terstruktur.",tech:"LARAVEL INERTIA.JS REACT",link:"#",icons:["laravel/laravel-original.svg","react/react-original.svg","php/php-original.svg","mysql/mysql-original.svg"]},{id:"04",title:"Sistem RPOS",description:"RPOS merupakan platform POS dan manajemen toko berbasis SaaS untuk bisnis F&B dan ritel UMKM. Dikembangkan menggunakan Laravel, React, dan Inertia.js dengan arsitektur multi-tenant untuk mengelola transaksi kasir, pembayaran QRIS, produk, stok, HPP, laporan keuangan, analitik bisnis, serta operasional multi-cabang secara terintegrasi.",tech:"LARAVEL REACT INERTIA",link:"https://rpos.raihan.sbs/",icons:["laravel/laravel-original.svg","react/react-original.svg","tailwindcss/tailwindcss-original.svg","mysql/mysql-original.svg"]},{id:"05",title:"Sistem Web Bank Sampah",description:"Sistem Web Bank Sampah terpadu untuk mendukung program peduli lingkungan. Dibangun dengan kerangka kerja CodeIgniter, aplikasi ini menyediakan fitur manajemen data nasabah, kalkulasi konversi nilai sampah menjadi saldo tabungan, serta jadwal operasional yang terstruktur.",tech:"CODEIGNITER 3 & MYSQL",link:"#",icons:["codeigniter/codeigniter-plain.svg","php/php-original.svg","mysql/mysql-original.svg"]}];return a.jsxs(l,{auth:i,children:[a.jsx(o,{title:"Technical Projects - Muhammad Raihan"}),a.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .archive-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 80px 40px 120px;
                }
                .archive-header {
                    margin-bottom: 60px;
                }
                .archive-eyebrow {
                    font-size: 11px;
                    letter-spacing: 0.2em;
                    color: var(--muted);
                    text-transform: uppercase;
                    margin-bottom: 12px;
                    font-weight: 600;
                }
                .archive-title {
                    font-size: clamp(36px, 5vw, 54px);
                    font-weight: 800;
                    color: var(--text);
                    margin: 0 0 16px;
                    letter-spacing: -0.02em;
                    display: flex;
                    align-items: center;
                }
                .archive-title .cursor {
                    font-weight: 300;
                    color: var(--muted);
                    margin-left: 4px;
                    animation: blink 1s step-end infinite;
                }
                @keyframes blink {
                    50% { opacity: 0; }
                }
                .archive-subtitle {
                    font-size: 15px;
                    color: var(--muted);
                    max-width: 600px;
                    line-height: 1.6;
                }

                .project-list {
                    border-top: 1px solid var(--line);
                }
                .project-row {
                    display: grid;
                    grid-template-columns: 60px 1fr 40px;
                    gap: 20px;
                    padding: 40px 0;
                    border-bottom: 1px solid var(--line);
                    transition: all 0.3s ease;
                }
                .project-row:hover {
                    background: rgba(255, 255, 255, 0.02);
                }
                .project-num {
                    font-size: 14px;
                    color: var(--muted);
                    font-family: monospace;
                    padding-top: 4px;
                }
                .project-content {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .project-content h3 {
                    font-size: 18px;
                    font-weight: 700;
                    color: var(--text);
                    margin: 0;
                    line-height: 1.4;
                }
                .project-content p {
                    font-size: 14px;
                    color: var(--muted);
                    line-height: 1.6;
                    margin: 0;
                }
                .project-tech-label {
                    font-size: 10px;
                    letter-spacing: 0.15em;
                    color: var(--muted);
                    text-transform: uppercase;
                    margin-top: 8px;
                }
                .project-icons {
                    display: flex;
                    gap: 12px;
                    margin-top: 4px;
                }
                .project-icon-box {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .project-icon-box img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
                .project-link {
                    color: var(--muted);
                    display: flex;
                    justify-content: flex-end;
                    padding-top: 4px;
                    transition: color 0.2s ease;
                }
                .project-row:hover .project-link {
                    color: var(--text);
                }
                .project-link svg {
                    width: 18px;
                    height: 18px;
                }

                @media (max-width: 768px) {
                    .project-row {
                        grid-template-columns: 40px 1fr;
                        padding: 30px 0;
                    }
                    .project-link {
                        display: none;
                    }
                }
            `}}),a.jsxs("div",{className:"archive-container",children:[a.jsxs("div",{className:"archive-header",children:[a.jsx("div",{className:"archive-eyebrow",children:"ARCHIVE"}),a.jsxs("h1",{className:"archive-title",children:["Technical Projects",a.jsx("span",{className:"cursor",children:"|"})]}),a.jsx("p",{className:"archive-subtitle",children:"A complete collection of my technical work, systems, and digital projects."})]}),a.jsx("div",{className:"project-list",children:n.map((e,t)=>a.jsxs("a",{href:e.link,className:"project-row",style:{textDecoration:"none"},children:[a.jsx("div",{className:"project-num",children:e.id}),a.jsxs("div",{className:"project-content",children:[a.jsx("h3",{children:e.title}),a.jsx("p",{children:e.description}),a.jsx("div",{className:"project-tech-label",children:e.tech}),a.jsx("div",{className:"project-icons",children:e.icons.map((r,s)=>a.jsx("div",{className:"project-icon-box",children:a.jsx("img",{src:`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${r}`,alt:"tech icon"})},s))})]}),a.jsx("div",{className:"project-link",children:a.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})]},t))})]})]})}export{d as default};
