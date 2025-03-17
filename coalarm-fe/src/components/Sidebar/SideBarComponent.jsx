import React, { useState } from "react";
import "./style.css"

export const SidebarComponent = ({ onMenuItemClick, activeContent }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  // onMenuItemClick이 함수인지 확인 후 호출하는 안전한 핸들러
  const handleMenuClick = (content) => {
    if (typeof onMenuItemClick === 'function') {
      onMenuItemClick(content);
    } else {
      console.warn('onMenuItemClick is not a function. Please check props passed to SidebarComponent.');
    }
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
            <li className="menu-item">
              <div className="menu-icon">🏠</div>
              <span className="menu-text">대시보드</span>
            </li>
            <li className="menu-item">
              <div className="menu-icon">📊</div>
              <span className="menu-text">프로필 설정</span>
            </li>
            <li className="menu-item active">
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
                    onClick={() => handleMenuClick('rsi')}
                  >
                    RSI
                  </li>
                  <li 
                    className={`submenu-item ${activeContent === 'macd' ? 'active' : ''}`}
                    onClick={() => handleMenuClick('macd')}
                  >
                    MACD
                  </li>
                  <li 
                    className={`submenu-item ${activeContent === 'short-selling' ? 'active' : ''}`}
                    onClick={() => handleMenuClick('short-selling')}
                  >
                    공매수/공매도 지수
                  </li>
                  <li 
                    className={`submenu-item ${activeContent === 'kimchi' ? 'active' : ''}`}
                    onClick={() => handleMenuClick('kimchi')}
                  >
                    김치 프리미엄
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </nav>
        
        <div className="sidebar-bottom">
          <div className="menu-item">
            <div className="menu-icon">🔄</div>
            <span className="menu-text">디스코드 연동하기</span>
          </div>
          <div className="menu-item">
            <div className="menu-icon">🚪</div>
            <span className="menu-text">로그아웃</span>
          </div>
        </div>
      </div>
    </div>
  );
};