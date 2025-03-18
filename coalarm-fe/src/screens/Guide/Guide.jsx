import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SidebarComponent } from "../../components/Sidebar/SideBarComponent";
import { RSIContent } from "../../components/GuideContent/RSI/RSIContent";
import { MACDContent } from "../../components/GuideContent/MACD/MACDContent";
import { KimchiContent } from "../../components/GuideContent/Kimchi/KimchiContent";
import { ShortSellingContent } from "../../components/GuideContent/ShortSelling/ShortSellingContent";

import "./style.css";

export const Guide = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const contentParam = queryParams.get("content");
  const [activeContent, setActiveContent] = useState(contentParam || "rsi");

  useEffect(() => {
    if (contentParam) {
      setActiveContent(contentParam);
    }
  }, [contentParam]);

  const handleMenuItemClick = (content) => {
    console.log("Menu item clicked:", content);
    setActiveContent(content);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "rsi":
        return <RSIContent />;
      case "macd":
        return <MACDContent />;
      case "kimchi":
        return <KimchiContent />;
      case "short-selling":
        return <ShortSellingContent />;
      default:
        return <RSIContent />;
    }
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <div className="top-bar-content">
        </div>
      </div>
      <div className="main-container">
        <SidebarComponent 
          onMenuItemClick={handleMenuItemClick}
          activeContent={activeContent}
        />
        <div className="content-container">
          <div className="content-main">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};
