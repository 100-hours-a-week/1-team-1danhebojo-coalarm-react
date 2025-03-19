import React from "react";
import "./style.css";

export const KimchiContent = () => {
  return (
    <div className="rsi-content">
      <div className="rsi-main">
        <div className="rsi-header">
          <h1 className="rsi-title">김치 프리미엄(Kimchi Premium)</h1>
        </div>

        <div className="rsi-section">
          <h2 className="section-title">김치 프리미엄 계산 방법</h2>
          <div className="formula-container">
            <div className="formula">
              <span>김치 프리미엄 = 100 x (</span>
              <div className="fraction">
                <span className="numerator">한국 가격−해외 가격</span>
                <span className="fraction-line"></span>
                <span className="denominator">해외 가격</span>
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
          <h2 className="section-title"> 김치 프리미엄 관련 리스크</h2>
          <div className="interpretation">
            <div className="interpretation-item">
              <div className="highlight">• 외환 규제 리스크!</div>
              <p>→ 한국의 외환거래법상 **해외 송금 제한(연간 5,000달러 제한)**이 있어 대규모 차익거래가 어려움</p>
            </div>
            
            <div className="interpretation-item">
              <div className="highlight">• 송금 시간 차이!</div>
              <p>→ 암호화폐 전송 시간이 걸리므로 송금하는 동안 김치 프리미엄이 사라질 위험 존재</p>
            </div>
          </div>
          <p className="warning">
            김치 프리미엄만 보고 매매를 결정하는 것은 위험합니다! 다른 지표와 함께 분석하는 것이 중요합니다.
          </p>
        </div>

        <div className="rsi-section">
          <h2 className="section-title">김치 프리미엄을 활용한 투자 전략</h2>
          <div className="strategy">
            <div className="strategy-item">
              <h3 className="strategy-number">1. 김치 프리미엄 차익거래 (아비트라지, Arbitrage)</h3>
              <p>• 김치 프리미엄을 활용하여 해외에서 저렴한 가격으로 구매 → 한국에서 비싸게 판매하는 전략</p>
              <p>• 주의 : 한국의 외환거래 규제로 인해 5,000달러/년 한도 초과 시 신고 필요</p>
            </div>
            
            <div className="strategy-item">
              <h3 className="strategy-number">2. 김치 프리미엄이 높을 때 매도 전략</h3>
              <p>• 김치 프리미엄이 5~10% 이상일 때 매도하여 차익 실현</p>
              <p>• 국내 시장 과열 가능성이 있어 이후 가격 조정을 대비</p>
            </div>
            
            <div className="strategy-item">
              <h3 className="strategy-number">3. 김치 프리미엄이 낮을 때 매수 전략</h3>
              <p>• 한국 가격이 해외보다 낮아지는 경우 저점 매수 기회로 활용</p>
              <p>• 글로벌 시장과 비교하여 한국 가격이 저평가된 경우 매수 후 보유 전략</p>
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