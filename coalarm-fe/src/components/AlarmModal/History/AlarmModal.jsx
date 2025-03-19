import React, { useState } from "react";
import "./style.css"; // 스타일 파일 불러오기

export const AlarmModal = ({ isOpen, onClose }) => {
  const [selectedToggle, setSelectedToggle] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* 모달 헤더 */}
        <div className="modal-header">
          <h2 className="modal-title">🔔 알람 설정 상세보기</h2>
          <button onClick={onClose} className="modal-close-btn">✖</button>
        </div>

        {/* 코인 검색 */}
        <div className="modal-section">
          <label className="modal-label">코인</label>
          <div className="modal-input-container">
            <input 
              type="text" 
              placeholder="코인명/심볼 검색"
              className="modal-input"
            />
            <button className="search-btn">🔍</button>
          </div>
          <p className="modal-description">*현재가는 yyyy.mm.dd. hh:mm:ss 기준의 데이터입니다.</p>
        </div>

        <div className="modal-divider"></div>

        {/* 알람 제목 입력 */}
        <div className="modal-section">
          <label className="modal-label">제목</label>
          <textarea 
             placeholder=""// api 받아온 내용
            className="modal-textarea"
            maxLength={50}
            rows={2}
          />
          <p className="modal-description text-right">(0/50)</p>
        </div>

        <div className="modal-divider"></div>

        {/* 알람 유형 */}
        <div className="modal-section">
          <label className="modal-label">유형</label>
          <div className="toggle-wrapper">
            <div className="toggle-container">
              {/* api 받아온 데이터에 따라 toggling 구현 */}
              <ToggleSwitch label="지정가 설정" selectedToggle={selectedToggle} setSelectedToggle={setSelectedToggle} />
              <ToggleSwitch label="골든 크로스" selectedToggle={selectedToggle} setSelectedToggle={setSelectedToggle} />
              <ToggleSwitch label="급등 감지" selectedToggle={selectedToggle} setSelectedToggle={setSelectedToggle} />
            </div>
            <div className="toggle-section-container">
              {selectedToggle && <ToggleContent selectedToggle={selectedToggle} />}
            </div>
          </div>
        </div>

        {/* 알람 발생 일시 */}
        <div className="modal-section">
          <label className="modal-label">알림 발생 일시</label>
          <textarea 
            placeholder= "" // api 받아온 내용
            className="modal-textarea"
            maxLength={50}
          />
          <p className="modal-description text-right">(0/50)</p>
        </div>

        {/* 저장하기 버튼 */}
        <button className="modal-save-btn">저장하기</button>
      </div>
    </div>
  );
};

// ✅ ToggleSwitch 컴포넌트 (토글 버튼)
const ToggleSwitch = ({ label, selectedToggle, setSelectedToggle }) => {
  const isActive = selectedToggle === label;
  const toggleSwitch = () => {
    setSelectedToggle(isActive ? null : label);
  };

  return (
    <div className="toggle-btn">
      <span className="toggle-label">{label}</span>
      <div 
        className={`toggle-switch ${isActive ? "active" : ""}`} 
        onClick={toggleSwitch}
      >
        <div className="toggle-circle" />
      </div>
    </div>
  );
};

// ✅ ToggleContent 컴포넌트 (선택된 토글에 따라 다른 내용 표시)
const ToggleContent = ({ selectedToggle }) => {
  if (selectedToggle === "골든 크로스") {
    return (
        <div className="alert-box">
            <p className="toggle-info">단기 이동평균선(7일)이 장기 이동평균선(20일)을 상향 돌파할 때 알림을 받습니다.</p>
        </div>
    );
  } else if (selectedToggle === "급등 감지") {
    return (
      <div className="alert-box">
        <p className="alert-description">업비트의 시장 경보 시스템을 기반으로<br/> 가격 급등락 또는 거래량 급등 발생 시<br/>  알람을 받습니다.</p>
        <p className="alert-detail"><br />전일 종가 대비 50% 이상 상승 또는 하락 발생 시 알림</p>
      </div>
    );
  } else if (selectedToggle === "지정가 설정") {
    return (
      <div className="alert-box">
       
        <p className="alert-description">설정한 가격에 도달하면<br/> 알림을 받습니다.</p>
        <div className="price-input-container">
          <input type="text" className="price-input" placeholder="%" />
          <span className="price-unit">(123,322,333 원)</span>
        </div>
      </div>
    );
  }
  return null;
};
