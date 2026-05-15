import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ReservationHeader from '../components/ReservationHeader';
import Step01Exhibition from '../components/Step01Exhibition';
import Step02DateTime from '../components/Step02DateTime';
import Step03Info from '../components/Step03Info';
import Step04Confirmation from '../components/Step04Confirmation';
import Step05Complete from '../components/Step05Complete';
import Section6 from '../components/Section6';
import Footer from '../components/Footer';
import './KidsBooking.css';

const KidsBooking = () => {
  const navigate = useNavigate(); // 👈 내비게이션 함수 초기화
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedExhibition, setSelectedExhibition] = useState(null);
  
  // 예약자 통합 정보 상태
  const [visitorInfo, setVisitorInfo] = useState({
    name: '',
    phone: '',
    adultCount: 1,
    childCount: 0
  });

  // 선택된 날짜 및 회차 정보
  const [reservationData, setReservationData] = useState({
    date: null,
    time: null,
    slotId: null
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const handleExhibitionSelect = (exhibition) => {
    setSelectedExhibition(exhibition);
    setCurrentStep(2);
  };

  const handleNextStep = (data) => {
    const isMobile = window.innerWidth < 768;
    
    if (currentStep === 2) {
      if (data) setReservationData(data); // Step02에서 넘어온 날짜/회차 정보 저장
      if (isMobile) {
        setCurrentStep(3); // 모바일은 3단계(정보 입력)로 이동
      } else {
        setCurrentStep(4); // 데스크톱은 2단계 하단에 정보입력이 있으므로 바로 4단계로 이동
      }
    } else if (currentStep === 3) {
      setCurrentStep(4); // 3단계 완료 후 4단계(확인)로 이동
    } else if (currentStep === 4) {
      setCurrentStep(5); // 4단계 확정 후 5단계(완료)로 이동
    }
  };

  const handlePrevStep = () => {
    const isMobile = window.innerWidth < 768;
    if (currentStep === 4 && !isMobile) {
      setCurrentStep(2); // 데스크톱에서 4단계 이전은 2단계
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // X 버튼 클릭 핸들러
  const handleCloseBooking = useCallback(() => {
    // 경고창 없이 무조건 메인 페이지로 강제 이동
    window.location.href = '/'; 
  }, []);

  // 단계 클릭 핸들러
  const handleStepClick = useCallback((step) => {
    console.log(`${step}단계 바 클릭됨.`);
    setCurrentStep(step);
  }, []);

  const getHeaderTitle = () => {
    if (currentStep === 1) return "어린이 박물관 관람 예약";
    if (currentStep === 2) return `[${selectedExhibition?.title}] 날짜 / 회차 선택`;
    if (currentStep === 3) return `[${selectedExhibition?.title}] 예약자 정보 입력`;
    return `[${selectedExhibition?.title}] 예약 정보 확인`;
  };

  return (
    <div className="kids-booking-page">
      {currentStep < 5 && (
        <ReservationHeader 
          title={getHeaderTitle()} 
          currentStep={currentStep} 
          totalSteps={4} 
          onClose={handleCloseBooking} 
          onStepClick={handleStepClick}
        />
      )}

      <main className="booking-content">
        {/* 단계별 컴포넌트 렌더링 */}
        {currentStep === 1 && (
          <Step01Exhibition onExhibitionSelect={handleExhibitionSelect} />
        )}

        {currentStep === 2 && (
          <Step02DateTime 
            onPrev={handlePrevStep} 
            onNext={handleNextStep}
            setCurrentStep={setCurrentStep} // 👈 단계 변경 함수 전달
            exhibition={selectedExhibition} 
            visitorInfo={visitorInfo}
            setVisitorInfo={setVisitorInfo}
          />
        )}

        {currentStep === 3 && (
          <Step03Info 
            visitorInfo={visitorInfo} 
            setVisitorInfo={setVisitorInfo} 
            onPrev={handlePrevStep}
            onNext={handleNextStep}
            isIntegrated={false}
          />
        )}

        {currentStep === 4 && (
          <Step04Confirmation 
            exhibition={selectedExhibition}
            reservationData={reservationData}
            visitorInfo={visitorInfo}
            onPrev={handlePrevStep}
            onNext={handleNextStep}
          />
        )}

        {currentStep === 5 && (
          <Step05Complete 
            exhibition={selectedExhibition}
            reservationData={reservationData}
            visitorInfo={visitorInfo}
          />
        )}
      </main>
      
      <Section6 />
      <Footer />
    </div>
  );
};

export default KidsBooking;
