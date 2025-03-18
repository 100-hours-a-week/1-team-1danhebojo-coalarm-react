import React from "react";
import { Btn } from "../../components/Btn";
import { PropertyMainWrapper } from "../../components/PropertyMainWrapper";
import { SidebarComponent } from "../../components/Sidebar/SideBarComponent";
import { SidebarIcon } from "../../components/SidebarIcon";
import { Topbar } from "../../components/Topbar";
import { ArrowsRightArrow } from "../../icons/ArrowsRightArrow";
import { ArrowsRightArrow2 } from "../../icons/ArrowsRightArrow2";
import "./style.css";

export const MypageSlacko = () => {
  return (
    <div className="mypage-slacko">
      <SidebarComponent />
      <Topbar />
      <div className="div">
        <div className="overlap">
          <div className="BG-color">
            <div className="overlap-group">
              <div className="ellipse" />

              <div className="ellipse-2" />
            </div>

            <div className="overlap-group-2">
              <img className="vector" alt="Vector" src="/img/vector-65-3.svg" />

              <div className="ellipse-3" />
            </div>
          </div>

          <div className="BG-blur" />

          <div className="scroll">
            <div className="content">
              <button className="div-wrapper">
                <div className="text-wrapper-2">회원 탈퇴하기</div>
              </button>

              <div className="content-2">
                <div className="view">
                  <div className="view-2">
                    <SidebarIcon
                      property1="notice"
                      propertyDashClassName="sidebar-icon-instance"
                    />
                    <div className="text-wrapper-3">공지사항</div>
                  </div>

                  <div className="view-3">
                    <div className="view-4">
                      <div className="group">
                        <div className="text-wrapper-4">번호</div>

                        <div className="text-wrapper-5">제목</div>

                        <div className="text-wrapper-6">일시</div>
                      </div>
                    </div>

                    <div className="element">
                      <div className="view-5">
                        <div className="text-wrapper-7">3</div>
                      </div>

                      <div className="KRW">
                        <p className="text-wrapper-7">
                          ‘엑스알피 코인 올라...’ 알람이 발생했어요
                        </p>
                      </div>

                      <div className="USDT">
                        <div className="text-wrapper-8">
                          2025-02-28 12:00:13
                        </div>
                      </div>
                    </div>

                    <div className="element-2">
                      <div className="view-5">
                        <div className="text-wrapper-7">2</div>
                      </div>

                      <div className="KRW">
                        <div className="text-wrapper-7">
                          ‘알람명2’ 알람이 발생했어요
                        </div>
                      </div>

                      <div className="USDT">
                        <div className="text-wrapper-7">
                          2025-02-27 12:23:21
                        </div>
                      </div>
                    </div>

                    <div className="element-3">
                      <div className="view-5">
                        <div className="text-wrapper-7">1</div>
                      </div>

                      <div className="KRW">
                        <div className="text-wrapper-7">
                          ‘알람명3’ 알람이 발생했어요
                        </div>
                      </div>

                      <div className="USDT">
                        <div className="text-wrapper-7">
                          2025-02-26 12:50:52
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group-2">
                    <ArrowsRightArrow
                      className="arrows-right-arrow"
                      color="#F8F8F8"
                      opacity="0.972549"
                    />
                    <ArrowsRightArrow2 className="arrows-right-arrow-2" />
                    <div className="frame">
                      <div className="text-wrapper-9">1</div>
                    </div>

                    <div className="frame-2">
                      <div className="text-wrapper-10">2</div>
                    </div>

                    <div className="frame-3">
                      <div className="text-wrapper-10">3</div>
                    </div>
                  </div>
                </div>

                <div className="view-6">
                  <div className="element-4">
                  <img
                      className="image"
                      alt="Image"
                      src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/image-71@2x.png"
                    />

                    <div className="frame-4">
                      <div className="frame-wrapper">
                        <div className="frame-5">
                          <div className="text-wrapper-11">Workplace</div>

                          <div className="frame-6">
                            <div className="frame-7">
                             <img
                                className="pngwing-com"
                                alt="Pngwing com"
                                src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/pngwing-com-6-1@2x.png"
                              />

                              <img
                                className="pngwing-com"
                                alt="Pngwing com"
                                src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/pngwing-com-6-1@2x.png"
                              />

                              <img
                                className="pngwing-com"
                                alt="Pngwing com"
                                src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/pngwing-com-6-1@2x.png"
                              />
                            </div>

                            <div className="text-wrapper-12">4명의 멤버</div>
                          </div>
                        </div>
                      </div>

                      <Btn
                        className="btn-instance"
                        property1="main"
                        text="바로가기"
                      />
                    </div>
                  </div>

                  <div className="element-5">
                    <img
                      className="image"
                      alt="Image"
                      src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/image-71@2x.png"
                    />
                    <div className="frame-4">
                      <div className="frame-wrapper">
                        <div className="frame-5">
                          <div className="text-wrapper-11">Workplace</div>

                          <div className="frame-6">
                            <div className="frame-7">
                            <img
                                className="pngwing-com"
                                alt="Pngwing com"
                                src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/pngwing-com-6-1@2x.png"
                              />

                              <img
                                className="pngwing-com"
                                alt="Pngwing com"
                                src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/pngwing-com-6-1@2x.png"
                              />

                              <img
                                className="pngwing-com"
                                alt="Pngwing com"
                                src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/pngwing-com-6-1@2x.png"
                              />
                            </div>

                            <div className="text-wrapper-12">4명의 멤버</div>
                          </div>
                        </div>
                      </div>

                      <Btn
                        className="btn-instance"
                        property1="main"
                        text="바로가기"
                      />
                    </div>
                  </div>

                  <div className="view-2">
                    <SidebarIcon
                      property1="slack"
                      propertyDashClassName="design-component-instance-node"
                    />
                    <div className="text-wrapper-13">워크스페이스 바로가기</div>
                  </div>
                </div>
              </div>

              <div className="view-wrapper">
                <div className="view-7">
                  <div className="group-wrapper">
                    <div className="group-3">
                      <div className="ellipse-4" />

                      <div className="ellipse-5" />
                    </div>
                  </div>

                  <div className="div-2">
                    <div className="text-wrapper-14">
                      *수정할 닉네임을 입력해 주세요
                    </div>

                    <div className="view-8">
                      <div className="group-4">
                        <div className="text-wrapper-15">닉네임</div>
                      </div>

                      <div className="text-filed">
                        <div className="text-wrapper-16">아름다운 코알라</div>
                      </div>
                    </div>

                    <div className="view-9">
                      <div className="text-wrapper-17">이메일</div>

                      <div className="text-filed">
                        <div className="text-wrapper-18">example@naver.com</div>
                      </div>
                    </div>
                  </div>

                  <PropertyMainWrapper
                    className="btn-2"
                    property1="main"
                    text="프로필 수정하기"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
