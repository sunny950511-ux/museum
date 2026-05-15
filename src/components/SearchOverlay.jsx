import React, { useState } from 'react';
import './SearchOverlay.css';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchValue, setSearchValue] = useState('');
  const recentSearches = ['국보', '기획전시', '어린이 박물관', '반가사유상', '특별전'];

  if (!isOpen) return null;

  return (
    <div className="search-overlay">
      <div className="search-container">
        <header className="search-header">
          <h2 className="search-title">검색하기</h2>
          <button type="button" className="close-btn" onClick={onClose} aria-label="검색 닫기">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>

        <div className="search-input-section">
          <div className="search-input-wrapper">
            <input 
              type="text" 
              className="search-input" 
              placeholder="전시명을 입력해주세요."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              autoFocus
            />
            <button type="button" className="search-submit-btn" aria-label="검색 실행">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="search-history-section">
          <h3 className="section-title">최근 검색어</h3>
          <div className="history-tags">
            {recentSearches.map((keyword, index) => (
              <div key={index} className="history-tag">
                <span>{keyword}</span>
                <button type="button" className="remove-tag-btn" aria-label={`${keyword} 삭제`}>×</button>
              </div>
            ))}
          </div>
        </div>

        <div className="popular-section">
          <h3 className="section-title">인기 전시</h3>
          <ul className="popular-list">
            <li><span className="rank">1</span> <span className="text">영원한 여정, 특별한 동행</span></li>
            <li><span className="rank">2</span> <span className="text">조선 왕실의 의례</span></li>
            <li><span className="rank">3</span> <span className="text">반가사유상과 명상</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
