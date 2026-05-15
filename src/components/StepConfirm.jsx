import React from 'react';

function StepConfirm({ data, onNext, onPrev }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form className="step-container" onSubmit={handleSubmit}>
      <p className="step-title">선택하신 예약 정보를 확인해 주세요.</p>
      
      <div className="confirm-box">
        <dl className="confirm-list">
          <dt className="confirm-term">선택 전시</dt>
          <dd className="confirm-desc">
            {data.exhibit?.title}
          </dd>
          
          <dt className="confirm-term">방문 날짜</dt>
          <dd className="confirm-desc">
            {data.date?.label}
          </dd>
          
          <dt className="confirm-term">입장 회차</dt>
          <dd className="confirm-desc">
            {data.time?.label}
          </dd>
        </dl>
      </div>

      <div className="step-actions">
        <button type="button" className="btn-secondary" onClick={onPrev}>
          수정하기
        </button>
        <button type="submit" className="btn-primary">
          예약 확정하기
        </button>
      </div>
    </form>
  );
}

export default StepConfirm;
