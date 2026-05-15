import React, { useRef, useState, useEffect } from 'react';
import './Section5.css';
import exhibition1 from '../assets/exhibition1.jpg';
import exhibition2 from '../assets/exhibition2.jpg';
import exhibition3 from '../assets/exhibition3.jpg';
import exhibition4 from '../assets/exhibition4.jpg';
import exhibition5 from '../assets/exhibition5.jpg';

const exhibitions = [
  { id: 1, image: exhibition1, title: '온라인 전시 1 - 세계 유산의 미' },
  { id: 2, image: exhibition2, title: '온라인 전시 2 - 국립중앙박물관 소장 명품' },
  { id: 3, image: exhibition3, title: '온라인 전시 3 - 고려의 빛, 청자' },
  { id: 4, image: exhibition4, title: '온라인 전시 4 - 조선왕실의 의례' },
  { id: 5, image: exhibition5, title: '온라인 전시 5 - 반가사유상과의 만남' },
];

function Section5() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  // 화면 크기에 따라 한 번에 보이는 아이템 개수 계산
  const updateVisibleItems = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setVisibleItems(1);
    } else if (width < 1024) {
      setVisibleItems(2);
    } else {
      setVisibleItems(3);
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const totalPages = exhibitions.length - visibleItems + 1;

  const scrollToIndex = (index) => {
    if (scrollRef.current && scrollRef.current.firstChild) {
      const itemWidth = scrollRef.current.firstChild.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIndex = currentIndex === 0 ? totalPages - 1 : currentIndex - 1;
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === totalPages - 1 ? 0 : currentIndex + 1;
    scrollToIndex(nextIndex);
  };

  return (
    <section className="section-online" aria-labelledby="online-title">
      <div className="online-container">
        <div className="online-header">
          <div className="online-header-left">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="online-icon">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <h2 id="online-title" className="online-title">온라인 전시관</h2>
          </div>

        <div className="online-carousel-container">
          <div className="online-carousel-wrapper" ref={scrollRef} role="region" aria-label="온라인 전시관 리스트">
            {exhibitions.map((item) => (
              <div key={item.id} className="online-item">
                <a href={`#online-${item.id}`} className="online-image-link" aria-label={item.title}>
                  <div className="online-image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="online-image" 
                    />
                  </div>
                </a>
                <p className="online-exhibition-title" title={item.title}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="online-header-nav">
          <button type="button" className="nav-btn" onClick={handlePrev} aria-label="이전 전시">
            &lt;
          </button>
          <span className="page-indicator">
            <span className="current">{currentIndex + 1}</span> / {totalPages}
          </span>
          <button type="button" className="nav-btn" onClick={handleNext} aria-label="다음 전시">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section5;