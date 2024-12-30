import React from 'react';
    import './PhotoGallery.css';
    import { useSpring, animated } from 'react-spring';

    const galleryItems = [
      {
        type: 'image',
        src: '/gallery1.jpg',
        caption: 'A beautiful sunset we watched together',
      },
      {
        type: 'video',
        src: '/gallery1.mp4',
        caption: 'Our fun road trip',
      },
      {
        type: 'image',
        src: '/gallery2.jpg',
        caption: 'A special moment',
      },
      {
        type: 'image',
        src: '/gallery3.jpg',
        caption: 'Our favorite place',
      },
      {
        type: 'video',
        src: '/gallery2.mp4',
        caption: 'A funny moment',
      },
    ];

    function PhotoGallery() {
      const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
      });

      return (
        <animated.div style={fadeIn} className="photo-gallery-page">
          <div className="gallery-container">
            <h2>Photo Gallery</h2>
            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <GalleryItem key={index} item={item} />
              ))}
            </div>
          </div>
        </animated.div>
      );
    }

    function GalleryItem({ item }) {
      const itemAnimation = useSpring({
        from: { opacity: 0, transform: 'scale(0.9)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 300 },
      });

      const handleItemClick = () => {
        alert(`Clicked on: ${item.caption}`);
      };

      return (
        <animated.div style={itemAnimation} className="gallery-item" onClick={handleItemClick}>
          {item.type === 'image' ? (
            <img src={item.src} alt={item.caption} />
          ) : (
            <video src={item.src} controls />
          )}
          <p>{item.caption}</p>
        </animated.div>
      );
    }

    export default PhotoGallery;
