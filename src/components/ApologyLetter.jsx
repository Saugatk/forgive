import React from 'react';
    import './ApologyLetter.css';
    import { useSpring, animated } from 'react-spring';
    import { useNavigate } from 'react-router-dom';

    function ApologyLetter() {
      const navigate = useNavigate();

      const parchmentAnimation = useSpring({
        from: { opacity: 0, transform: 'scale(0.5)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 1000 },
      });

      const textAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        delay: 500,
        config: { duration: 1000 },
      });

      const handleAccept = () => {
        navigate('/quotes');
      };

      return (
        <div className="apology-letter-page">
          <animated.div style={parchmentAnimation} className="parchment">
            <animated.div style={textAnimation} className="letter-content">
              <p>My Dearest Love,</p>
              <p>
                Words cannot express how deeply sorry I am for the pain I've caused. I understand that I've wasted your time, love, and trust, and for that, I am truly regretful.
              </p>
              <p>
                I promise to do everything in my power to make things right. I am committed to changing and becoming the person you deserve.
              </p>
              <p>With all my love and deepest apologies,</p>
              <p>Your Devoted Partner</p>
            </animated.div>
            <button className="seal-button" onClick={handleAccept}>
              Seal of Forgiveness
            </button>
          </animated.div>
        </div>
      );
    }

    export default ApologyLetter;
