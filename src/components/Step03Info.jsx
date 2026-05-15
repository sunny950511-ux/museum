import React from 'react';
import './Step03Info.css';

const Step03Info = ({ visitorInfo, setVisitorInfo, onPrev, onNext, isIntegrated = false }) => {
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    let formatted = value;
    if (value.length > 3 && value.length <= 7) {
      formatted = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length > 7) {
      formatted = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
    }
    setVisitorInfo({ ...visitorInfo, phone: formatted });
  };

  return (
    <section className={`visitor-info-section ${isIntegrated ? 'integrated' : 'standalone'}`}>
      {!isIntegrated && (
        <div className="accessibility-guide standalone-guide">
          <div className="guide-box">
            <div className="guide-icon">📢</div>
            <div className="guide-content">
              <h4 className="guide-title">세 번째</h4>
              <p className="guide-desc">예약자 정보를 정확히 입력해 주세요.</p>
            </div>
          </div>
        </div>
      )}

      <div className="info-header">
        <h3 className="info-title">예약자 정보 입력</h3>
      </div>
      
      <div className="info-form">
        <div className="form-group">
          <label htmlFor="visitor-name">예약자 성함</label>
          <input 
            id="visitor-name"
            type="text" 
            value={visitorInfo.name} 
            onChange={(e) => setVisitorInfo({...visitorInfo, name: e.target.value})} 
            placeholder="성함을 입력하세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="visitor-phone">연락처</label>
          <input 
            id="visitor-phone"
            type="tel" 
            value={visitorInfo.phone} 
            onChange={handlePhoneChange} 
            placeholder="010-0000-0000" 
            maxLength="13"
          />
        </div>
        <div className="visitor-count-group">
          <div className="count-item">
            <div className="count-label"><span className="type">성인</span><span className="price">무료</span></div>
            <div className="count-control">
              <button type="button" aria-label="성인 인원 감소" onClick={() => setVisitorInfo({...visitorInfo, adultCount: Math.max(1, visitorInfo.adultCount - 1)})}>-</button>
              <span>{visitorInfo.adultCount}</span>
              <button type="button" aria-label="성인 인원 증가" onClick={() => setVisitorInfo({...visitorInfo, adultCount: visitorInfo.adultCount + 1})}>+</button>
            </div>
          </div>
          <div className="count-item">
            <div className="count-label"><span className="type">어린이/청소년</span><span className="price">무료</span></div>
            <div className="count-control">
              <button type="button" aria-label="어린이/청소년 인원 감소" onClick={() => setVisitorInfo({...visitorInfo, childCount: Math.max(0, visitorInfo.childCount - 1)})}>-</button>
              <span>{visitorInfo.childCount}</span>
              <button type="button" aria-label="어린이/청소년 인원 증가" onClick={() => setVisitorInfo({...visitorInfo, childCount: visitorInfo.childCount + 1})}>+</button>
            </div>
          </div>
        </div>
      </div>

      {!isIntegrated && (
        <div className="step-actions standalone-actions">
          <button type="button" className="btn-prev" onClick={onPrev}>이전 단계</button>
          <button 
            type="button"
            className="btn-next-step" 
            disabled={!visitorInfo.name || visitorInfo.phone.length < 12}
            onClick={() => onNext(visitorInfo)}
          >
            다음 단계 (예약 정보 확인) →
          </button>
        </div>
      )}
    </section>
  );
};

export default Step03Info;
