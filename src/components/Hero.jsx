import { Link } from 'react-router-dom';
import './Hero.css';
import HeroImage from '../assets/Hero Image.jpg';

function Hero() {
  return (
    <section className="hero" aria-label="메인 배너">
      <div className="hero-image-container">
        <img 
          src={HeroImage}
          alt="국립중앙박물관 이미지" 
          className="hero-image" 
        />
        <Link 
          to="/booking" 
          className="btn-reserve-floating" 
          aria-label="전시 관람 예약 페이지로 이동"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="btn-icon">
            <path d="M15 5v2"></path>
            <path d="M15 11v2"></path>
            <path d="M15 17v2"></path>
            <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2z"></path>
          </svg>
          <span className="btn-text">관람예약</span>
        </Link>

      </div>
    </section>
  );
}

export default Hero;
