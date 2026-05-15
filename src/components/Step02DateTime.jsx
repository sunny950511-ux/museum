import React, { useState, useEffect, useRef } from 'react';
import './Step02DateTime.css';
import Step03Info from './Step03Info';

const Step02DateTime = ({ onNext, onPrev, exhibition, visitorInfo, setVisitorInfo, setCurrentStep }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isDesktopOrTablet = windowWidth >= 768;

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  
  const infoSectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isDesktopOrTablet && selectedSlot) {
      // 데스크톱에서는 한 페이지에서 통합 처리하므로 페이지 전환(setCurrentStep)을 하지 않고 아래로 스크롤만 합니다.
      if (infoSectionRef.current) {
        const target = infoSectionRef.current;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1200;
        let start = null;

        const animation = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const run = ease(progress, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (progress < duration) requestAnimationFrame(animation);
        };

        const ease = (t, b, c, d) => {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
      }
    }
  }, [selectedSlot, isDesktopOrTablet, setCurrentStep]);

  const handleDateClick = (day) => {
    if (!day.currentMonth) return;
    setSelectedDate(day.day);
    setSelectedSlot(null);
  };

  const renderGuide = () => {
    if (!selectedDate) return { title: '첫 번째', desc: '달력에서 관람하실 날짜를 눌러주세요.' };
    if (!selectedSlot) return { title: '두 번째', desc: '관람하실 시간(회차)을 골라주세요.' };
    return { title: '세 번째', desc: '예약자 정보를 정확히 입력해 주세요.' };
  };

  const guide = renderGuide();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const timeSlots = [
    { id: 1, time: '09:30 ~ 10:50' }, { id: 2, time: '11:00 ~ 12:20' },
    { id: 3, time: '13:00 ~ 14:20' }, { id: 4, time: '14:30 ~ 15:50' },
    { id: 5, time: '16:00 ~ 17:20' }, { id: 6, time: '17:30 ~ 18:50' },
    { id: 7, time: '18:50 ~ 19:20' }, { id: 8, time: '19:30 ~ 20:20' },
  ];

  const getDaysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
  const getFirstDayOfMonth = (y, m) => new Date(y, m, 1).getDay();
  const days = [];
  for (let i = 0; i < getFirstDayOfMonth(year, month); i++) days.push({ day: '', currentMonth: false });
  for (let i = 1; i <= getDaysInMonth(year, month); i++) days.push({ day: i, currentMonth: true });

  return (
    <div className={`step-datetime-container ${isDesktopOrTablet ? 'desktop-view' : 'mobile-view'}`}>
      <section className="accessibility-guide">
        <div className="guide-box">
          <div className="guide-icon">📢</div>
          <div className="guide-content">
            <h4 className="guide-title">{guide.title}</h4>
            <p className="guide-desc">{guide.desc}</p>
          </div>
        </div>
      </section>

      <div className="booking-main-content">
        <section className="calendar-section">
          <div className="calendar-header">
            <button type="button" aria-label="이전 달" className="calendar-nav-btn" onClick={() => setCurrentDate(new Date(year, month - 1, 1))}>&lt;</button>
            <h3 className="current-month">{year}년 {monthNames[month]}</h3>
            <button type="button" aria-label="다음 달" className="calendar-nav-btn" onClick={() => setCurrentDate(new Date(year, month + 1, 1))}>&gt;</button>
          </div>
          <div className="calendar-grid">
            {weekdays.map(wd => <div key={wd} className="weekday">{wd}</div>)}
            {days.map((d, index) => (
              <div 
                key={index} 
                className={`calendar-day ${!d.currentMonth ? 'other-month' : ''} ${selectedDate === d.day ? 'active' : ''}`}
                onClick={() => handleDateClick(d)}
              >
                {d.day}
              </div>
            ))}
          </div>
        </section>

        {(selectedDate || isDesktopOrTablet) && (
          <section className="time-slot-section">
            <div className="time-slot-header">
              <h3 className="exhibition-title-display">[ {exhibition?.title} ]</h3>
              <p className="date-guidance">{year}-{month+1}-{selectedDate || '00'} 관람 시간 선택</p>
            </div>
            <div className="time-slot-list">
              {timeSlots.map(slot => (
                <button 
                  type="button"
                  key={slot.id} 
                  className={`time-slot-btn ${selectedSlot === slot.id ? 'selected' : ''}`}
                  onClick={() => setSelectedSlot(slot.id)}
                >
                  {slot.id}회차　{slot.time}
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      {isDesktopOrTablet && selectedSlot && (
        <div ref={infoSectionRef} className="integrated-info-wrapper">
          <Step03Info 
            visitorInfo={visitorInfo} 
            setVisitorInfo={setVisitorInfo} 
            isIntegrated={true} 
          />
        </div>
      )}

      <div className="step-actions">
        <button type="button" className="btn-prev" onClick={onPrev}>이전 단계</button>
        {selectedSlot && (
          <button type="button" className="btn-next-step" onClick={() => onNext({
            date: `${year}-${String(month + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`,
            time: timeSlots.find(s => s.id === selectedSlot).time,
            slotId: selectedSlot
          })}>
            {isDesktopOrTablet ? '다음 단계 (예약 정보 확인) →' : '다음 단계 (예약자 정보 입력) →'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Step02DateTime;
