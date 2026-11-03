import { Head } from '@inertiajs/react';
import PortfolioLayout from '@/Layouts/PortfolioLayout';

export default function Welcome({ auth }) {
    return (
        <PortfolioLayout auth={auth}>
            <Head title="Home - Muhammad Raihan" />
            
            <div className="hero">
                <div className="eyebrow">FRESH GRADUATE &mdash; OPEN FOR OPPORTUNITIES</div>
                
                <div className="marquee">
                    <div className="marquee-track">
                        <span>MUHAMMAD RAIHAN</span><span>MUHAMMAD RAIHAN</span>
                    </div>
                </div>
                
                <div className="photo-wrap">
                    {/* 
                        Silakan simpan file gambar yang Anda kirimkan 
                        ke dalam folder public/ dengan nama profile.png
                    */}
                    <img 
                        src="/profile.png" 
                        alt="Muhammad Raihan" 
                    />
                </div>
                
                <div className="intro">
                    <p>
                        Halo, saya <strong>Muhammad Raihan</strong>, fresh graduate Teknik Informatika yang tertarik pada web development dan teknologi informasi.<br/>
                        Senang belajar, membangun solusi yang rapi, serta terbuka untuk kolaborasi dan peluang baru.
                    </p>
                    <div className="intro-bottom">
                        <a href="https://www.linkedin.com/in/muhammad-raihan-it" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/muhammadd_raihann" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="mailto:raihanmulia19@gmail.com">Email</a>
                    </div>
                </div>
                <hr className="divider" />
            </div>
        </PortfolioLayout>
    );
}
