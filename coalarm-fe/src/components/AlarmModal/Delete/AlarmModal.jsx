import React from "react";
import "./style.css";

export const AlarmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
       
        <h2 className="modal-title">🗑️ 알람을 삭제하시겠어요?</h2>

      
        <div className="modal-body">
          <span className="warning-icon">⚠️</span>
          <p className="modal-description">알람 삭제 시 데이터가 삭제되며 복구되지 않습니다.</p>
        </div>

       
        <div className="modal-buttons">
          <button className="btn-confirm" onClick={onConfirm}>네</button>
          <button className="btn-cancel" onClick={onClose}>아니요</button>
        </div>
      </div>
    </div>
  );
};
