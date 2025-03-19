import React from "react";
import "./style.css";

export const MACDContent = () => {
  return (
    <div className="rsi-content">
      <div className="rsi-main">
        <div className="rsi-header">
          <h1 className="rsi-title">MACD (Moving Average Convergence Divergence)</h1>
        </div>

        <div className="rsi-section">
          <h2 className="section-title">MACD 계산 방법</h2>
          <div className="formula-container">
            <div className="formula">
              <span>MACD = EMA(12) - EMA(26) (</span>
              <span>)</span>
            </div>
          </div>
          <p className="section-text">
             MACD는 이동 평균 수렴·확산 지수로, 주식 및 금융 시장에서 추세와 모멘텀을 분석하는 기술적 지표입니다.
            <br />
            이 지표는 이동 평균선(Moving Average)을 활용하여 매수·매도 신호를 포착하는 데 사용됩니다.
          </p>
        </div>

        <div className="rsi-section">
          <h2 className="section-title">MACD 해석하는 법</h2>
          <div className="interpretation">
            <div className="interpretation-item">
              <div className="highlight">• MACD(10) &gt; Signal Line(8) → 매수 신호</div>
            </div>
            
            <div className="interpretation-item">
              <div className="highlight">• MACD(6) &lt; Signal Line(12) → 매도 신호</div>
            </div>
          </div>
          <p className="warning">
            하지만 MACD만 보고 매매를 결정하는 것은 위험합니다! 다른 지표와 함께 분석하는 것이 중요합니다.
          </p>
        </div>

        <div className="rsi-section">
          <h2 className="section-title">MACD 활용한 투자 전략</h2>
          <div className="strategy">
            <div className="strategy-item">
              <h3 className="strategy-number">1. MACD 크로스 전략</h3>
              <p>• MACD가 Signal Line을 상향 돌파 (골든 크로스)</p>
              <p>• MACD가 Signal Line을 하향 돌파 (데드 크로스)</p>
            </div>
            
            <div className="strategy-item">
              <h3 className="strategy-number">2. MACD 오실레이터 전략</h3>
              <p>• MACD 오실레이터(히스토그램)가 음수(-)에서 양수(+)로 전환될 때</p>
              <p>• MACD 오실레이터가 양수(+)에서 음수(-)로 전환될 때</p>
            </div>
            
            <div className="strategy-item">
              <h3 className="strategy-number">3. 다이버전스 전략</h3>
              <p>• 강세 다이버전스 (매수 신호) : 주가는 저점을 낮추지만, MACD는 고점을 높일 때</p>
              <p>• 약세 다이버전스 (매도 신호) : 주가는 고점을 높이지만, MACD는 고점을 낮출 때</p>
            </div>
          </div>
        </div>
      </div>

      <div className="related-indicators">
        <div className="search-section">
          <div className="search-icon">🔍</div>
          <span>다른 지표도 알아볼까요?</span>
        </div>
        <p className="indicators-list">
          공포/탐욕 지수 · MACD · 공매수/공매도 지수 · 김치 프리미엄 · 고래 체결 내역
        </p>
      </div>
    </div>
  );
};