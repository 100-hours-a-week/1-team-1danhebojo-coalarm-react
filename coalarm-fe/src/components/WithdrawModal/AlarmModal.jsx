import React from "react";
import "./style.css";

export const AlarmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
       
        <h2 className="modal-title">정말 코알람을 떠나시나요? 🐨</h2>

      
        <div className="modal-body">
          <span className="warning-icon">⚠</span>
          <p className="modal-description">회원 탈퇴 시 모든 알림과 데이터가 삭제되며 복구되지 않습니다.</p>
        </div>

       
        <div className="modal-buttons">
          <button className="btn-confirm" onClick={onConfirm}>네</button>
          <button className="btn-cancel" onClick={onClose}>아니요</button>
        </div>
      </div>
    </div>
  );
};
