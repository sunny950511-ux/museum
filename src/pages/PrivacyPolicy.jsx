import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PolicyPage.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="policy-page" id="main-content">
      <div className="policy-container">
        <header className="policy-header">
          <h1 className="policy-title">개인정보 처리방침</h1>
          <p className="policy-date">시행일자: 2024년 5월 14일</p>
        </header>

        <div className="policy-content">
          <div className="policy-intro">
            국립중앙박물관은 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침을 수립·공개합니다.
          </div>

          <section className="policy-section">
            <h2 className="section-title">1. 개인정보의 처리 목적</h2>
            <p className="policy-text">
              박물관은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ul className="policy-list">
              <li>홈페이지 회원 가입 및 관리</li>
              <li>민원사무 처리</li>
              <li>전시 및 행사 예약 서비스 제공</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-title">2. 개인정보의 처리 및 보유 기간</h2>
            <p className="policy-text">
              박물관은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="section-title">3. 정보주체의 권리·의무 및 행사방법</h2>
            <p className="policy-text">
              정보주체는 박물관에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="section-title">4. 처리하는 개인정보 항목</h2>
            <ul className="policy-list">
              <li>필수항목: 이름, 연락처, 이메일</li>
              <li>자동수집항목: IP주소, 쿠키, 서비스 이용기록, 방문기록 등</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-title">5. 개인정보 보호책임자</h2>
            <p className="policy-text">
              개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <ul className="policy-list">
              <li>담당부서: 국립중앙박물관 정보화추진단</li>
              <li>연락처: 02-2077-9000</li>
            </ul>
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

export default PrivacyPolicy;
