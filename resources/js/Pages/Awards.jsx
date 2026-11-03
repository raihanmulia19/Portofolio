import { Head } from '@inertiajs/react';
import PortfolioLayout from '@/Layouts/PortfolioLayout';
import { useState } from 'react';
import { Icon, addCollection } from '@iconify/react';

addCollection({
    prefix: 'twemoji',
    width: 24,
    height: 24,
    icons: {
        'trophy': {
            body: '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18M6 4h12v5a6 6 0 0 1-12 0V4Zm6 11v4m-4 2h8"/>'
        },
        'office-building': {
            body: '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4 21h16M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M9 7h2m2 0h2M9 11h2m2 0h2M9 15h2m2 0h2m-5 6v-3h4v3"/>'
        },
        'shield': {
            body: '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M12 3L4 6.5v5.5c0 5 3.4 9.3 8 10.5c4.6-1.2 8-5.5 8-10.5V6.5L12 3Zm-3 9l2 2l4-4"/>'
        },
        'globe-with-meridians': {
            body: '<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3.5 9h17M3.5 15h17"/></g>'
        },
        'cloud': {
            body: '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M6.5 19a4.5 4.5 0 0 1-.4-8.98A6 6 0 0 1 17.8 8.2a4.5 4.5 0 0 1 .7 8.95H6.5Z"/>'
        },
        'camera': {
            body: '<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8a2 2 0 0 1 2-2h2l1.5-2h5L16 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"/><circle cx="12" cy="13" r="3.5"/></g>'
        },
        'eye': {
            body: '<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12S6 5.5 12 5.5S21.5 12 21.5 12S18 18.5 12 18.5S2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/></g>'
        },
        'input-numbers': {
            body: '<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7.5 9L9 8v8m3.5-6.5a2 2 0 0 1 4 0c0 1.5-4 3.5-4 6.5h4"/></g>'
        },
        'locked': {
            body: '<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 11V7a4 4 0 1 1 8 0v4"/><rect x="5" y="11" width="14" height="10" rx="2.5"/><circle cx="12" cy="16" r="1"/></g>'
        }
    }
});

