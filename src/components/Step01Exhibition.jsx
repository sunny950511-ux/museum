import React from 'react';
import BookingSearch from './BookingSearch';
import './Step01Exhibition.css';

// 이미지 임포트
import kids1 from '../assets/kids1.jpg';
import kids2 from '../assets/kids2.jpg';
import kids3 from '../assets/kids3.jpg';
import kids4 from '../assets/kids4.jpg';
import kids5 from '../assets/kids5.jpg';
import kids6 from '../assets/kids6.jpg';

const Step01Exhibition = ({ onExhibitionSelect }) => {
  const exhibitions = [
    { id: 1, title: '문화유산 속 마음', image: kids1, location: '[국립중앙박물관]' },
    { id: 2, title: '아하! 발견과 공감', image: kids2, location: '[국립중앙박물관]' },
    { id: 3, title: '제페토', image: kids3, location: '[국립중앙박물관]' },
    { id: 4, title: '놀라운 동식물 친구들', image: kids4, location: '[국립중앙박물관]' },
    { id: 5, title: '와글와글! 숲속 탐험대', image: kids5, location: '[국립중앙박물관]' },
    { id: 6, title: '어린이 전통문화 대모험', image: kids6, location: '[국립부여박물관]' },
  ];

  return (
    <section className="step01-exhibition">
      <BookingSearch />
      <div className="booking-intro">
        <h2 className="section-title">어린이 박물관 관람 예약</h2>
        <p className="section-desc">현재 예약 가능한 어린이 박물관 전시 목록입니다.</p>
      </div>

      <div className="exhibition-card-list">
        {exhibitions.map((ex) => (
          <article key={ex.id} className="exhibition-card premium">
            <img src={ex.image} alt="" className="card-bg-image" />
            <div className="card-overlay"></div>
            <div className="card-content">
              <div className="card-info-top">
                <span className="card-location">{ex.location}</span>
                <h3 className="card-title-main">{ex.title}</h3>
              </div>
              <div className="card-info-bottom">
                <button type="button" className="more-btn" onClick={() => onExhibitionSelect(ex)}>
                  관람 예약하기 &rarr;
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Step01Exhibition;
