import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookingSearch from '../components/BookingSearch';
import BookingNotice from '../components/BookingNotice';
import './Booking.css';
import icon1 from '../assets/icon1.jpg';
import icon2 from '../assets/icon2.jpg';
import icon3 from '../assets/icon3.jpg';
import icon4 from '../assets/icon4.jpg';
import icon5 from '../assets/icon5.jpg';
import icon6 from '../assets/icon6.jpg';

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
      icon: <img src={icon1} alt="" className="booking-icon" />,
      path: '/booking/kids',
      description: '어린이박물관은 인터넷 예약을 통해 관람하실 수 있으며 무료관람입니다.'
    },
    {
      id: 2,
      type: 'special',
      name: 'VR체험 예약(디지털 실감 영상관 2)',
      icon: <img src={icon2} alt="" className="booking-icon" />,
      path: '/booking/special',
      description: '가상현실(VR) 체험은 인터넷 예약 후 관람하실 수 있습니다. 가상현실(VR) 체험을 제외한 디지털 실감 영상관 콘텐츠는 예약 없이 관람 가능합니다.'
    },
    {
      id: 3,
      type: 'education',
      name: '교육 프로그램 예약',
      icon: <img src={icon3} alt="" className="booking-icon" />,
      path: '/booking/education',
      description: '박물관 교육프로그램은 청소년, 성인, 장애인, 외국인, 전문인력등 다양한 계층을 대상으로 교육프로그램을 제공하고 있습니다.'
    },
    {
      id: 4,
      type: 'group',
      name: '학생 단체 관람 예약',
      icon: <img src={icon4} alt="" className="booking-icon" />,
      path: '/booking/group',
      description: '초.중.고등학교 학생 단체(30명 이상)대상의 박물관 관람은 사전예약제로 운영하고 있습니다.'
    },
    {
      id: 5,
      type: 'commentary',
      name: '전시 해설 예약',
      icon: <img src={icon5} alt="" className="booking-icon" />,
      path: '/booking/commentary',
      description: '태블릿 PC를 활용한 스마트 큐레이터, 야외 전시해설 등 테마형 전시 관람 안내 서비스를 제공하고 있습니다.'
    },
    {
      id: 6,
      type: 'external',
      name: '외부해설 예약',
      icon: <img src={icon6} alt="" className="booking-icon" />,
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
