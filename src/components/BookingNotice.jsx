import React from 'react';
import './BookingNotice.css';

function BookingNotice() {
  return (
    <section className="booking-notice" aria-labelledby="notice-title">
      <div className="notice-header">
        <div className="notice-icon-wrap" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
        <h2 id="notice-title" className="notice-title">예약 안내 및 주의사항</h2>
      </div>

      <div className="notice-content">
        <div className="notice-item">
          <h3 className="item-title">예약안내</h3>
          <ul className="item-description">
            <li>어린이박물관은 온라인(on-line)으로 예약하여 무료로 관람하실 수 있습니다.</li>
            <li>1회 예약 가능 수량은 최대 5매이며, 1인당 1일 1회만(개인 및 단체포함) 예약 가능 합니다.</li>
            <li>이 탭은 ‘개인예약’ 창 입니다. 단체 입장은 ‘단체 예약’ 탭을 이용해 주세요.</li>
            <li>예약은 관람일 14일 전 00시부터 가능하며, 매 회차 시작 50분 후 해당 회차의 예약이 마감됩니다.</li>
            <li>예약 취소는 예약하신 회차 시작 시간 이전까지 가능합니다.</li>
            <li>회차 시작 후 30분 내 입장하지 않으면 온라인 예약 내역이 자동 취소됩니다. (*미입장 수량은 해당 회차에 대한 개인 온라인 예약 가능 티켓으로 전환됩니다.)</li>
          </ul>
        </div>

        <div className="notice-item limit-notice">
          <h3 className="item-title">[관람 제한 사항]</h3>
          <p className="item-description highlight">
            예약 취소 없이 회차 시작 후 30분까지 입장하지 않는 고객은 예약 부도일로부터 60일간 어린이박물관 관람이 제한되며, 관람제한 기간의 모든 예약이 취소됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BookingNotice;
