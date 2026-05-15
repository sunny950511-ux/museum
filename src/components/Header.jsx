import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../assets/Rectangle.jpg';

import SearchOverlay from './SearchOverlay';
import MyPageOverlay from './MyPageOverlay';
import CategoryOverlay from './CategoryOverlay';

function Header() {
  const [activeOverlay, setActiveOverlay] = useState(null); // 'search', 'mypage', 'category', null

  const toggleOverlay = (type) => {
    setActiveOverlay(activeOverlay === type ? null : type);
  };

  return (
    <header className="header" role="banner">
      <div className="header-container">
        {/* Logo (터치 영역 고려) */}
        <Link to="/" className="logo-link" aria-label="국립중앙박물관 홈으로 가기">
          <img src={logoImage} alt="국립중앙박물관" className="logo-img" />
        </Link>

        {/* 네비게이션 액션 영역 */}
        <nav className="header-actions" aria-label="메인 메뉴">
          <button 
            type="button" 
            className={`icon-button ${activeOverlay === 'search' ? 'active' : ''}`}
            onClick={() => toggleOverlay('search')}
            aria-label="검색 열기"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button 
            type="button" 
            className={`icon-button ${activeOverlay === 'mypage' ? 'active' : ''}`}
            onClick={() => toggleOverlay('mypage')}
            aria-label="내 정보 보기"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <button 
            type="button" 
            className={`icon-button ${activeOverlay === 'category' ? 'active' : ''}`}
            onClick={() => toggleOverlay('category')}
            aria-label="전체 메뉴 열기" 
            aria-expanded={activeOverlay === 'category'} 
            aria-controls="main-menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>

        {/* 오버레이 컴포넌트들 */}
        <SearchOverlay 
          isOpen={activeOverlay === 'search'} 
          onClose={() => setActiveOverlay(null)} 
        />
        <MyPageOverlay 
          isOpen={activeOverlay === 'mypage'} 
          onClose={() => setActiveOverlay(null)} 
        />
        <CategoryOverlay 
          isOpen={activeOverlay === 'category'} 
          onClose={() => setActiveOverlay(null)} 
        />
      </div>
    </header>
  );
}

export default Header;
