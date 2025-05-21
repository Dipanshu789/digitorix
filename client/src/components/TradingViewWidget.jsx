import { useEffect, useRef } from "react";

export default function TradingViewWidget({ widgetScriptUrl, widgetConfig, height = 800 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Remove previous widget if any
    if (containerRef.current) containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = widgetScriptUrl;
    script.innerHTML = JSON.stringify(widgetConfig);

    // TradingView expects the config as script.innerHTML
    script.text = JSON.stringify(widgetConfig);

    containerRef.current.appendChild(script);
  }, [widgetScriptUrl, widgetConfig]);

  return (
    <div className="tradingview-widget-container" style={{ width: "100%", margin: "0 auto", maxWidth: 1200 }}>
      <div ref={containerRef} className="tradingview-widget-container__widget" style={{ minHeight: height }} />
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
}