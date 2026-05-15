import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookingSearch from '../components/BookingSearch';
import BookingNotice from '../components/BookingNotice';
import './Booking.css';

function Booking() {
  // 스크롤을 상단으로 이동 (페이지 전환 시)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const exhibitions = [
    {
      id: 1,
      type: 'kids',
      name: '어린이박물관 관람 예약',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      path: '/booking/kids',
      description: '어린이박물관은 인터넷 예약을 통해 관람하실 수 있으며 무료관람입니다.'
    },
    {
      id: 2,
      type: 'special',
      name: 'VR체험 예약(디지털 실감 영상관 2)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
          <path d="M9 16v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2" />
          <path d="M8 12h.01M16 12h.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      path: '/booking/special',
      description: '가상현실(VR) 체험은 인터넷 예약 후 관람하실 수 있습니다. 가상현실(VR) 체험을 제외한 디지털 실감 영상관 콘텐츠는 예약 없이 관람 가능합니다.'
    },
    {
      id: 3,
      type: 'education',
      name: '교육 프로그램 예약',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
          <path d="M12 16v4" />
          <path d="M8 20h8" />
          <path d="M8 9l2 2 4-4" />
        </svg>
      ),
      path: '/booking/education',
      description: '박물관 교육프로그램은 청소년, 성인, 장애인, 외국인, 전문인력등 다양한 계층을 대상으로 교육프로그램을 제공하고 있습니다.'
    },
    {
      id: 4,
      type: 'group',
      name: '학생 단체 관람 예약',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 14c-4.42 0-8 2.69-8 6v1h16v-1c0-3.31-3.58-6-8-6z" />
          <circle cx="12" cy="7" r="4" />
          <path d="M6 15c-3.31 0-6 2.01-6 4.5V20h3" />
          <circle cx="5" cy="8" r="3" />
          <path d="M18 15c3.31 0 6 2.01 6 4.5V20h-3" />
          <circle cx="19" cy="8" r="3" />
        </svg>
      ),
      path: '/booking/group',
      description: '초.중.고등학교 학생 단체(30명 이상)대상의 박물관 관람은 사전예약제로 운영하고 있습니다.'
    },
    {
      id: 5,
      type: 'commentary',
      name: '전시 해설 예약',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <circle cx="9" cy="12" r="3" />
          <path d="M15 12v.01" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 16v.01" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 8v.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      path: '/booking/commentary',
      description: '태블릿 PC를 활용한 스마트 큐레이터, 야외 전시해설 등 테마형 전시 관람 안내 서비스를 제공하고 있습니다.'
    },
    {
      id: 6,
      type: 'external',
      name: '외부해설 예약',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0-9-9c0 1.48.36 2.89 1 4.14L3 21l4.86-1c1.25.64 2.66 1 4.14 1z" />
          <path d="M9 12h.01" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 12h.01" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 12h.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      path: '/booking/external',
      description: '박물관 공식해설이 아닌 직접 해설을 하는 단체는 사전 예약 후 관람이 가능합니다.'
    }
  ];


  return (
    <main className="booking-page" role="main" id="main-content">
      <header className="booking-header">
        <h1 className="booking-title">전시 관람 예약</h1>
        <p className="booking-subtitle">관람하실 전시 종류를 선택해 주세요.</p>
      </header>

      <BookingSearch />

      <section className="user-profile" aria-label="사용자 정보">

        <img 
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120" 
          alt="" 
          className="profile-img"
          aria-hidden="true"
        />
        <div className="profile-info">
          <span className="user-name">홍길동 님</span>
          <span className="user-status">통합예약회원 | 본인인증 완료</span>
        </div>

      </section>

      <nav className="booking-nav" aria-label="전시 예약 목록">
        <ul className="exhibition-list">
          {exhibitions.map((ex) => (
            <li key={ex.id} className={`exhibition-item ${ex.type}`}>
              <Link 
                to={ex.path} 
                className="exhibition-card"
                aria-label={`${ex.name} 예약 페이지로 이동`}
              >
                <div className="exhibition-main">
                  <div className="exhibition-icon-wrap" aria-hidden="true">
                    {ex.icon}
                  </div>
                  <div className="exhibition-info">
                    <h2 className="exhibition-name">{ex.name}</h2>
                    <p className="exhibition-desc">{ex.description}</p>
                  </div>
                </div>
                <span className="arrow-icon" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <BookingNotice />
    </main>
  );
}

export default Booking;