export default function Awards({ auth }) {
    const [showAll, setShowAll] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);

    const credentialsData = [
        { title: "Juara 1 Website JTI EXPO", org: "Politeknik Caltek Riau", date: "Jan 2024", icon: "twemoji:trophy", image: "/cert-juara-1-jti.jpg" },

        { title: "Network Administrator Muda", org: "BNSP", date: "Agu 2026", icon: "twemoji:office-building" },
        { title: "MTCNA", org: "MikroTik", date: "Jul 2024", icon: "twemoji:office-building", image: "/cert-mtcna.png" },
        { title: "Ethical Hacking Essentials (EHE)", org: "EC-Council", date: "Jul 2024", icon: "twemoji:shield", image: "/cert-ehe.png" },
        { title: "Network Defense Essentials (NDE)", org: "EC-Council", date: "Jul 2024", icon: "twemoji:shield", image: "/cert-nde.png" },
        { title: "CCNAv7: Introduction to Networks", org: "Cisco", date: "Des 2023", icon: "twemoji:globe-with-meridians", image: "/cert-ccna.png" },
        { title: "AWS Academy Graduate - Cloud Foundations", org: "AWS Academy", date: "Jun 2026", icon: "twemoji:cloud", image: "/cert-aws.png" },
        { title: "Image Processing Onramp", org: "MATHWORKS", date: "Apr 2026", icon: "twemoji:camera", image: "/cert-image-processing.png" },
        { title: "Computer Vision Onramp", org: "MATHWORKS", date: "Apr 2026", icon: "twemoji:eye", image: "/cert-computer-vision.png" },
        { title: "Matlab Onramp", org: "MATHWORKS", date: "Apr 2026", icon: "twemoji:input-numbers", image: "/cert-matlab.png" },
        { title: "CYBERSECURITY ESSENTIALS", org: "Cisco", date: "Jul 2024", icon: "twemoji:locked", image: "/cert-cybersecurity.png" },
    ];

    const displayedCredentials = showAll ? credentialsData : credentialsData.slice(0, 5);

    return (
        <PortfolioLayout auth={auth}>
            <Head title="Certifications & Trainings - Muhammad Raihan" />
            
            <style dangerouslySetInnerHTML={{__html: `
                /* Awards */
                .awards{ max-width: 1300px; margin: 0 auto; padding: 40px 40px 120px; }
                .awards-eyebrow{ font-size:11px; letter-spacing:0.18em; color:var(--muted); margin-bottom:14px; }
                .awards-heading{ font-size: clamp(30px, 5vw, 50px); font-weight:800; letter-spacing:-0.01em; margin:0 0 16px; }
                .awards-sub{ color:var(--muted); font-size:14px; margin:0 0 46px; max-width:600px; line-height: 1.6; }
                .awards-grid{ display:grid; grid-template-columns: 2fr 1.5fr; gap: 60px; align-items:start; }

                .collage{ position:relative; display:grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 190px; gap:16px; max-width:880px; position: sticky; top: 120px; }
                .collage .ph{ border-radius:10px; overflow:hidden; background-size:cover; background-position:center; transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .collage .ph:hover { transform: scale(1.05); z-index: 10; box-shadow: 0 10px 20px rgba(0,0,0,0.4); }
                
                .collage .ph-p1 { grid-column: 1; grid-row: 1 / 3; }
                .collage .ph-l1 { grid-column: 1; grid-row: 3 / 4; }
                
                .collage .ph-l2 { grid-column: 2; grid-row: 1 / 2; transform: translateY(40px); }
                .collage .ph-l2:hover { transform: translateY(40px) scale(1.05); }
                .collage .ph-p2 { grid-column: 2; grid-row: 2 / 4; transform: translateY(40px); }
                .collage .ph-p2:hover { transform: translateY(40px) scale(1.05); }
                
                .collage .ph-p3 { grid-column: 3; grid-row: 1 / 3; }
                .collage .ph-l3 { grid-column: 3; grid-row: 3 / 4; }

                .awards-list{ display:flex; flex-direction:column; gap:14px; }
                .award-card{ display:flex; align-items:center; gap:16px; background: linear-gradient(160deg, var(--nav-bg-1), var(--nav-bg-2)); border:1px solid var(--line); border-radius:14px; padding:16px 18px; transition: transform 0.2s ease, border-color 0.2s ease; cursor: pointer; }
                .award-card:hover { transform: translateX(5px); border-color: var(--muted); }
                
                .award-icon{ width:40px;height:40px; border-radius:10px; background:var(--bg); color:var(--text); display:flex;align-items:center;justify-content:center; font-size:17px; flex-shrink:0; border: 1px solid var(--line); transition: background 0.35s ease, color 0.35s ease; }
                .award-info { flex: 1; display: flex; flex-direction: column; gap: 4px; }
                .award-info strong { font-size: 14px; font-weight: 700; color: var(--text); }
                .award-info span { font-size: 12px; color: var(--muted); }
                .award-link{ width:26px;height:26px; border-radius:50%; border:1px solid var(--line); display:flex;align-items:center;justify-content:center; font-size:11px; color:var(--muted); flex-shrink:0; background: var(--bg); transition: background 0.2s, color 0.2s; }
                .award-card:hover .award-link { background: var(--text); color: var(--bg); }

                .see-all-btn{ margin-top: 10px; display:inline-flex; align-items:center; justify-content:center; width:100%; gap:8px; background:var(--text); color:var(--bg); border:none; border-radius:12px; padding:14px 22px; font-size:14px; font-weight:700; cursor:pointer; transition: transform 0.2s ease, opacity 0.2s ease; }
                .see-all-btn:hover { opacity: 0.9; transform: translateY(-2px); }

                .caret{ display:inline-block; width:2px; height:0.85em; background:var(--text); margin-left:6px; vertical-align:-0.1em; animation: blink 1s step-end infinite; }
                @keyframes blink{ 50%{ opacity:0; } }

                /* Modal */
                .modal-overlay {
                    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.8); backdrop-filter: blur(5px);
                    z-index: 9999; display: flex; align-items: center; justify-content: center;
                    opacity: 0; visibility: hidden; transition: all 0.3s ease;
                }
                .modal-overlay.open { opacity: 1; visibility: visible; }
                .modal-content {
                    background: var(--nav-bg-1); padding: 20px; border-radius: 16px;
                    max-width: 90vw; max-height: 90vh; position: relative;
                    border: 1px solid var(--line); transform: scale(0.9);
                    transition: all 0.3s ease; display: flex; flex-direction: column; gap: 16px;
                }
                .modal-overlay.open .modal-content { transform: scale(1); }
                .close-btn {
                    position: absolute; top: -16px; right: -16px;
                    background: var(--text); color: var(--bg); border: none;
                    width: 32px; height: 32px; border-radius: 50%; font-weight: bold; font-size: 18px;
                    cursor: pointer; display: flex; align-items: center; justify-content: center;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 10;
                }
                .cert-image { max-width: 100%; max-height: calc(90vh - 100px); object-fit: contain; border-radius: 8px; }
                .cert-title { font-size: 18px; font-weight: bold; text-align: center; color: var(--text); }

                @media (max-width: 860px){ 
                  .awards-grid{ grid-template-columns: 1fr; gap: 40px; } 
                  .collage { max-width: 100%; grid-auto-rows: 140px; position: static; }
                }
                @media (max-width: 480px){
                  .collage { grid-auto-rows: 100px; gap: 8px; }
                }
            `}} />

            <section className="awards" id="awards">
              <div className="awards-eyebrow">CREDENTIALS</div>
              <h2 className="awards-heading">Certifications & Trainings<span className="caret"></span></h2>
              <p className="awards-sub">Kumpulan sertifikasi dan pelatihan yang mencerminkan dedikasi saya terhadap peningkatan kompetensi profesional.</p>

              <div className="awards-grid">
                <div className="collage">
                  <div className="ph ph-p1" style={{backgroundImage: "url('/foto-potrait-1.jpeg')"}}></div>
                  <div className="ph ph-l1" style={{backgroundImage: "url('/foto-landscape-1.jpeg')"}}></div>
                  
                  <div className="ph ph-l2" style={{backgroundImage: "url('/foto-landscape-2.png')"}}></div>
                  <div className="ph ph-p2" style={{backgroundImage: "url('/foto-potrait-2.jpeg')"}}></div>
                  
                  <div className="ph ph-p3" style={{backgroundImage: "url('/foto-potrait-3.JPG')"}}></div>
                  <div className="ph ph-l3" style={{backgroundImage: "url('/foto-landscape-3.JPG')"}}></div>
                </div>

                <div className="awards-list">
                  {displayedCredentials.map((cert, idx) => (
                      <div
                          className="award-card"
                          key={idx}
                          onClick={() => cert.image && setSelectedCert(cert)}
                          style={{ cursor: cert.image ? 'pointer' : 'default' }}
                      >
                          <div className="award-icon">
                              <Icon icon={cert.icon} width="22" height="22" />
                          </div>
                          <div className="award-info">
                              <strong>{cert.title}</strong>
                              <span>{cert.org} &bull; {cert.date}</span>
                          </div>
                          {cert.image && <div className="award-link">&#8599;</div>}
                      </div>
                  ))}
                  
                  <button 
                    className="see-all-btn" 
                    onClick={() => setShowAll(!showAll)}
                  >
                      {showAll ? "Show Less" : "See All Credentials"}
                  </button>
                </div>
              </div>
            </section>

            {/* Modal */}
            <div className={`modal-overlay ${selectedCert ? 'open' : ''}`} onClick={() => setSelectedCert(null)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <button className="close-btn" onClick={() => setSelectedCert(null)}>&times;</button>
                    {selectedCert && (
                        <>
                            {selectedCert.image ? (
                                <img 
                                    src={selectedCert.image} 
                                    alt={selectedCert.title} 
                                    className="cert-image" 
                                />
                            ) : (
                                <div style={{ width: '480px', maxWidth: '80vw', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--line)', color: 'var(--muted)', fontSize: '15px', fontWeight: 600 }}>
                                    Gambar Sertifikat Belum Tersedia
                                </div>
                            )}
                            <div className="cert-title">{selectedCert.title}</div>
                        </>
                    )}
                </div>
            </div>
        </PortfolioLayout>
    );
}
