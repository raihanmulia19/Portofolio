import{r as p,j as a,H as c,L as g}from"./app-GvRvVnL1.js";import{P as m}from"./PortfolioLayout-Dyd3WCgu.js";function u({auth:r}){const[n,s]=p.useState(2),i=[{id:1,title:"Game Unity: Forest Secrets",description:'Dalam "Forest Secrets", kamu bermain sebagai penjelajah yang harus bertahan hidup di alam liar. Jelajahi hutan eksotis untuk mengumpulkan buah-buahan sambil melindungi diri dari hewan buas menggunakan sebilah pisau. Game petualangan ini dikembangkan dengan Unity Engine.',link:"https://youtu.be/afWrtaLL2CM?si=Y7_YrHD0H8F-J-xv",color1:"#1d3224",color2:"",image:"/forest-secrets.png"},{id:2,title:"Sistem ERP PT CSA",description:"Sistem informasi terintegrasi (ERP) yang dikembangkan khusus untuk PT CSA, sebuah perusahaan yang bergerak di bidang perkebunan sawit. Aplikasi ini dirancang untuk mendigitalisasi alur kerja, mempermudah proses pengajuan, dan meningkatkan efisiensi operasional.",link:"#",color1:"#597e52",color2:"#dad8c9",image:"/csa-login.png"},{id:3,title:"Sistem Akademik Kampus",description:"Sistem Informasi Akademik (SIAKAD) terpadu yang dirancang khusus untuk mendukung kelancaran administrasi perguruan tinggi di Institut Teknologi Bisnis Riau. Dibangun menggunakan kerangka kerja Laravel dan React, aplikasi ini menyediakan fitur pengelolaan data akademik secara komprehensif, mulai dari pengisian KRS daring, integrasi absensi dan nilai, hingga pembuatan laporan akademik yang terstruktur.",link:"#",color1:"#20409a",color2:"linear-gradient(105deg, #20409a 48%, #f4f2ee 48%)",image:"/itbr-login.png"},{id:4,title:"Sistem RPOS",description:"RPOS merupakan platform POS dan manajemen toko berbasis SaaS untuk bisnis F&B dan ritel UMKM. Dikembangkan menggunakan Laravel, React, dan Inertia.js dengan arsitektur multi-tenant untuk mengelola transaksi kasir, pembayaran QRIS, produk, stok, HPP, laporan keuangan, analitik bisnis, serta operasional multi-cabang secara terintegrasi.",link:"https://rpos.raihan.sbs/",color1:"#222",color2:"",image:"/kasir-login.jpeg"},{id:5,title:"Sistem Web Bank Sampah",description:"Sistem Web Bank Sampah terpadu untuk mendukung program peduli lingkungan. Dibangun dengan kerangka kerja CodeIgniter, aplikasi ini menyediakan fitur manajemen data nasabah, kalkulasi konversi nilai sampah menjadi saldo tabungan, serta jadwal operasional yang terstruktur.",link:"#",color1:"#508e61",color2:"",image:"/banksampah.png"}],o=e=>{s(e)},l=e=>{const t=e-n;return t<-2?t+i.length:t>2?t-i.length:t};return a.jsxs(m,{auth:r,children:[a.jsx(c,{title:"Work - Muhammad Raihan"}),a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
                
                @media (max-width: 768px) {
                  .stack { transform: scale(0.8); height: 220px; }
                  .gallery-project { min-height: 220px; }
                }
                @media (max-width: 480px) {
                  .stack { transform: scale(0.6); height: 180px; }
                }
            `}}),a.jsxs("div",{className:"gallery",children:[a.jsxs("div",{className:"gallery-head",children:[a.jsxs("div",{children:[a.jsx("div",{className:"gallery-eyebrow",children:"SELECTED WORK"}),a.jsx("h2",{children:"Work Gallery"}),a.jsx("p",{children:"Kumpulan sistem, proyek digital, dan karya teknis yang pernah saya buat."})]}),a.jsx(g,{href:"/projects",className:"view-more",children:"View More Projects"})]}),a.jsx("div",{className:"stack",children:i.map((e,t)=>{const d=l(t);return a.jsxs("div",{className:"card","data-pos":d,onClick:()=>o(t),style:{background:e.color1},children:[a.jsxs("div",{className:"card-bar",children:[a.jsx("div",{className:"card-dot"}),a.jsx("div",{className:"card-dot"}),a.jsx("div",{className:"card-dot"})]}),e.image?a.jsx("div",{className:"card-fill",style:{top:"22px"},children:a.jsx("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover"}})}):e.color2&&a.jsx("div",{className:"card-fill",style:{background:e.color2,top:"22px"}})]},e.id)})}),a.jsxs("div",{className:"gallery-project",children:[a.jsx("h3",{children:i[n].title}),a.jsx("p",{children:i[n].description}),i[n].link!=="#"&&a.jsx("a",{href:i[n].link,target:"_blank",rel:"noreferrer",className:"view-project",style:{display:"inline-block",textDecoration:"none",color:"var(--text)"},children:i[n].link.includes("youtu")?"Tonton Video ↗":"Kunjungi Website ↗"})]})]})]})}export{u as default};
