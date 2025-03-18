import React, { useEffect, useRef, useState } from "react";

export const TradingViewWidget = () => {
  const container = useRef();
  const [symbolError, setSymbolError] = useState(false);

  const trySymbols = [
    "UPBIT:BTCKRW",
    "BINANCE:BTCUSDT",
    "BITHUMB:BTCKRW",
    "COINONE:BTCKRW",
    "BTCUSD",
    "BTCKRW",
    "BTC",
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (window.TradingView && container.current) {
        let widgetOptions = {
          autosize: true,
          symbol: trySymbols[0],
          interval: "1",
          timezone: "Asia/Seoul",
          theme: "dark",
          backgroundColor: "#131722", // 배경색 추가
          gridColor: "#383C48", // 그리드 색상 변경
          upColor: "#26a69a", // 상승 캔들 색상
          downColor: "#ef5350", // 하락 캔들 색상
          borderUpColor: "#26a69a",
          borderDownColor: "#ef5350",
          wickUpColor: "#26a69a",
          wickDownColor: "#ef5350",
          volumeUnderChart: true, // 차트 하단에 거래량 표시
          style: "2", // 1 = 캔들 차트 스타일
          locale: "kr",
          toolbar_bg: "#1e222d",
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_side_toolbar: false,
          save_image: false,
          container_id: container.current.id,
          allow_symbol_change: true, // 심볼 변경 허용
          hide_legend: false, // 범례 표시
          hide_volume: false, // 거래량 숨기지 않음
          withdateranges: true, // 날짜 범위 선택 허용
          studies: [
            "MASimple@tv-basicstudies",
            "BB@tv-basicstudies", // 볼린저 밴드 추가
            "MACD@tv-basicstudies", // MACD 추가
            "RSI@tv-basicstudies", // RSI 추가
          ],
          auto_open_dialogs: ["search"],
          datafeed_error: (error) => {
            console.error("TradingView datafeed error:", error);
            setSymbolError(true);
          },
        };

        new window.TradingView.widget(widgetOptions);
      }
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-container" style={{ width: "100%", height: "100%", position: "relative" }}>
      {symbolError && (
        <div
          className="symbol-error-message"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            zIndex: 1,
          }}
        >
          심볼을 찾을 수 없습니다. 검색 도구를 사용하여 수동으로 심볼을 선택하세요.
        </div>
      )}
      <div ref={container} id="tradingview_widget" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
