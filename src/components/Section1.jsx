import React from 'react';
import { Link } from 'react-router-dom';
import './Section1.css';

function Section1() {
  return (
    <section className="section1-cards" aria-label="추천 전시 및 예약 안내">
      <h2 className="sr-only">추천 전시 섹션</h2>
      <article className="section1-card">
        <img 
          src="/src/assets/section01_1.jpg" 
          alt="" 
          className="section1-card-bg" 
          aria-hidden="true" 
        />
        <div className="section1-card-overlay">
          <div className="section1-card-text">
            <h3 className="section1-card-title">지금 꼭 봐야할 특별 전시</h3>
            <p className="section1-card-desc">국보급 유물을 한자리에서 만나는 기회</p>
          </div>
          <Link 
            to="/booking" 
            className="section1-card-btn" 
            aria-label="지금 꼭 봐야할 특별 전시 예약 페이지로 이동"
          >
            더 많은 전시 확인하기 &rarr;
          </Link>
        </div>
      </article>

      <article className="section1-card">
        <img 
          src="/src/assets/section01_2.jpg" 
          alt="" 
          className="section1-card-bg" 
          aria-hidden="true" 
        />
        <div className="section1-card-overlay">
          <div className="section1-card-text">
            <h3 className="section1-card-title">조용히 즐기는 상설전시</h3>
            <p className="section1-card-desc">반가사유상과 함께하는 명상의 시간</p>
          </div>
          <Link 
            to="/booking" 
            className="section1-card-btn" 
            aria-label="조용히 즐기는 상설전시 예약 페이지로 이동"
          >
            더 많은 전시 확인하기 &rarr;
          </Link>
        </div>
      </article>

      <article className="section1-card">
        <img 
          src="/src/assets/section01_3.jpg" 
          alt="" 
          className="section1-card-bg" 
          aria-hidden="true" 
        />
        <div className="section1-card-overlay">
          <div className="section1-card-text">
            <h3 className="section1-card-title">함께하는 어린이 박물관</h3>
            <p className="section1-card-desc">체험관 전시로 역사를 쉽고 재미있게</p>
          </div>
          <Link 
            to="/booking/kids" 
            className="section1-card-btn" 
            aria-label="함께하는 어린이 박물관 예약 페이지로 이동"
          >
            더 많은 전시 확인하기 &rarr;
          </Link>
        </div>
      </article>
    </section>
  );
}

export default Section1;

