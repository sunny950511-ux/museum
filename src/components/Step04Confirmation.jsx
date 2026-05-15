import React from 'react';
import './Step04Confirmation.css';

const Step04Confirmation = ({ 
  exhibition, 
  reservationData, 
  visitorInfo, 
  onPrev,
  onNext
}) => {
  const handleConfirm = () => {
    // 실제 서버 연동 시 API 호출 및 메시지 발송이 일어나는 부분
    alert(`[발송 완료] ${visitorInfo.phone} 번호로 예약 확정 알림톡이 발송되었습니다.`);
    onNext();
  };

  // 날짜 포맷 (예: 2026년 5월 14일)
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayName = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
    return `${year}년 ${month}월 ${day}일 (${dayName})`;
  };

  return (
    <div className="step-confirmation-container mobile-view">
      <section className="confirmation-header">
        <h2 className="confirmation-title">
          <span className="exhibition-prefix">[{exhibition?.title}]</span>
          예약 정보 확인
        </h2>
        <p className="confirmation-subtitle">입력하신 정보가 맞는지 다시 한 번 확인해 주세요.</p>
      </section>

      <div className="confirmation-content-wrapper">
        <section className="confirmation-card">
        <div className="info-row">
          <span className="info-label">예약 일시</span>
          <div className="info-value">
            <div className="date-text">{formatDate(reservationData?.date)}</div>
            <div className="time-text">{reservationData?.time} ({reservationData?.slotId}회차)</div>
          </div>
        </div>

        <div className="info-row">
          <span className="info-label">관람 인원</span>
          <span className="info-value">
            성인 {visitorInfo.adultCount}명 
            {visitorInfo.childCount > 0 && ` / 어린이·청소년 ${visitorInfo.childCount}명`}
          </span>
        </div>

        <div className="info-row">
          <span className="info-label">예약자명</span>
          <span className="info-value">{visitorInfo.name}</span>
        </div>

        <div className="info-row">
          <span className="info-label">연락처</span>
          <span className="info-value">{visitorInfo.phone}</span>
        </div>
      </section>

      <section className="notice-box">
        <h4 className="notice-title">안내사항</h4>
        <ul className="notice-list">
          <li>입장 시 예약 확정 문자를 보여주셔야 합니다.</li>
          <li>예약 취소는 관람 시작 1시간 전까지만 가능합니다.</li>
          <li>당일 현장 상황에 따라 입장이 지연될 수 있습니다.</li>
        </ul>
        </section>
      </div>

      <div className="step-actions fixed-bottom-actions">
        <button type="button" className="btn-prev" onClick={onPrev}>이전으로</button>
        <button type="button" className="btn-confirm" onClick={handleConfirm}>예약 확정하기</button>
      </div>
    </div>
  );
};

export default Step04Confirmation;
