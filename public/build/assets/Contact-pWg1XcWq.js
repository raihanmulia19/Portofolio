import{j as e,H as n}from"./app-DtvDw6ST.js";import{P as i}from"./PortfolioLayout-PWlZmovc.js";function l({auth:a}){const r=[{id:"01",label:"EMAIL",value:"raihanmulia19@gmail.com",link:"mailto:raihanmulia19@gmail.com",icon:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),external:!0},{id:"02",label:"GITHUB",value:"github.com/raihanmulia19",link:"https://github.com/raihanmulia19",icon:e.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"})}),external:!0},{id:"03",label:"LINKEDIN",value:"linkedin.com/in/muhammad-raihan-it",link:"https://www.linkedin.com/in/muhammad-raihan-it",icon:e.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),external:!0}];return e.jsxs(i,{auth:a,children:[e.jsx(n,{title:"Contact - Muhammad Raihan"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .contact-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 80px 40px 120px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                }
                
                /* Left Column */
                .contact-left {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .contact-eyebrow {
                    font-size: 11px;
                    letter-spacing: 0.25em;
                    color: var(--muted);
                    text-transform: uppercase;
                    margin-bottom: 24px;
                    font-weight: 600;
                }
                .contact-title {
                    font-size: clamp(48px, 7vw, 96px);
                    font-weight: 900;
                    color: var(--text);
                    margin: 0 0 32px;
                    line-height: 0.95;
                    letter-spacing: -0.02em;
                    text-transform: uppercase;
                }
                .contact-subtitle-1 {
                    font-size: 20px;
                    font-weight: 600;
                    color: var(--text);
                    margin-bottom: 24px;
                    line-height: 1.4;
                }
                .contact-subtitle-2 {
                    font-size: 15px;
                    color: var(--muted);
                    line-height: 1.6;
                    margin-bottom: 48px;
                    max-width: 480px;
                }
                .btn-resume {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    background: var(--text);
                    color: var(--bg) !important;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    padding: 16px 32px;
                    border-radius: 999px;
                    text-decoration: none;
                    transition: transform 0.2s ease, opacity 0.2s ease;
                    width: fit-content;
                }
                .btn-resume:hover {
                    transform: scale(1.02);
                    opacity: 0.9;
                }

                /* Right Column */
                .contact-right {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 16px;
                }
                .contact-card {
                    background: var(--nav-bg-2);
                    border: 1px solid var(--line);
                    border-radius: 20px;
                    padding: 24px 30px;
                    display: grid;
                    grid-template-columns: auto 1fr auto;
                    gap: 24px;
                    align-items: center;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .contact-card:hover {
                    background: var(--nav-bg-1);
                    border-color: var(--text);
                    transform: translateY(-2px);
                }
                .card-icon {
                    width: 48px;
                    height: 48px;
                    background: var(--nav-bg-1);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text);
                }
                .card-icon svg {
                    width: 20px;
                    height: 20px;
                }
                .card-details {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .card-label {
                    font-size: 10px;
                    letter-spacing: 0.2em;
                    color: var(--muted);
                    text-transform: uppercase;
                    font-weight: 600;
                }
                .card-value {
                    font-size: 15px;
                    font-weight: 600;
                    color: var(--text);
                }
                .card-meta {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: center;
                    height: 100%;
                    min-height: 48px;
                }
                .card-num {
                    font-size: 10px;
                    font-family: monospace;
                    color: var(--muted);
                }
                .card-ext {
                    color: var(--muted);
                }
                .card-ext svg {
                    width: 14px;
                    height: 14px;
                }

                .btn-message {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    background: transparent;
                    color: var(--text);
                    border: 1px solid var(--line);
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    padding: 20px 32px;
                    border-radius: 999px;
                    text-decoration: none;
                    margin-top: 8px;
                    transition: all 0.3s ease;
                }
                .btn-message:hover {
                    background: var(--line);
                    border-color: var(--text);
                }

                @media (max-width: 992px) {
                    .contact-container {
                        grid-template-columns: 1fr;
                        gap: 80px;
                    }
                    .contact-title {
                        font-size: 56px;
                    }
                }
                @media (max-width: 640px) {
                    .contact-card {
                        padding: 20px;
                        gap: 16px;
                    }
                    .card-value {
                        font-size: 13px;
                    }
                }
            `}}),e.jsxs("div",{className:"contact-container",children:[e.jsxs("div",{className:"contact-left",children:[e.jsx("div",{className:"contact-eyebrow",children:"GET IN TOUCH"}),e.jsxs("h1",{className:"contact-title",children:["LET'S",e.jsx("br",{}),"WORK",e.jsx("br",{}),"TOGETHER"]}),e.jsx("div",{className:"contact-subtitle-1",children:"Looking for the next problem worth solving."}),e.jsx("div",{className:"contact-subtitle-2",children:"I'm open to opportunities where I can contribute to software testing, web development, IT operations, and digital workflows."}),e.jsx("a",{href:"/resume.pdf",download:"Resume_Muhammad_Raihan.pdf",className:"btn-resume",children:"DOWNLOAD RESUME →"})]}),e.jsxs("div",{className:"contact-right",children:[r.map(t=>e.jsxs("a",{href:t.link,target:t.external?"_blank":"_self",className:"contact-card",children:[e.jsx("div",{className:"card-icon",children:t.icon}),e.jsxs("div",{className:"card-details",children:[e.jsx("div",{className:"card-label",children:t.label}),e.jsx("div",{className:"card-value",children:t.value})]}),e.jsx("div",{className:"card-meta",children:t.external&&e.jsx("div",{className:"card-ext",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})})]},t.id)),e.jsx("a",{href:"https://wa.me/6282260693366",target:"_blank",rel:"noopener noreferrer",className:"btn-message",children:"SEND ME A MESSAGE →"})]})]})]})}export{l as default};
