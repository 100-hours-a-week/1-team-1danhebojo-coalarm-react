import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css"

export const SidebarComponent = ({ onMenuItemClick, activeContent }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmenuClick = (content) => {
    navigate(`/guide?content=${content}`);
    if (typeof onMenuItemClick === 'function') {
      onMenuItemClick(content);
    }
  };

  // 기본 메뉴 항목 클릭 시 처리 함수
  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-top">
          <div className="app-name">
            <div className="icon-container">
            </div>
            <span className="text">co-alarm</span>
          </div>
        </div>
        
        <div className="user-profile">
          <div className="profile-image"></div>
        </div>
        
        <nav className="menu">
          <ul>
            <li 
              className="menu-item" 
              onClick={() => handleMenuClick('/dashboard')}
            >
              <div className="menu-icon">🏠</div>
              <span className="menu-text">대시보드</span>
            </li>
            <li 
              className="menu-item"
              onClick={() => handleMenuClick('/profile')}
            >
              <div className="menu-icon">📊</div>
              <span className="menu-text">프로필 설정</span>
            </li>
            <li 
              className="menu-item"
              onClick={() => handleMenuClick('/alarm')}
            >
              <div className="menu-icon">📖</div>
              <span className="menu-text">투자 설정</span>
            </li>
            <li className={`menu-item submenu-parent ${isOpen ? 'open' : ''}`} onClick={toggleSubmenu}>
              <div className="menu-icon">📈</div>
              <span className="menu-text">차트 가이드</span>
              <span className="dropdown-icon">{isOpen ? '▴' : '▾'}</span>
            </li>
            {isOpen && (
              <li className="dropdown-submenu">
                <ul>
                  <li 
                    className={`submenu-item ${activeContent === 'rsi' ? 'active' : ''}`}
                    onClick={() => handleSubmenuClick('rsi')}
                  >
                    RSI
                  </li>
                  <li 
                    className={`submenu-item ${activeContent === 'macd' ? 'active' : ''}`}
                    onClick={() => handleSubmenuClick('macd')}
                  >
                    MACD
                  </li>
                  <li 
                    className={`submenu-item ${activeContent === 'short-selling' ? 'active' : ''}`}
                    onClick={() => handleSubmenuClick('short-selling')}
                  >
                    공매수/공매도 지수
                  </li>
                  <li 
                    className={`submenu-item ${activeContent === 'kimchi' ? 'active' : ''}`}
                    onClick={() => handleSubmenuClick('kimchi')}
                  >
                    김치 프리미엄
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </nav>
        
        <div className="sidebar-bottom">
          <div 
            className="menu-item"
            onClick={() => handleMenuClick('/discord')}
          >
            <div className="menu-icon">🔄</div>
            <span className="menu-text">디스코드 연동하기</span>
          </div>
          <div 
            className="menu-item"
            onClick={() => handleMenuClick('/login')}
          >
            <div className="menu-icon">🚪</div>
            <span className="menu-text">로그아웃</span>
          </div>
        </div>
      </div>
    </div>
  );
};