import React from "react";
import "./style.css";

export const ShortSellingContent = () => {
  return (
    <div className="rsi-content">
      <div className="rsi-main">
        <div className="rsi-header">
          <h1 className="rsi-title">공매수/공매도 (Long Position/Short Selling)</h1>
        </div>

        <div className="rsi-section">
          <h2 className="section-title">공매수/공매도 비율 계산 방법</h2>
          <div className="formula-container">
            <div className="formula">
              <span>공매수/공매도 강도 =(</span>
              <div className="fraction">
                <span className="numerator">(롱 비율 x 미결제약정 x (1+ 펀딩 비율))</span>
                <span className="fraction-line"></span>
                <span className="denominator">(숏 비율 x 미결제약정 x (1+ 펀딩 비율))</span>
              </div>
              <span>)  -1</span>
            </div>
          </div>
          <p className="section-text">
            공매수(空買收)와 공매도(空賣渡)는 주식 및 금융시장에 사용되는 투자 전략으로, 각각 매수와 매도의 관점에서 접근하는 방식입니다.
            <br />
            한국에서는 개인 투자자의 보호 및 시장 안정성을 이유로 공매도에 대한 규제가 존재합니다.
            특히, **무차입 공매도(주식을 빌리지 않고 매도하는 행위)**는 불법입니다.
          </p>
        </div>

        <div className="rsi-section">
          <h2 className="section-title">공매수/공매도 해석하는 법</h2>
          <div className="interpretation">
            <div className="interpretation-item">
              <div className="highlight">• 공매수</div>
              <p>→ 공매수는 일반적인 주식 투자 방식으로, 주식을 싼 가격에 매수하여 비싼 가격에 매도하는 전략입니다.</p>
              <p>→ 즉, 가격 상승을 기대하고 주식을 사는 것입니다..</p>
            </div>
            
            <div className="interpretation-item">
              <div className="highlight">• 공매도</div>
              <p>→ 공매도는 주가가 하락할 것으로 예상될 때 사용하는 투자 전략입니다.</p>
              <p>→ 일반적으로 주식을 매도하려면 먼저 보유하고 있어야 하지만, 공매도는 없는 주식을 빌려서 먼저 판 후, 나중에 주식을 사서 갚는 방식입니다.</p>
            </div>
          </div>
          <p className="warning">
            하지만 공매수/공매도만 보고 매매를 결정하는 것은 위험합니다! 다른 지표와 함께 분석하는 것이 중요합니다.
          </p>
        </div>

        <div className="rsi-section">
          <h2 className="section-title">공매도의 위험성과 논란</h2>
          <div className="strategy">
            <div className="strategy-item">
              <h3 className="strategy-number">1. 무한 손실 가능성</h3>
              <p>• 공매수는 주가가 0원이 되면 손실이 끝나지만, 공매도는 주가가 계속 오르면 손실이 무한대로 커질 수 있음</p>
            </div>
            
            <div className="strategy-item">
              <h3 className="strategy-number">2. 주가 조작 가능성</h3>
              <p>• 악의적인 세력이 공매도를 이용하여 허위 정보를 퍼뜨려 주가를 떨어뜨리는 사례가 존재</p>
            </div>
            
            <div className="strategy-item">
              <h3 className="strategy-number">3. 개인 투자자 불리</h3>
              <p>• 기관과 외국인은 공매도가 가능하지만, 개인 투자자는 공매도를 하기 어려운 경우가 많음.</p>
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