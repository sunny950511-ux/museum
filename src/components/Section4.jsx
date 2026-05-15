import React from 'react';
import './Section4.css';

const events = [
  {
    id: 1,
    image: '/src/assets/festival1.jpg',
    category: '가족뮤지컬',
    title: '<태권날아올라>',
    period: '2026.04.04~2026.05.25',
  },
  {
    id: 2,
    image: '/src/assets/festival2.jpg',
    category: '뮤지엄모먼트',
    title: '<유물로 만나는 흑역사>',
    period: '2026.04.04~2026.05.25',
  },
  {
    id: 3,
    image: '/src/assets/festival3.jpg',
    category: '유물로 읽는 삶',
    title: '<21세기, 어른으로 살아가는 법>',
    period: '2026.04.04~2026.05.25',
  },
  {
    id: 4,
    image: '/src/assets/festival4.jpg',
    category: '2026년',
    title: '박물관문화향연',
    period: '2026.04.04~2026.05.25',
  },
  {
    id: 5,
    image: '/src/assets/festival5.jpg',
    category: '지역 국립박물관',
    title: '<나의 박물관(MYSEUM):타악>',
    period: '2026.04.04~2026.05.25',
  },
  {
    id: 6,
    image: '/src/assets/festival1.jpg',
    category: '특별전시',
    title: '<영원한 여정, 특별한 동행>',
    period: '2026.06.01~2026.08.31',
  },
  {
    id: 7,
    image: '/src/assets/festival2.jpg',
    category: '전시해설',
    title: '상설전시 연계 프로그램',
    period: '2026.04.10~2026.11.30',
  },
  {
    id: 8,
    image: '/src/assets/festival3.jpg',
    category: '체험프로그램',
    title: '가족과 함께하는 주말 공예',
    period: '매주 토/일요일',
  },
  {
    id: 9,
    image: '/src/assets/festival4.jpg',
    category: '청소년 교육',
    title: '진로탐색: 박물관 직업',
    period: '2026.05.01~2026.07.15',
  },
  {
    id: 10,
    image: '/src/assets/festival5.jpg',
    category: '야간 행사',
    title: '<별빛 아래 박물관> 음악회',
    period: '2026.09.15~2026.09.30',
  }
];

function Section4() {
  return (
    <section className="section-events" aria-labelledby="events-title">
      <div className="events-container">
        <div className="events-header">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="events-icon">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <h2 id="events-title" className="events-title">행사</h2>
        </div>

        <ul className="events-list" aria-label="행사 목록">
          {events.map(event => (
            <li key={event.id} className="event-item">
              <a href={`#event-${event.id}`} className="event-link" aria-label={`${event.category} ${event.title} (${event.period})`}>
                <div className="event-image-wrap">
                  <img src={event.image} alt="" className="event-image" aria-hidden="true" />
                </div>
                <div className="event-info">
                  <span className="event-category">{event.category}</span>
                  <span className="event-name">{event.title}</span>
                  <span className="event-period">{event.period}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Section4;
