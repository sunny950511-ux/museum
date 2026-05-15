import React, { useEffect } from 'react';
import './TestPage.css';

const TestPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="test-page" id="main-content">
      <div className="test-container">
        <div className="test-content">
          <div className="test-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <h1 className="test-title">테스트용 페이지입니다.</h1>
          <p className="test-desc">
            현재 요청하신 메뉴는 준비 중입니다.<br />
            빠른 시일 내에 정식 서비스로 찾아뵙겠습니다.
          </p>
          <button onClick={() => window.history.back()} className="test-back-btn">
            이전으로 돌아가기
          </button>
        </div>
      </div>
    </main>
  );
};

export default TestPage;
