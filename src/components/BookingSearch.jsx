import React from 'react';
import './BookingSearch.css';

function BookingSearch() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 검색 로직 처리
  };

  return (
    <div className="booking-search-container">
      <form className="booking-search-form" onSubmit={handleSubmit} role="search">
        <div className="booking-search-input-wrapper">
          <label htmlFor="booking-search" className="sr-only">전시 검색어 입력</label>
          <input 
            type="text" 
            id="booking-search" 
            className="booking-search-input" 
            placeholder="검색어를 입력해주세요." 
          />
        </div>
        <div className="search-actions">
          <button type="submit" className="search-btn" aria-label="검색">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button type="button" className="voice-search-btn" aria-label="음성 검색">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingSearch;
