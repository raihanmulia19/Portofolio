import { Head } from '@inertiajs/react';
import PortfolioLayout from '@/Layouts/PortfolioLayout';

export default function About({ auth }) {
    return (
        <PortfolioLayout auth={auth}>
            <Head title="About - Muhammad Raihan" />
            
            <style dangerouslySetInnerHTML={{__html: `
                /* About */
                .about{ max-width: 1100px; margin: 0 auto; padding: 20px 40px 120px; position:relative; overflow:hidden; }
                .about-eyebrow{ font-size:11px; letter-spacing:0.18em; color:var(--muted); margin-bottom:14px; }
                .about-heading{ font-size: clamp(30px, 5vw, 50px); font-weight:800; letter-spacing:-0.01em; margin:0 0 44px; max-width: 820px; }
                .caret{ display:inline-block; width:2px; height:0.85em; background:var(--text); margin-left:6px; vertical-align:-0.1em; animation: blink 1s step-end infinite; }
                @keyframes blink{ 50%{ opacity:0; } }

                .about-profile{ display:flex; gap:22px; margin-bottom:26px; }
                .about-avatar{ width:64px;height:64px; border-radius:50%; overflow:hidden; flex-shrink:0; background: var(--nav-bg-1); border: 2px solid var(--line); }
                .about-avatar img{ width:100%; height:100%; object-fit:cover; object-position: center; transform: scale(1.15) translateY(4px); }
                .about-name{ display:flex; align-items:center; gap:8px; font-size:16px; font-weight:800; letter-spacing:0.02em; margin-bottom:12px; }
                .verified{ width:16px;height:16px; border-radius:50%; background:#2b7fff; color:#fff; font-size:10px; display:flex;align-items:center;justify-content:center; flex-shrink:0; }
                .about-stats{ display:flex; gap:36px; margin-bottom:18px; }
                .stat-label{ font-size:10px; letter-spacing:0.12em; color:var(--muted); margin-bottom:4px; }
                .stat-value{ font-size:15px; font-weight:700; }

                .about-text{ max-width: 760px; color:var(--muted); font-size:14px; line-height:1.75; margin: 0 0 40px; }
                .about-text .resume-link{ color:var(--text); font-weight:700; border-bottom:1px solid var(--text); padding-bottom:1px; transition: opacity 0.2s; }
                .about-text .resume-link:hover{ opacity: 0.7; }

                .currently{ font-size:11px; letter-spacing:0.16em; color:var(--muted); margin-bottom:18px; }
                .currently-row{ display:flex; gap:44px; flex-wrap:wrap; }
                .currently-item{ display:flex; align-items:flex-start; gap:12px; }
                .currently-icon{ width:34px;height:34px; border-radius:9px; border:1px solid var(--line); display:flex;align-items:center;justify-content:center; font-size:15px; flex-shrink:0; }
                .currently-item strong{ display:block; font-size:13px; font-weight:700; margin-bottom:2px; }
                .currently-item span{ font-size:12px; color:var(--muted); }

                .deco-cards{ position:absolute; right: 20px; bottom: -10px; width: 220px; height: 150px; display:none; }
                .deco-card{ position:absolute; width:170px; border-radius:12px; padding:14px 16px; background: linear-gradient(160deg, var(--nav-bg-1), var(--nav-bg-2)); box-shadow: 0 16px 30px rgba(0,0,0,0.35); border:1px solid var(--line); }
                .deco-card.d1{ transform: rotate(-8deg); top:0; right:40px; font-size:10px; letter-spacing:0.14em; color:var(--muted); }
                .deco-card.d2{ transform: rotate(6deg); top:34px; right:0; font-size:16px; font-weight:800; }
                .deco-card.d3{ transform: rotate(-4deg); top:78px; right:60px; font-size:10px; letter-spacing:0.14em; color:var(--muted); }

                @media (min-width: 900px){ .deco-cards{ display:block; } }
                @media (max-width: 640px){
                  .about{ padding: 28px 20px 80px; }
                  .about-heading{ font-size: clamp(26px, 7.5vw, 34px); margin: 0 0 28px; line-height: 1.25; }
                  .about-profile{ gap: 16px; align-items: center; margin-bottom: 22px; }
                  .about-avatar{ width: 58px; height: 58px; }
                  .about-name{ font-size: 15px; margin-bottom: 10px; }
                  .about-stats{ gap: 20px; margin-bottom: 0; flex-wrap: wrap; }
                  .stat-value{ font-size: 14px; }
                  .about-text{ font-size: 13.5px; line-height: 1.7; margin: 0 0 32px; }
                  .currently-row{ flex-direction: column; gap: 16px; }
                }
            `}} />

            <section className="about" id="about">
              <div className="about-eyebrow">ABOUT ME</div>
              <h2 className="about-heading">Software Developer. Technology Enthusiast.<span className="caret"></span></h2>

              <div className="about-profile">
                <div className="about-avatar">
                  <img src="/profile.png" alt="Muhammad Raihan" />
                </div>
                <div>
                  <div className="about-name">MUHAMMAD RAIHAN <span className="verified">&#10003;</span></div>
                  <div className="about-stats">
                    <div><div className="stat-label">PROJECTS</div><div className="stat-value">10+</div></div>
                    <div><div className="stat-label">CERTIFICATES</div><div className="stat-value">11</div></div>
                    <div><div className="stat-label">GRADUATED</div><div className="stat-value">2026</div></div>
                  </div>
                </div>
              </div>

              <p className="about-text">
                Saya lulusan D4 Teknik Informatika dari Politeknik Caltex Riau dengan IPK 3,75 (Cumlaude), yang memiliki minat di bidang pengembangan web, jaringan komputer, keamanan siber, dan teknologi digital. Saya senang membangun solusi digital yang praktis, mulai dari pengembangan sistem berbasis web hingga implementasi dan pengujian sistem. Selama kuliah dan pengalaman profesional, saya mengembangkan sistem menggunakan Laravel, React.js, dan Inertia.js, serta memperoleh pengalaman dalam IT Support, jaringan komputer, software testing, dan pengembangan aplikasi berbasis AI.
                <br /><br />
                Ingin tahu lebih banyak tentang pengalaman saya? <a href="/resume.pdf" download="Resume_Muhammad_Raihan.pdf" className="resume-link">Unduh resume saya</a>.
              </p>

              <div className="currently">CURRENTLY</div>
              <div className="currently-row">
                <div className="currently-item">
                  <div className="currently-icon">&lt;/&gt;</div>
                  <div><strong>Building</strong><span>Proyek web &amp; digital</span></div>
                </div>
                <div className="currently-item">
                  <div className="currently-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-3.5-3.5" />
                    </svg>
                  </div>
                  <div><strong>Exploring</strong><span>System testing &amp; QA</span></div>
                </div>
                <div className="currently-item">
                  <div className="currently-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6.5 19a4.5 4.5 0 0 1-.4-8.98A6 6 0 0 1 17.8 8.2a4.5 4.5 0 0 1 .7 8.95H6.5Z" />
                    </svg>
                  </div>
                  <div><strong>Learning</strong><span>Cloud &amp; AI</span></div>
                </div>
              </div>

              <div className="deco-cards">
                <div className="deco-card d1">TRAIT</div>
                <div className="deco-card d2">Organized</div>
                <div className="deco-card d3">CURIOUS</div>
              </div>
            </section>
        </PortfolioLayout>
    );
}
