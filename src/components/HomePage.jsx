import React from 'react';
    import './HomePage.css';
    import { useSpring, animated } from 'react-spring';

    function HomePage() {
      const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
      });

      const flowerAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        delay: 500,
        config: { duration: 1000 },
      });

      const roseClick = () => {
        alert('A special message for you!');
      };

      return (
        <animated.div style={fadeIn} className="home-page">
          <div className="garden-container">
            <animated.h1 style={flowerAnimation} className="glowing-text">
              A Garden of New Beginnings
            </animated.h1>
            <div className="flower-row">
              <animated.div style={flowerAnimation} className="flower">
                <img src="/rose.png" alt="Yellow Rose" />
              </animated.div>
              <animated.div style={flowerAnimation} className="flower">
                <img src="/lily.png" alt="Lily" />
              </animated.div>
              <animated.div style={flowerAnimation} className="flower">
                <img src="/rose.png" alt="Yellow Rose" />
              </animated.div>
            </div>
            <div className="interactive-rose">
              <animated.img
                style={flowerAnimation}
                src="/rose-center.png"
                alt="Central Rose"
                onClick={roseClick}
              />
            </div>
          </div>
        </animated.div>
      );
    }

    export default HomePage;
