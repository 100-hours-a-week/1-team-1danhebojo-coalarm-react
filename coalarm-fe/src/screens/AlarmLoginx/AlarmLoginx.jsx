import React from "react";
import { Btn } from "../../components/Btn";
import { Component1605 } from "../../components/Component1605";
import { SidebarComponent } from "../../components/Sidebar/SideBarComponent";
import { ArrowsDownArrow } from "../../icons/ArrowsDownArrow";
import "./style.css";

export const AlarmLoginx = () => {
  return (
    <div className="alarm-loginx">
      <div className="div-2">
        <div className="overlap">
          <div className="BG-color">
            <div className="overlap-group">
              <div className="ellipse" />

              <div className="ellipse-2" />
            </div>

            <div className="overlap-group-2">
              <img className="img" alt="Vector" src="/img/vector-65-3.svg" />

              <div className="ellipse-3" />
            </div>
          </div>

          <div className="BG-blur" />

          <div className="scroll">
            <div className="content">
              <div className="view">
                <div className="frame-2">
                  <div className="text-wrapper-4">총 0개의 알림이 있어요.</div>

                  <div className="view-2">
                    <div className="text-wrapper-5">정렬 기준</div>

                    <ArrowsDownArrow
                      className="arrows-down-arrow"
                      color="#F8F8F8"
                      opacity="0.972549"
                    />
                    <div className="text-wrapper-5">최신순</div>
                  </div>
                </div>

                <img
                  className="vector-2"
                  alt="Vector"
                  src="/img/vector-63.svg"
                />
              </div>

              <Btn
                className="btn-instance"
                property1="main"
                text="알림 설정하기"
              />
              <Component1605
                className="component-1605-instance"
                property1="default-active"
              />
            </div>
          </div>
        </div>

        <SidebarComponent />

        <img className="top" alt="Top" src="/img/top.svg" />
      </div>
    </div>
  );
};
