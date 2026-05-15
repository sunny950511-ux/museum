import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ReservationHeader.css';
import logoImage from '../assets/minilogo.jpg';

const ReservationHeader = ({ title, currentStep, totalSteps, onClose, onStepClick }) => {
  const navigate = useNavigate();

  // onClose가 없을 때의 기본 동작
  const defaultClose = () => navigate('/booking');

  return (
    <header className="reservation-header">
      <div className="header-top">
        <div className="header-title-container">
          <Link to="/" className="logo-link" aria-label="메인 페이지로 이동">
            <img src={logoImage} alt="" className="header-logo" aria-hidden="true" />
          </Link>
          <h1 className="header-title">{title}</h1>
        </div>
        <button 
          className="close-button" 
          aria-label="예약 취소 및 돌아가기"
          onClick={onClose || defaultClose}
          type="button"
          style={{ 
            padding: '20px', // 터치 반경 대폭 확대
            marginRight: '-10px', 
            position: 'relative', 
            zIndex: 9999 
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="header-bottom">
        <span className="step-indicator">STEP {String(currentStep).padStart(2, '0')}</span>
        <div className="progress-bar">
          {Array.from({ length: totalSteps }).map((_, index) => {
            const stepNum = index + 1;
            const isAccessible = stepNum <= currentStep; // 현재보다 작거나 같은 단계만 클릭 가능
            
            return (
              <div 
                key={index} 
                className={`progress-segment ${index === currentStep - 1 ? 'active' : ''} ${isAccessible ? 'clickable' : ''}`}
                onClick={() => isAccessible && onStepClick && onStepClick(stepNum)}
                title={isAccessible ? `STEP ${stepNum}으로 이동` : '다음 단계를 완료해 주세요'}
              />
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default ReservationHeader;
