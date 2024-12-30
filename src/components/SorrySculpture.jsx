import React, { useState, useRef } from 'react';
    import './SorrySculpture.css';
    import { useSpring, animated } from 'react-spring';

    function SorrySculpture() {
      const [color, setColor] = useState('#808080');
      const canvasRef = useRef(null);

      const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
      });

      const handleColorChange = (newColor) => {
        setColor(newColor);
      };

      const handleCanvasClick = (event) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fill();
      };

      return (
        <animated.div style={fadeIn} className="sorry-sculpture-page">
          <div className="sculpture-container">
            <h2>The "Sorry" Sculpture</h2>
            <p>
              The word "Sorry" can't be erased, but it can be beautified with new efforts, symbolizing your commitment to change.
            </p>
            <div className="canvas-container">
              <canvas
                ref={canvasRef}
                width={400}
                height={200}
                onClick={handleCanvasClick}
                className="sculpture-canvas"
              />
              <div className="color-picker">
                <button
                  className="color-button red"
                  onClick={() => handleColorChange('red')}
                />
                <button
                  className="color-button blue"
                  onClick={() => handleColorChange('blue')}
                />
                <button
                  className="color-button green"
                  onClick={() => handleColorChange('green')}
                />
                <button
                  className="color-button yellow"
                  onClick={() => handleColorChange('yellow')}
                />
                <button
                  className="color-button purple"
                  onClick={() => handleColorChange('purple')}
                />
              </div>
            </div>
          </div>
        </animated.div>
      );
    }

    export default SorrySculpture;
