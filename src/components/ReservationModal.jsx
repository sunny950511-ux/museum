import React, { useState, useEffect, useRef } from 'react';
import './ReservationModal.css';
import StepExhibit from './StepExhibit';
import StepDateTime from './StepDateTime';
import StepConfirm from './StepConfirm';
import StepComplete from './StepComplete';

function ReservationModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [reservationData, setReservationData] = useState({
    exhibit: null,
    date: null,
    time: null,
  });
  
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // 접근성: 모달이 열릴 때 포커스 이동 및 외부 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const updateData = (key, value) => {
    setReservationData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="modal-overlay" role="presentation" onClick={(e) => {
      if(e.target.className === 'modal-overlay') onClose();
    }}>
      <div 
        className="modal-container" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title"
        ref={modalRef}
        tabIndex="-1"
      >
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">
            {step === 1 && '전시 선택'}
            {step === 2 && '날짜 및 회차 선택'}
            {step === 3 && '예약 정보 확인'}
            {step === 4 && '예약 완료'}
          </h2>
          {step < 4 && (
            <button 
              ref={closeButtonRef}
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="예약 창 닫기"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
        
        <div className="modal-body">
          {step === 1 && (
            <StepExhibit 
              data={reservationData} 
              onSelect={(exhibit) => updateData('exhibit', exhibit)} 
              onNext={handleNextStep} 
            />
          )}
          {step === 2 && (
            <StepDateTime 
              data={reservationData} 
              onUpdate={updateData} 
              onNext={handleNextStep}
              onPrev={handlePrevStep}
            />
          )}
          {step === 3 && (
            <StepConfirm 
              data={reservationData} 
              onNext={handleNextStep}
              onPrev={handlePrevStep}
            />
          )}
          {step === 4 && (
            <StepComplete 
              data={reservationData} 
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ReservationModal;
