import{r,j as e,L as a}from"./app-NRqswBqI.js";function y({auth:h,children:b}){const m=()=>{if(typeof window<"u"){const t=localStorage.getItem("mr-theme-pref");return t==="light"||t==="dark"?t:window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}return"dark"},[g,p]=r.useState(m),d=r.useRef(null),[c,x]=r.useState({left:0,width:0,opacity:0}),[s,i]=r.useState(!1),l=()=>{if(d.current){const t=d.current.querySelector(".active");x(t?{left:t.offsetLeft,width:t.offsetWidth,opacity:1}:o=>({...o,opacity:0}))}};r.useEffect(()=>{const t=m();p(t),document.documentElement.setAttribute("data-theme",t);const o=window.matchMedia("(prefers-color-scheme: light)"),u=w=>{if(!localStorage.getItem("mr-theme-pref")){const f=w.matches?"light":"dark";p(f),document.documentElement.setAttribute("data-theme",f)}};if(o.addEventListener)return o.addEventListener("change",u),()=>o.removeEventListener("change",u)},[]),r.useEffect(()=>(setTimeout(l,50),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[route().current()]);const n=t=>{x({left:t.currentTarget.offsetLeft,width:t.currentTarget.offsetWidth,opacity:1})},v=()=>{const t=g==="light"?"dark":"light";p(t),document.documentElement.setAttribute("data-theme",t),localStorage.setItem("mr-theme-pref",t)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

                :root {
                  --bg: #161512;
                  --text: #f2efe9;
                  --muted: #a9a49a;
                  --line: rgba(242,239,233,0.14);
                  --nav-bg-1: #2a2824;
                  --nav-bg-2: #201f1b;
                }
                :root[data-theme="light"] {
                  --bg: #f4f2ee;
                  --text: #161512;
                  --muted: #6b6558;
                  --line: rgba(22,21,18,0.14);
                  --nav-bg-1: #ffffff;
                  --nav-bg-2: #e7e5e1;
                }
                
                #portfolio-wrapper {
                  background: var(--bg);
                  color: var(--text);
                  font-family: "Helvetica Neue", Arial, sans-serif;
                  -webkit-font-smoothing: antialiased;
                  transition: background 0.35s ease, color 0.35s ease;
                  min-height: 100vh;
                  width: 100%;
                  overflow-x: hidden;
                }
                
                #portfolio-wrapper a {
                  color: inherit;
                  text-decoration: none;
                }

                .nav-outer {
                  padding: 18px 24px 0;
                  padding-top: calc(18px + env(safe-area-inset-top, 0px));
                }
                .nav {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  gap: 20px;
                  padding: 14px 22px;
                  border-radius: 999px;
                  background: linear-gradient(180deg, var(--nav-bg-1), var(--nav-bg-2));
                  box-shadow: 0 10px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.4);
                }
                .brand {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  font-weight: 700;
                  letter-spacing: 0.03em;
                  font-size: 15px;
                }
                .brand .mark-r {
                  background: var(--text);
                  color: var(--bg);
                  font-family: 'Pacifico', cursive;
                  font-size: 22px;
                  font-weight: 400;
                  width: 34px;
                  height: 34px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 8px;
                  line-height: 1;
                  padding-bottom: 2px;
                }
                .nav-links {
                  display: flex;
                  gap: 34px;
                  font-size: 13px;
                  letter-spacing: 0.08em;
                  color: var(--muted);
                }
                .nav-links a {
                  padding: 8px 16px;
                  border-radius: 999px;
                  transition: color 0.3s ease;
                  border: 1px solid transparent;
                  position: relative;
                  z-index: 1;
                }
                .nav-links a:hover {
                  color: var(--text);
                }
                .nav-links a.active {
                  color: var(--text);
                  font-weight: 600;
                }
                
                .nav-pill {
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  border-radius: 999px;
                  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                  z-index: 0;
                  background: rgba(255, 255, 255, 0.1);
                  backdrop-filter: blur(20px) saturate(180%);
                  -webkit-backdrop-filter: blur(20px) saturate(180%);
                  border: 1px solid rgba(255, 255, 255, 0.15);
                  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }
                
                :root[data-theme="light"] .nav-pill {
                  background: rgba(255, 255, 255, 0.4);
                  border: 1px solid rgba(0, 0, 0, 0.05);
                  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.5);
                }
                
                .nav-right {
                  display: flex;
                  align-items: center;
                  gap: 16px;
                }
                .icon-btn {
                  width: 36px; height: 36px;
                  border: 1px solid var(--line);
                  border-radius: 50%;
                  display: flex; align-items: center; justify-content: center;
                  color: var(--text);
                  font-size: 15px;
                  cursor: pointer;
                  background: none;
                  transition: background 0.2s ease;
                }
                .icon-btn:hover { background: var(--line); }
                
                .hire-btn {
                  border: 1px solid var(--line);
                  border-radius: 999px;
                  padding: 10px 22px;
                  font-size: 13px;
                  font-weight: 600;
                  cursor: pointer;
                  transition: background 0.2s ease, color 0.2s ease;
                }
                .hire-btn:hover {
                  background: var(--text);
                  color: var(--bg);
                }

                .page-content {
                  padding: 70px 40px;
                  max-width: 900px;
                  margin: 0 auto;
                  min-height: 70vh;
                }
                
                .page-title {
                  font-size: 42px;
                  font-weight: 800;
                  margin-bottom: 20px;
                  text-transform: uppercase;
                  letter-spacing: 0.05em;
                }
                
                .page-text {
                  font-size: 18px;
                  line-height: 1.6;
                  color: var(--muted);
                }

                /* Hero styles for Welcome page */
                .hero {
                  position: relative;
                  padding: 70px 0 50px;
                  overflow: hidden;
                  min-height: 780px;
                }
                .eyebrow {
                  text-align: center;
                  font-size: 12px;
                  letter-spacing: 0.22em;
                  color: var(--muted);
                  margin-bottom: 60px;
                  padding: 0 40px;
                }
                .marquee {
                  position: absolute;
                  top: 48%;
                  left: 0;
                  right: 0;
                  transform: translateY(-50%);
                  z-index: 0;
                  overflow: hidden;
                  white-space: nowrap;
                  pointer-events: none;
                  user-select: none;
                }
                .marquee-track {
                  display: inline-block;
                  animation: scroll-left 22s linear infinite;
                }
                .marquee span {
                  display: inline-block;
                  font-size: clamp(70px, 13vw, 180px);
                  font-weight: 800;
                  color: transparent;
                  -webkit-text-stroke: 1px var(--text);
                  opacity: 0.35;
                  letter-spacing: 0.02em;
                  padding-right: 60px;
                }
                @keyframes scroll-left {
                  from { transform: translateX(0); }
                  to { transform: translateX(-50%); }
                }
                @media (prefers-reduced-motion: reduce) {
                  .marquee-track { animation: none; }
                }
                .photo-wrap {
                  position: relative;
                  z-index: 1;
                  display: flex;
                  justify-content: center;
                  padding: 0 40px;
                }
                .photo-wrap img {
                  width: 340px;
                  max-width: 78%;
                  height: auto;
                  display: block;
                  object-fit: cover;
                }
                .intro {
                  position: relative;
                  z-index: 2;
                  max-width: 620px;
                  margin: 30px auto 0;
                  padding: 0 40px;
                }
                .intro p {
                  font-size: 17px;
                  line-height: 1.55;
                  color: var(--text);
                  margin: 0 0 22px;
                  text-align: center;
                }
                .intro p strong {
                  font-weight: 700;
                }
                .intro-bottom {
                  display: flex;
                  justify-content: flex-end;
                  gap: 20px;
                  font-size: 13px;
                  color: var(--muted);
                }
                .intro-bottom a {
                  transition: color 0.2s ease;
                }
                .intro-bottom a:hover { color: var(--text); }
                .divider {
                  max-width: 620px;
                  margin: 26px auto 0;
                  border: none;
                  border-top: 1px solid var(--line);
                }
                
                .hamburger-btn {
                  display: none; background: none; border: none; color: var(--text);
                  font-size: 24px; cursor: pointer; padding: 4px; line-height: 1;
                }
                .mobile-menu-overlay {
                  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                  background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); z-index: 98;
                  opacity: 0; visibility: hidden; transition: all 0.3s ease;
                }
                .mobile-menu-overlay.open { opacity: 1; visibility: visible; }
                .mobile-menu {
                  position: fixed; top: calc(env(safe-area-inset-top, 0px) + 84px);
                  left: 20px; right: 20px; background: var(--nav-bg-1);
                  border: 1px solid var(--line); border-radius: 16px; padding: 16px;
                  display: flex; flex-direction: column; gap: 8px; z-index: 99;
                  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                  transform: translateY(-10px); opacity: 0; visibility: hidden;
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .mobile-menu.open { transform: translateY(0); opacity: 1; visibility: visible; }
                .mobile-menu a {
                  font-size: 14px; font-weight: 600; color: var(--muted); letter-spacing: 0.05em;
                  padding: 14px 18px; border-radius: 10px; text-decoration: none; transition: all 0.2s;
                }
                .mobile-menu a.active, .mobile-menu a:hover {
                  color: var(--bg); background: var(--text);
                }
                
                @media (max-width: 880px) {
                  .nav-links { display: none; }
                  .hamburger-btn { display: block; }
                }

                @media (max-width: 640px) {
                  .nav-outer { padding: 12px 14px 0; padding-top: calc(12px + env(safe-area-inset-top, 0px)); }
                  .nav { padding: 10px 14px; gap: 10px; }
                  .brand { font-size: 13px; gap: 8px; }
                  .brand .mark-r { width: 30px; height: 30px; font-size: 18px; border-radius: 7px; }
                  .nav-right { gap: 8px; }
                  .icon-btn { width: 34px; height: 34px; font-size: 14px; }
                  .hire-btn { padding: 8px 14px; font-size: 12px; white-space: nowrap; }
                  .mobile-menu { top: calc(env(safe-area-inset-top, 0px) + 70px); left: 14px; right: 14px; padding: 12px; }
                  .mobile-menu a { padding: 12px 16px; font-size: 13px; }
                  .hero { padding: 28px 0 40px; min-height: auto; }
                  .eyebrow { padding: 0 20px; margin-bottom: 28px; font-size: 10px; letter-spacing: 0.16em; line-height: 1.5; }
                  .marquee { top: 38%; }
                  .marquee span { font-size: clamp(54px, 18vw, 90px); }
                  .photo-wrap { padding: 0 20px; }
                  .photo-wrap img { width: min(240px, 70vw); }
                  .intro { padding: 0 20px; margin-top: 24px; }
                  .intro p { font-size: 15px; line-height: 1.6; margin-bottom: 20px; }
                  .intro-bottom { justify-content: center; flex-wrap: wrap; gap: 18px; font-size: 13px; }
                  .divider { max-width: calc(100% - 40px); margin: 22px auto 0; }
                  .page-content { padding: 32px 20px; }
                }
            `}}),e.jsxs("div",{id:"portfolio-wrapper",children:[e.jsxs("div",{className:"nav-outer",children:[e.jsxs("div",{className:"nav",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[e.jsx("button",{className:"hamburger-btn",onClick:()=>i(!s),children:s?"✕":"☰"}),e.jsxs(a,{href:route("home"),className:"brand",children:[e.jsx("span",{className:"mark-r",children:"R"})," RAIHAN"]})]}),e.jsxs("div",{className:"nav-links",ref:d,onMouseLeave:l,style:{position:"relative"},children:[e.jsx("div",{className:"nav-pill",style:{left:c.left,width:c.width,opacity:c.opacity}}),e.jsx(a,{onMouseEnter:n,href:route("work"),className:route().current("work")?"active":"",children:"WORK"}),e.jsx(a,{onMouseEnter:n,href:route("what-i-can-do"),className:route().current("what-i-can-do")?"active":"",children:"WHAT I CAN DO"}),e.jsx(a,{onMouseEnter:n,href:route("about"),className:route().current("about")?"active":"",children:"ABOUT"}),e.jsx(a,{onMouseEnter:n,href:route("awards"),className:route().current("awards")?"active":"",children:"AWARDS"}),e.jsx(a,{onMouseEnter:n,href:route("contact"),className:route().current("contact")?"active":"",children:"CONTACT"})]}),e.jsxs("div",{className:"nav-right",children:[e.jsx("button",{className:"icon-btn",onClick:v,"aria-label":"Ganti tema gelap/terang",title:"Ganti tema",children:g==="light"?e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"4"}),e.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}):e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),h&&h.user?e.jsx(a,{href:route("dashboard"),className:"hire-btn",children:"Dashboard"}):e.jsx(a,{href:route("contact"),className:"hire-btn",children:"Hire Me"})]})]}),e.jsx("div",{className:`mobile-menu-overlay ${s?"open":""}`,onClick:()=>i(!1)}),e.jsxs("div",{className:`mobile-menu ${s?"open":""}`,children:[e.jsx(a,{href:route("work"),className:route().current("work")?"active":"",onClick:()=>i(!1),children:"WORK"}),e.jsx(a,{href:route("what-i-can-do"),className:route().current("what-i-can-do")?"active":"",onClick:()=>i(!1),children:"WHAT I CAN DO"}),e.jsx(a,{href:route("about"),className:route().current("about")?"active":"",onClick:()=>i(!1),children:"ABOUT"}),e.jsx(a,{href:route("awards"),className:route().current("awards")?"active":"",onClick:()=>i(!1),children:"AWARDS"}),e.jsx(a,{href:route("contact"),className:route().current("contact")?"active":"",onClick:()=>i(!1),children:"CONTACT"})]})]}),b]})]})}export{y as P};
