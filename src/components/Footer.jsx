// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// 새로운 JPG 아이콘들을 임포트합니다.
import iconFacebook from '../assets/facebook.jpg';
import iconInstagram from '../assets/instagram.jpg';
import iconNaver from '../assets/naver.jpg';
import iconTwitter from '../assets/twitter.jpg';
import iconYoutube from '../assets/utube.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 상단 구분선 */}
        <hr className="footer-divider" />

        {/* SNS 아이콘 영역 */}
        <div className="footer-sns">
          <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer" aria-label="네이버 블로그">
            <img src={iconNaver} alt="" className="sns-icon" aria-hidden="true" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="페이스북">
            <img src={iconFacebook} alt="" className="sns-icon" aria-hidden="true" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="인스타그램">
            <img src={iconInstagram} alt="" className="sns-icon" aria-hidden="true" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="유튜브">
            <img src={iconYoutube} alt="" className="sns-icon" aria-hidden="true" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="트위터">
            <img src={iconTwitter} alt="" className="sns-icon" aria-hidden="true" />
          </a>
        </div>

        {/* ... 하단 링크 및 주소 영역은 동일 ... */}
        <div className="footer-links">
          <Link to="/privacy" className="bold-link">개인정보처리방침</Link>
          <Link to="/terms">이용약관</Link>
          <Link to="/test-page">찾아오시는길</Link>
        </div>

        <address className="footer-address">
          <p>04383 서울시 용산구 서빙고로 137(용산동6가 168-6)</p>
          <p>대표전화 02-0000-0000</p>
        </address>
      </div>
    </footer>
  );
};

export default Footer;