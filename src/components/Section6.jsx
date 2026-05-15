import React from 'react';
import { Link } from 'react-router-dom';
import './Section6.css';

const managementLinks = [
  { id: 1, title: '관련사이트 바로가기' },
  { id: 2, title: '소속박물관 바로가기' },
  { id: 3, title: '안내도(PDF) 내려받기' },
  { id: 4, title: '소속박물관 뉴스레터' },
  { id: 5, title: '어린이 박물관' },
  { id: 6, title: '학예사 자격증' },
  { id: 7, title: '외규장각 의궤 원문' },
  { id: 8, title: '유리건판' },
  { id: 9, title: '박물관 상품관' },
  { id: 10, title: '교육플랫폼 모두(MODU)' },
  { id: 11, title: 'E-뮤지엄' },
  { id: 12, title: '조선 총독부 박물관 문서' },
  { id: 13, title: '박물관 신문' },
  { id: 14, title: '청년멘토' },
];

function Section6() {
  return (
    <section className="section-management-system">
      <div className="mgmt-list-container">
        {/* 메인 타이틀 (밑줄 포함) */}
        <h2 className="mgmt-main-title">
          <Link to="/management-system" className="mgmt-main-link">
            문화유산표준관리시스템
          </Link>
        </h2>

        <ul className="mgmt-link-list">
          {managementLinks.map((link) => (
            <li key={link.id} className="mgmt-link-item">
              <Link to="/test-page" className="mgmt-link-anchor">
                <span className="mgmt-link-text">{link.title}</span>
                {/* 화살표 아이콘 */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="mgmt-arrow-icon">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Section6;