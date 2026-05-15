import React, { useEffect, useRef } from 'react';

function StepComplete({ data, onClose }) {
  const focusRef = useRef(null);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  return (
    <div className="step-container center">
      <div 
        ref={focusRef}
        role="status" 
        aria-live="polite"
        tabIndex="-1"
      >
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="success-icon" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h3 className="success-title">
          예약이 성공적으로 완료되었습니다.
        </h3>
        <p className="success-message">
          {data.date?.label} {data.time?.label}에<br/>
          <strong>{data.exhibit?.title}</strong>에서 뵙겠습니다.
        </p>
      </div>

      <div className="step-actions center">
        <button type="button" className="btn-primary wide" onClick={onClose}>
          메인으로 돌아가기
        </button>
      </div>
    </div>
  );
}

export default StepComplete;
