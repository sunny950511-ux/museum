import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step05Complete.css';

const Step05Complete = ({ visitorInfo, exhibition, reservationData }) => {
  const navigate = useNavigate();

  const handleCheckReservation = () => {
    // 마이페이지나 예약 확인 페이지로 이동 (임시로 메인 페이지)
    navigate('/');
  };

  const handleCancelReservation = () => {
    if (window.confirm("정말 예약을 취소하시겠습니까?")) {
      alert("예약이 취소되었습니다.");
      navigate('/');
    }
  };

  // 전화번호 마스킹 처리 (선택사항, 프라이버시 보호)
  const formatPhone = (phone) => {
    if (!phone) return '';
    const parts = phone.split('-');
    if (parts.length === 3) {
      return `${parts[0]}-****-${parts[2]}`;
    }
    return phone;
  };

  return (
    <div className="step-complete-container">
      <div className="complete-icon-wrapper">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#003366"/>
          <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <h2 className="complete-title">예약이 확정되었습니다!</h2>
      <p className="complete-desc">
        관람권 및 상세 안내는 입력하신 <strong>{formatPhone(visitorInfo?.phone)}</strong> 번호로 발송된 문자(또는 카카오톡)를 확인해 주세요.
      </p>

      <div className="complete-summary-box">
        <h3 className="summary-title">{exhibition?.title}</h3>
        <div className="summary-info-group">
          <p className="summary-info"><strong>일시:</strong> {reservationData?.date} {reservationData?.time}</p>
          <p className="summary-info"><strong>인원:</strong> 총 {visitorInfo?.adultCount + visitorInfo?.childCount}명</p>
        </div>
      </div>

      <div className="complete-actions">
        <button type="button" className="btn-check" onClick={handleCheckReservation}>나의 예약 확인하기</button>
        <button type="button" className="btn-cancel" onClick={handleCancelReservation}>예약 취소하기</button>
      </div>
    </div>
  );
};

export default Step05Complete;
