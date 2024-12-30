import React from 'react';
    import './MemoriesPage.css';
    import { useSpring, animated } from 'react-spring';

    const memories = [
      {
        type: 'image',
        src: '/memory1.jpg',
        caption: 'Our first date',
      },
      {
        type: 'video',
        src: '/memory1.mp4',
        caption: 'A fun day at the beach',
      },
      {
        type: 'image',
        src: '/memory2.jpg',
        caption: 'Our trip to the mountains',
      },
    ];

    const promises = [
      'I promise to always listen to you.',
      'I promise to support your dreams.',
      'I promise to be a better partner.',
      'I promise to cherish every moment with you.',
    ];

    function MemoriesPage() {
      const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
      });

      return (
        <animated.div style={fadeIn} className="memories-page">
          <div className="memories-container">
            <h2>Cherished Memories</h2>
            <div className="memories-carousel">
              {memories.map((memory, index) => (
                <MemoryItem key={index} memory={memory} />
              ))}
            </div>
            <h2>Future Promises</h2>
            <div className="promises-list">
              {promises.map((promise, index) => (
                <PromiseItem key={index} promise={promise} />
              ))}
            </div>
          </div>
        </animated.div>
      );
    }

    function MemoryItem({ memory }) {
      const itemAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { duration: 500 },
      });

      return (
        <animated.div style={itemAnimation} className="memory-item">
          {memory.type === 'image' ? (
            <img src={memory.src} alt={memory.caption} />
          ) : (
            <video src={memory.src} controls />
          )}
          <p>{memory.caption}</p>
        </animated.div>
      );
    }

    function PromiseItem({ promise }) {
      const promiseAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 500 },
      });

      return (
        <animated.div style={promiseAnimation} className="promise-item">
          {promise}
        </animated.div>
      );
    }

    export default MemoriesPage;
