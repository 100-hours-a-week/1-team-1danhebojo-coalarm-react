import React from "react";
import { SidebarIconSearch } from "../../components/SidebarIconSearch";
import { UserInterface } from "../../components/UserInterface";
import "./style.css";

export const Guide = () => {
  return (
    <div className="guide">
      <div className="div-3">
        <div className="overlap-2">
          <div className="BG-color-2">
            <div className="overlap-group-3">
              <div className="ellipse-6" />

              <div className="ellipse-7" />
            </div>

            <div className="overlap-3">
              <img
                className="vector-2"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/vector-65-1.svg"
              />

              <div className="ellipse-8" />
            </div>
          </div>

          <div className="BG-blur-2" />

          <div className="content-wrapper">
            <div className="content-3">
              <div className="view-10">
                <div className="frame-8">
                  <div className="frame-9">
                    <div className="frame-10">
                      <SidebarIconSearch
                        className="sidebar-icon-search-instance"
                        icon={<UserInterface />}
                      />
                      <div className="text-wrapper-19">
                        다른 지표도 알아볼까요?
                      </div>
                    </div>

                    <p className="p">
                      공포/탐욕 지수 · MACD · 공매수/공매도 지수 · 김치 프리미엄
                      · 고래 체결 내역
                    </p>
                  </div>
                </div>
              </div>

              <div className="RSI">
                <div className="frame-10">
                  <div className="text-wrapper-20">
                    RSI (Relative Strength Index)
                  </div>
                </div>

                <img
                  className="vector-3"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/vector-60.svg"
                />

                <div className="frame-11">
                  <div className="frame-10">
                    <div className="text-wrapper-19">RSI 계산 방법</div>
                  </div>

                  <img
                    className="image-3"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/image-124@2x.png"
                  />

                  <p className="text-wrapper-21">
                    여기서, RSI(Relative Strength)는 특정 기간 동안의 평균
                    상승폭과 평균 하락폭을 비교한 값입니다.
                    <br />
                    하지만 너무 복잡하게 생각하지 않아도 됩니다. 대부분의 차트
                    서비스(트레이딩뷰 등) 에서는 자동으로 계산해 주기 때문에 RSI
                    숫자만 잘 해석하면 됩니다.
                  </p>
                </div>

                <img
                  className="vector-3"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/vector-61.svg"
                />

                <div className="frame-9">
                  <div className="frame-10">
                    <div className="text-wrapper-19">RSI 해석하는 법</div>
                  </div>

                  <p className="text-wrapper-21">
                    RSI 70 이상 → 과매수 상태!
                    <br />
                    &nbsp;&nbsp; -&gt;가격이 너무 많이 올랐을 가능성이 큽니다.
                    <br />
                    &nbsp;&nbsp; -&gt; 조정(가격 하락)이 올 수도 있으니
                    주의하세요.
                    <br />
                    <br />
                    RSI 30 이하 → 과매도 상태!
                    <br />
                    &nbsp;&nbsp; -&gt; 가격이 너무 많이 떨어졌을 가능성이
                    큽니다.
                    <br />
                    &nbsp;&nbsp; -&gt; 반등(가격 상승)이 올 수도 있으니 관심
                    가져볼 만합니다.
                    <br />
                    하지만 RSI만 보고 매매를 결정하는 것은 위험합니다! 다른
                    지표와 함께 분석하는 것이 중요합니다.
                  </p>
                </div>

                <img
                  className="vector-3"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/vector-61.svg"
                />

                <div className="frame-11">
                  <div className="frame-9">
                    <div className="frame-10">
                      <div className="text-wrapper-19">
                        RSI를 활용한 투자 전략
                      </div>
                    </div>

                    <p className="text-wrapper-21">
                      1. 과매수/과매도 구간에서 신중하게 대응하기
                      <br />
                      RSI가 70 이상일 때 무작정 매수하지 않기!
                      <br />
                      RSI가 30 이하일 때 무작정 매도하지 않기!
                      <br />
                      <br />
                      2. 다이버전스(Divergence) 확인하기
                      <br />
                      가격은 오르는데 RSI는 떨어진다면? → 하락 가능성이 있음
                      <br />
                      가격은 내리는데 RSI는 오르고 있다면? → 상승 가능성이 있음
                      <br />
                      <br />
                      3. 다른 보조 지표와 함께 사용하기
                      <br />
                      MACD, 이동평균선 등과 함께 보면 더 신뢰도가 높아집니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="scroll-bar-thumb">
                <div className="rectangle" />
              </div>
            </div>
          </div>
        </div>

        <div className="in-page-navigation">
          <div className="view-11">
            <p className="text-wrapper-22">RSI (Relative Strength Index) 란?</p>
          </div>

          <div className="content-4">
            <div className="text-wrapper-23">RSI 계산 방법</div>
          </div>

          <div className="content-5">
            <div className="text-wrapper-24">RSI 해석하는 법</div>
          </div>

          <div className="content-5">
            <div className="text-wrapper-24">RSI를 활용한 투자 전략</div>
          </div>
        </div>

        <img
          className="image-4"
          alt="Image"
          src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/-----1.svg"
        />

        <img
          className="top-2"
          alt="Top"
          src="https://cdn.animaapp.com/projects/67d3c8e9db9fdc9c9e2480c4/releases/67d6a61a0913c8d0d25d7af0/img/top-1.svg"
        />
      </div>
    </div>
  );
};
