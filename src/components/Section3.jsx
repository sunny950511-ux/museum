import React, { useState } from 'react';
import './Section3.css';

function Section3() {
  const [activeTab, setActiveTab] = useState('알림');
  
  const tabs = ['알림', '고시/공고', '채용 안내', '보도자료'];
  
  const newsList = [
    { id: 1, title: '2026년 신규 자원봉사자(전시해설, 일반분야) 최종 합격자 공고', date: '2026.04.21' },
    { id: 2, title: '2026년 국립중앙박물관 상설전시관 불교회화실·불교조각실 안전시설(면진진열장 제작·설치) 강화 사업 제안서 평가 결과 알림', date: '2026.04.17' },
    { id: 3, title: '상설전시관 불교조각실(301호) 부분 임시 휴실 안내(4.28.화)', date: '2026.04.17' },
    { id: 4, title: '기증관 기증 4실(205호) 임시휴실 안내(~4.19.일)', date: '2026.04.13' },
    { id: 5, title: '2026 국립중앙박물관 자원봉사자(전시해설, 일반분야) 최종선발 전형 안내', date: '2026.04.13' },
    { id: 6, title: '상설전시관 서화실(202호) 임시 휴실 안내(4.27.월 - 5.3.일)', date: '2026.04.13' },
  ];

  return (
    <section className="section-news" aria-labelledby="news-title">
      <div className="news-container">
        <div className="news-header">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="news-icon">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          <h2 id="news-title" className="news-title">알립니다</h2>
        </div>
        
        <div className="news-content">
          <div className="news-tabs" role="tablist">
            {tabs.map(tab => (
              <button 
                key={tab}
                type="button" 
                role="tab"
                aria-selected={activeTab === tab}
                className={`news-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <ul className="news-list" aria-label={`${activeTab} 목록`}>
            {newsList.map(item => (
              <li key={item.id} className="news-item">
                <a href={`#news-${item.id}`} className="news-link">
                  <span className="news-item-title">{item.title}</span>
                  <span className="news-item-date">{item.date}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Section3;
