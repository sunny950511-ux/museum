import React from 'react';

const exhibits = [
  { id: 'exhibit-1', title: '상설전시', desc: '한국의 역사와 문화' },
  { id: 'exhibit-2', title: '어린이박물관', desc: '체험형 어린이 전시' },
  { id: 'exhibit-3', title: '특별기획전', desc: '기간 한정 특별 전시' },
];

function StepExhibit({ data, onSelect, onNext }) {
  const isSelected = !!data.exhibit;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSelected) onNext();
  };

  return (
    <form className="step-container" onSubmit={handleSubmit}>
      <p className="step-title" id="exhibit-desc">관람하실 전시를 선택해 주세요.</p>
      
      <div className="radio-card-grid" role="radiogroup" aria-labelledby="exhibit-desc">
        {exhibits.map((item) => (
          <label key={item.id} className="radio-card-label">
            <input 
              type="radio" 
              name="exhibit" 
              className="radio-card-input"
              value={item.id}
              checked={data.exhibit?.id === item.id}
              onChange={() => onSelect(item)}
            />
            <div className="radio-card-content">
              <span className="radio-card-title">{item.title}</span>
              <span className="radio-card-desc">{item.desc}</span>
            </div>
          </label>
        ))}
      </div>

      <div className="step-actions">
        <button 
          type="submit" 
          className="btn-primary" 
          disabled={!isSelected}
          aria-disabled={!isSelected}
        >
          다음 단계
        </button>
      </div>
    </form>
  );
}

export default StepExhibit;
