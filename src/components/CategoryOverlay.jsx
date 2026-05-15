import React from 'react';
import './CategoryOverlay.css';

const CategoryOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const categories = [
    {
      title: '관람·참여',
      items: ['관람 안내', '예약하기', '단체 관람', '어린이 박물관']
    },
    {
      title: '전시',
      items: ['현재 전시', '예정 전시', '지난 전시', '온라인 전시']
    },
    {
      title: '교육·행사',
      items: ['교육 프로그램', '특별 강연', '문화 행사', '학술 행사']
    },
    {
      title: '박물관 소식',
      items: ['공지사항', '보도자료', '이벤트', '박물관 뉴스레터']
    }
  ];

  return (
    <div className="category-overlay">
      <div className="category-container">
        <header className="category-header">
          <div className="category-logo">VIBE MUSEUM</div>
          <button type="button" className="category-close-btn" onClick={onClose} aria-label="메뉴 닫기">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>

        <nav className="category-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="category-column">
              <h2 className="category-main-title">{cat.title}</h2>
              <ul className="category-list">
                {cat.items.map((item, i) => (
                  <li key={i} className="category-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="category-footer">
          <div className="quick-links">
            <span>자주 찾는 메뉴:</span>
            <a href="#">박물관 상품관</a>
            <a href="#">찾아오시는 길</a>
            <a href="#">조직 및 인원</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryOverlay;
