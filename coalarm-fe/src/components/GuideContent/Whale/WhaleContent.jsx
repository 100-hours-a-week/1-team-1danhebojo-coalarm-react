import React from "react";
import "./style.css";

export const WhaleContent = () => {
  return (
    <div className="rsi-content">
      <div className="rsi-main">
        <div className="rsi-header">
          <h1 className="rsi-title">고래 체결 내역 (Whale Selling)</h1>
        </div>

        <div className="rsi-section">
          <h2 className="section-title">RSI 계산 방법</h2>
          <div className="formula-container">
            <div className="formula">
              <span>RSI = 100 - (</span>
              <div className="fraction">
                <span className="numerator">100</span>
                <span className="fraction-line"></span>
                <span className="denominator">1 + RS</span>
              </div>
              <span>)</span>
            </div>
          </div>
          <p className="section-text">
            여기서, RS(Relative Strength)는 특정 기간 동안의 평균 상승폭과 평균 하락폭을 비교한 값입니다.
            <br />
            하지만 너무 복잡하게 생각하지 않아도 됩니다. 대부분의 차트 서비스(트레이딩뷰 등)에서는 
            자동으로 계산해 주기 때문에 RSI 숫자만 잘 해석하면 됩니다.
          </p>
        </div>

        <div className="rsi-section">
          <h2 className="section-title">RSI 해석하는 법</h2>
          <div className="interpretation">
            <div className="interpretation-item">
              <div className="highlight">• RSI 70 이상 → 과매수 상태!</div>
              <p>→ 가격이 너무 많이 올랐을 가능성이 큽니다.</p>
              <p>→ 조정(가격 하락)이 올 수도 있으니 주의하세요.</p>
            </div>
            
            <div className="interpretation-item">
              <div className="highlight">• RSI 30 이하 → 과매도 상태!</div>
              <p>→ 가격이 너무 많이 떨어졌을 가능성이 큽니다.</p>
              <p>→ 반등(가격 상승)이 올 수도 있으니 관심 가져볼 만합니다.</p>
            </div>
          </div>
          <p className="warning">
            하지만 RSI만 보고 매매를 결정하는 것은 위험합니다! 다른 지표와 함께 분석하는 것이 중요합니다.
          </p>
        </div>

        <div className="rsi-section">
          <h2 className="section-title">RSI를 활용한 투자 전략</h2>
          <div className="strategy">
            <div className="strategy-item">
              <h3 className="strategy-number">1. 과매수/과매도 구간에서 신중하게 대응하기</h3>
              <p>• RSI가 70 이상일 때 무작정 매수하지 않기!</p>
              <p>• RSI가 30 이하일 때 무작정 매도하지 않기!</p>
            </div>
            
            <div className="strategy-item">
              <h3 className="strategy-number">2. 다이버전스(Divergence) 확인하기</h3>
              <p>• 가격은 오르는데 RSI는 떨어진다면? → 하락 가능성이 있음</p>
              <p>• 가격은 내리는데 RSI는 오르고 있다면? → 상승 가능성이 있음</p>
            </div>
            
            <div className="strategy-item">
              <h3 className="strategy-number">3. 다른 보조 지표와 함께 사용하기</h3>
              <p>• MACD, 이동평균선 등과 함께 보면 더 신뢰도가 높아집니다.</p>
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