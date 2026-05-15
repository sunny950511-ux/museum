import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PolicyPage.css';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="policy-page" id="main-content">
      <div className="policy-container">
        <header className="policy-header">
          <h1 className="policy-title">이용약관</h1>
          <p className="policy-date">최종 수정일: 2024년 5월 14일</p>
        </header>

        <div className="policy-content">
          <div className="policy-intro">
            이 약관은 국립중앙박물관이 운영하는 홈페이지에서 제공하는 인터넷 관련 서비스의 이용조건 및 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.
          </div>

          <section className="policy-section">
            <h2 className="section-title">제1조 (목적)</h2>
            <p className="policy-text">
              본 약관은 국립중앙박물관 홈페이지가 제공하는 모든 서비스의 이용조건 및 절차, 이용자와 홈페이지의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="section-title">제2조 (약관의 효력과 변경)</h2>
            <p className="policy-text">
              1. 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 공지함으로써 효력이 발생합니다.<br />
              2. 박물관은 관련 법령에 위배되지 않는 범위 내에서 이 약관을 개정할 수 있습니다.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="section-title">제3조 (서비스 이용)</h2>
            <p className="policy-text">
              이용자는 본 약관 및 박물관이 정한 서비스 이용 안내 사항을 준수하여야 합니다. 전시 예약 및 교육 신청 등의 서비스는 박물관의 운영 정책에 따라 제한되거나 변경될 수 있습니다.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="section-title">제4조 (이용자의 의무)</h2>
            <p className="policy-text">
              이용자는 다음 행위를 하여서는 안 됩니다.
            </p>
            <ul className="policy-list">
              <li>신청 또는 변경 시 허위내용의 등록</li>
              <li>타인의 정보 도용</li>
              <li>홈페이지에 게시된 정보의 변경</li>
              <li>박물관이 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-title">제5조 (저작권의 귀속)</h2>
            <p className="policy-text">
              박물관이 작성한 저작물에 대한 저작권 및 기타 지적재산권은 박물관에 귀속됩니다. 이용자는 서비스를 이용하며 얻은 정보를 박물관의 사전 승낙 없이 복제, 송신, 출판, 배포할 수 없습니다.
            </p>
          </section>
        </div>

        <footer className="policy-footer">
          <Link to="/">
            <button className="btn-back-home">홈으로 돌아가기</button>
          </Link>
        </footer>
      </div>
    </main>
  );
};

export default TermsOfService;
