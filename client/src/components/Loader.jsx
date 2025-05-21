import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span className="d">D</span>
        <span className="i">i</span>
        <span className="g">g</span>
        <span className="i2">i</span>
        <span className="t">t</span>
        <span className="o">o</span>
        <span className="r">r</span>
        <span className="n">n</span>
        <span className="i3">i</span>
        <span className="x">x</span>
        <span className="dot1">.</span>
        <span className="dot2">.</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    font-size: 2.2rem;
    font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
    font-weight: 700;
    letter-spacing: 0.15em;
    display: flex;
    gap: 0.08em;
    user-select: none;
  }

  .d, .i, .g, .i2, .t, .o, .r, .n, .i3, .x, .dot1, .dot2 {
    color: #3a2177;
    opacity: 0;
    text-shadow: 2px 2px 3px #bdbdbd;
    animation: fadein 1.6s linear infinite;
  }
  .d { animation-delay: 0.1s; }
  .i { animation-delay: 0.2s; }
  .g { animation-delay: 0.3s; }
  .i2 { animation-delay: 0.4s; }
  .t { animation-delay: 0.5s; }
  .o { animation-delay: 0.6s; }
  .r { animation-delay: 0.7s; }
  .n { animation-delay: 0.8s; }
  .i3 { animation-delay: 0.9s; }
  .x { animation-delay: 1.0s; }
  .dot1 { animation-delay: 1.2s; }
  .dot2 { animation-delay: 1.4s; }

  @keyframes fadein {
    0% { opacity: 0; }
    20% { opacity: 1; }
    60% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

export default Loader;