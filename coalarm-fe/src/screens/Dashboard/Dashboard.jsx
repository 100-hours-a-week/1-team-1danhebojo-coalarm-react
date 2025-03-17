import React from "react";
import { Component1606 } from "../../components/Component1606";
import { Component1609 } from "../../components/Component1609";
import { Component1610 } from "../../components/Component1610";
import { Component1611 } from "../../components/Component1611";
import { Component1614 } from "../../components/Component1614";
import { DivWrapper } from "../../components/DivWrapper";
import { Macd } from "../../components/Macd";
import { Rsi } from "../../components/Rsi";
import { SidebarComponent } from "../../components/Sidebar/SideBarComponent";
import { UserInterfaceCloseWrapper } from "../../components/UserInterfaceCloseWrapper";
import { Property1Noti } from "../../icons/Property1Noti";
import { UserInterfaceClose } from "../../icons/UserInterfaceClose";
import { TradingViewWidget } from "../../components/TradingViewWidget/TradingViewWidget"; 
import "./style.css";

export const Dashboard = () => {
  return (
    <div className="sidebar-notice">
      <div className="main-sidebar-notice">
        <div className="overlap">
          <div className="BG-color">
            <div className="overlap-group">
              <div className="ellipse" />

              <div className="ellipse-2" />
            </div>

            <div className="overlap-2">
              <img
                className="vector"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d69a0eb2ec8455f2240cce/img/vector-65.svg"
              />

              <div className="ellipse-3" />
            </div>
          </div>

          <div className="BG-blur" />

          <DivWrapper className="view" />
          <Component1606
            className="component-1606-instance"
            frameClassName="view-2"
          />
          <Component1609
            className="component-1609-instance"
            component1607MainIconPropertyCloseClassName="view-3"
          />
          <Component1610 className="component-1610-instance" />
          <div className="view-4">
            <div className="group-12">
              <img
                className="image"
                alt="Image"
                src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d69a0eb2ec8455f2240cce/img/image-111@2x.png"
              />

              <div className="text-wrapper-27">비트코인</div>

              <div className="text-wrapper-28">BTC/KRW</div>
            </div>

            <div className="frame-19">
              {/* 여기에 TradingView 캔들차트 위젯 추가 */}
              <TradingViewWidget />
            </div>
          </div>

          <Component1611
            className="component-1611-instance"
            frameClassName="component-1611-2"
          />
          <Macd className="MACD-instance" />
          <Rsi className="RSI-instance" property1="variant-2" />
          <Component1614
            className="component-1614-instance"
            property1="variant-3"
          />
          <SidebarComponent />

          <div className="view-5">
            <div className="frame-20">
              <Property1Noti
                className="solid-exclamation"
                color="#F8F8F8"
                opacity="0.972549"
              />
              <div className="text-wrapper-29">주의</div>
            </div>

            <p className="p">
              모든 투자에 대한 책임은 전적으로 투자자 본인에게 있습니다.
              코알람은 투자 판단을 돕기 위한 정보 제공 서비스일 뿐, 어떠한 투자
              결정도 대신하지 않습니다.
            </p>

            <UserInterfaceCloseWrapper />
            <UserInterfaceClose
              className="user-interface-close-3"
              color="#F8F8F8"
              opacity="0.972549"
            />
          </div>
        </div>
      </div>
    </div>
  );
};