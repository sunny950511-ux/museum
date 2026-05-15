import React, { useEffect } from 'react';
import './ManagementSystem.css';

const ManagementSystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      id: 1,
      title: '안전한 보안성',
      desc: '정부 클라우드 인프라를 기반으로 소중한 문화유산 데이터를 안전하게 보호합니다.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      id: 2,
      title: '기관별 자율 운영',
      desc: '각 박물관의 특성에 맞춰 소장품 정보를 독립적으로 관리하고 운영할 수 있습니다.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 01-2.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      )
    },
    {
      id: 3,
      title: '대량 데이터 처리',
      desc: '수만 점의 유물 정보를 엑셀 등으로 한꺼번에 업로드하고 관리할 수 있는 편의성을 제공합니다.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      )
    },
    {
      id: 4,
      title: '정보 표준화',
      desc: '국가 표준 양식을 준수하여 타 박물관 및 e-뮤지엄 서비스와 유기적으로 연동됩니다.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 11a9 9 0 019 9" />
          <path d="M4 4a16 16 0 0116 16" />
          <circle cx="5" cy="19" r="1" />
        </svg>
      )
    }
  ];

  const steps = [
    { id: '01', title: '사용 신청', desc: '시스템 사용 희망 기관의 공문 접수' },
    { id: '02', title: '기술 검토', desc: '데이터 이관 및 인프라 환경 분석' },
    { id: '03', title: '배포 및 설치', desc: '기관별 독립 시스템 서버 구축' },
    { id: '04', title: '사용자 교육', desc: '운영 담당자 기능 및 매뉴얼 교육' },
    { id: '05', title: '정식 운영', desc: '소장품 데이터 실시간 관리 시작' }
  ];

  return (
    <main className="mgmt-page" id="main-content">
      {/* Hero Section */}
      <section className="mgmt-hero">
        <div className="mgmt-hero-container">
          <span className="mgmt-label">소장품 관리의 새로운 표준</span>
          <h1 className="mgmt-title">문화유산표준관리시스템</h1>
          <p className="mgmt-subtitle">
            전국 국·공·사립 박물관 및 미술관의 소장유물 정보를<br />
            표준화하여 통합 관리하고 대국민 서비스를 지원합니다.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="mgmt-section">
        <div className="mgmt-container">
          <div className="section-header">
            <h2 className="section-main-title">시스템 핵심 강점</h2>
            <p className="section-sub-title">체계적이고 과학적인 유물 관리를 위한 최적의 솔루션</p>
          </div>
          <div className="mgmt-features-grid">
            {features.map(feature => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon-box">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mgmt-section bg-light">
        <div className="mgmt-container">
          <div className="section-header">
            <h2 className="section-main-title">배포 절차 안내</h2>
            <p className="section-sub-title">신청부터 운영까지 전문가가 함께합니다</p>
          </div>
          <div className="mgmt-steps-timeline">
            {steps.map((step, index) => (
              <div key={step.id} className="step-item">
                <div className="step-number">{step.id}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-desc">{step.desc}</p>
                </div>
                {index !== steps.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mgmt-cta">
        <div className="mgmt-container">
          <div className="cta-box">
            <h2 className="cta-title">지금 바로 시스템을 도입해 보세요</h2>
            <p className="cta-desc">
              신청 서식을 다운로드하여 작성 후 공문으로 접수해 주시기 바랍니다.
            </p>
            <div className="cta-actions">
              <button className="btn-primary">신청 서식 다운로드</button>
              <button className="btn-secondary">온라인 문의하기</button>
            </div>
            <div className="cta-contact">
              <span>문의전화: 02-2077-9000</span>
              <span className="divider">|</span>
              <span>평일 09:00 ~ 18:00 (주말/공휴일 휴무)</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ManagementSystem;
