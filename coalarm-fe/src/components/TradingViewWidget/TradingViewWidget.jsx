import React, { useEffect, useRef, useState } from 'react';

export const TradingViewWidget = () => {
  const container = useRef();
  const [symbolError, setSymbolError] = useState(false);
  
  // 여러 거래소의 심볼 조합을 시도
  const trySymbols = [
    'UPBIT:BTCKRW',
    'BINANCE:BTCUSDT',
    'BITHUMB:BTCKRW',
    'COINONE:BTCKRW',
    'BTCUSD',
    'BTCKRW',
    'BTC'
  ];
  
  useEffect(() => {
   
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView && container.current) {
        let widgetOptions = {
          autosize: true,
          symbol: trySymbols[0],
          interval: '1',
          timezone: 'Asia/Seoul',
          theme: 'dark',
          style: '1',
          locale: 'kr',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_side_toolbar: false,
          save_image: false,
          container_id: container.current.id,
     
          studies: ['MASimple@tv-basicstudies'],
          auto_open_dialogs: ['search'],
          
          datafeed_error: (error) => {
            console.error("TradingView datafeed error:", error);
            setSymbolError(true);
          }
        };
        
        new window.TradingView.widget(widgetOptions);
      }
    };

    document.head.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-container" style={{ width: '100%', height: '100%' }}>
      {symbolError && (
        <div className="symbol-error-message" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          zIndex: 1
        }}>
          심볼을 찾을 수 없습니다. 검색 도구를 사용하여 수동으로 심볼을 선택하세요.
        </div>
      )}
      <div 
        ref={container} 
        id="tradingview_widget" 
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};