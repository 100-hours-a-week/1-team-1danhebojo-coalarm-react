import React , {useState} from "react";
import { SidebarComponent } from "../../components/Sidebar/SideBarComponent";
import { RSIContent } from "../../components/GuideContent/RSI/RSIContent";
import { MACDContent } from "../../components/GuideContent/MACD/MACDContent";
import { KimchiContent } from "../../components/GuideContent/Kimchi/KimchiContent";
import { ShortSellingContent } from "../../components/GuideContent/ShortSelling/ShortSellingContent";

import "./style.css";

export const Guide = () => {

  const [activeContent, setActiveContent] = useState('rsi');

  const handleMenuItemClick = (content) => {
    console.log('Menu item clicked:', content);
    setActiveContent(content);
  };

  const renderContent = () => {
    switch (activeContent) {
      case 'rsi':
        return <RSIContent />;
      case 'macd':
        return <MACDContent />;
      case 'kimchi':
        return <KimchiContent />;
      case 'short-selling':
        return <ShortSellingContent />;
      default:
        return <RSIContent />;
    }
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <div className="top-bar-content">
          <span>co-alarm</span>
        </div>
      </div>
      
      <div className="main-container">
        <SidebarComponent />
        
        <div className="content-container">
          <div className="content-main">
            {renderContent()}
          </div>
          
          <SidebarComponent 
          onMenuItemClick={handleMenuItemClick}
          activeContent={activeContent}
        />
        </div>
      </div>
    </div>
  );
};