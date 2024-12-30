import React, { useState } from 'react';
    import './GiftPage.css';
    import { useSpring, animated } from 'react-spring';

    function GiftPage() {
      const [unwrapped, setUnwrapped] = useState(false);

      const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
      });

      const giftAnimation = useSpring({
        transform: unwrapped ? 'translateY(-50px)' : 'translateY(0px)',
        opacity: unwrapped ? 1 : 0.8,
        config: { duration: 500 },
      });

      const handleUnwrap = () => {
        setUnwrapped(true);
        alert('You have unlocked a special surprise!');
      };

      return (
        <animated.div style={fadeIn} className="gift-page">
          <div className="gift-container">
            <h2>A Gift for You</h2>
            <animated.div style={giftAnimation} className="gift-box" onClick={handleUnwrap}>
              {!unwrapped ? (
                <div className="gift-wrap">
                  <div className="ribbon"></div>
                </div>
              ) : (
                <div className="gift-content">
                  <p>A special surprise awaits you!</p>
                </div>
              )}
            </animated.div>
          </div>
        </animated.div>
      );
    }

    export default GiftPage;
