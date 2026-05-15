import React from 'react';
import './MyPageOverlay.css';

const MyPageOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mypage-overlay" onClick={onClose}>
      <div className="mypage-sidebar" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="mypage-close-btn" onClick={onClose} aria-label="닫기">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="mypage-profile">
          <div className="profile-image">👤</div>
          <div className="profile-info">
            <h2 className="user-name">홍길동 님</h2>
            <p className="user-grade">골드 등급 멤버</p>
          </div>
        </div>

        <nav className="mypage-menu">
          <div className="menu-group">
            <h3 className="group-title">나의 예약</h3>
            <ul>
              <li className="menu-item">
                <span className="label">현재 예약 정보</span>
                <span className="badge">2</span>
              </li>
              <li className="menu-item">지난 예약 내역</li>
            </ul>
          </div>

          <div className="menu-group">
            <h3 className="group-title">나의 활동</h3>
            <ul>
              <li className="menu-item">찜한 전시</li>
              <li className="menu-item">나의 문의내역</li>
              <li className="menu-item">회원정보 수정</li>
            </ul>
          </div>
        </nav>

        <footer className="mypage-footer">
          <button type="button" className="logout-btn">로그아웃</button>
        </footer>
      </div>
    </div>
  );
};

export default MyPageOverlay;
