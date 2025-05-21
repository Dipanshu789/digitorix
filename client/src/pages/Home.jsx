import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import "../carousel-custom.css";
import TradingViewWidget from "../components/TradingViewWidget";

export default function Home() {
  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];
  const galleryLabels = [
    "Team Collaboration",
    "Modern Workspace",
    "Tech Innovation",
    "Client Success",
    "Creative Solutions",
    "Growth Journey"
  ];

  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  const handleZoom = () => setZoomed((z) => !z);

  return (
    <div className="bg-black min-vh-100">
      <Container fluid className="p-0">
        <Row>
          <Col xs={12}>
            <Carousel interval={4000} touch={true} pause="hover" indicators={true}>
              <Carousel.Item>
                <div className="carousel-img-wrapper">
                  <img className="d-block w-100 carousel-img" src={img1} alt="First slide" />
                  <div className="carousel-caption-top-left">
                    <h3>Innovative Digital Solutions</h3>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-img-wrapper">
                  <img className="d-block w-100 carousel-img" src={img2} alt="Second slide" />
                  <div className="carousel-caption-top-left">
                    <h3>Expert IT Consulting</h3>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-img-wrapper">
                  <img className="d-block w-100 carousel-img" src={img3} alt="Third slide" />
                  <div className="carousel-caption-top-left">
                    <h3>Custom Software Development</h3>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-img-wrapper">
                  <img className="d-block w-100 carousel-img" src={img4} alt="Fourth slide" />
                  <div className="carousel-caption-top-left">
                    <h3>End-to-End Support</h3>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row className="justify-content-center my-4">
          <Col xs={12} className="text-center">
            <button
              style={{
                padding: "15px 25px",
                fontSize: "25px",
                textAlign: "center",
                cursor: "pointer",
                color: "#fff",
                backgroundColor: "#04c31b",
                borderRadius: "10px",
                boxShadow: "0 5px #0c0c0c",
                border: "none",
              }}
            >
              Stock Market Chart
            </button>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <TradingViewWidget
              widgetScriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js"
              widgetConfig={{
                colorTheme: "dark",
                dateRange: "12M",
                exchange: "BSE",
                showChart: true,
                locale: "in",
                width: "100%",
                height: 800,
                largeChartUrl: "",
                isTransparent: false,
                showSymbolLogo: false,
                showFloatingTooltip: false,
                plotLineColorGrowing: "rgba(41, 98, 255, 1)",
                plotLineColorFalling: "rgba(41, 98, 255, 1)",
                gridLineColor: "rgba(240, 243, 250, 0)",
                scaleFontColor: "rgba(106, 109, 120, 1)",
                belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
                belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
                belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
                belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
                symbolActiveColor: "rgba(41, 98, 255, 0.12)"
              }}
              height={800}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div className="my-5">
              <TradingViewWidget
                widgetScriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js"
                widgetConfig={{
                  symbols: [
                    { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
                    { proName: "FOREXCOM:NSXUSD", title: "US 100" },
                    { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
                    { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
                    { proName: "BITSTAMP:ETHUSD", title: "Ethereum" }
                  ],
                  colorTheme: "dark",
                  isTransparent: false,
                  showSymbolLogo: true,
                  locale: "in"
                }}
                height={120}
              />
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h1 className="mt-4" style={{ color: "#fff" }}>Welcome to Digitornix</h1>
            <p style={{ color: "#fff" }}>We specialize in IT consulting, digital solutions, and custom software development.</p>
          </Col>
        </Row>

        {/* Responsive Animated Gallery Section */}
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div className="gallery-section">
              <button className="gallery-nav-btn left" onClick={handlePrev} tabIndex={0} aria-label="Previous image">&#8592;</button>
              <div className="gallery-images-col">
                {galleryImages.map((img, idx) => (
                  <div
                    className="gallery-img-wrapper"
                    key={idx}
                    style={{ display: idx === current ? "flex" : "none" }}
                  >
                    <span className="gallery-img-label">{galleryLabels[idx]}</span>
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className={`gallery-img${zoomed && idx === current ? " zoomed" : ""}`}
                      onClick={() => setZoomed(z => idx === current ? !z : z)}
                      tabIndex={0}
                      onKeyDown={e => {
                        if (e.key === "Enter" || e.key === " ") setZoomed(z => idx === current ? !z : z);
                      }}
                    />
                    {/* Overlay sliding mark for mobile and all views */}
                    <span className="gallery-slide-mark">
                      {idx + 1} / {galleryImages.length}
                    </span>
                  </div>
                ))}
              </div>
              <button className="gallery-nav-btn right" onClick={handleNext} tabIndex={0} aria-label="Next image">&#8594;</button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <df-messenger
              intent="WELCOME"
              chat-title="Digitornix"
              agent-id="27f4dbf5-7da5-4882-858e-0d50a1875b2b"
              language-code="en"
            ></df-messenger>
          </Col>
        </Row>
      </Container>
    </div>
  );
}