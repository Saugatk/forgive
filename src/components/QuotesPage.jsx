import React from 'react';
    import './QuotesPage.css';
    import { useSpring, animated } from 'react-spring';

    const quotes = [
      {
        text: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
        author: 'Helen Keller',
      },
      {
        text: 'Love is not about how many days, weeks, or months you’ve been together, it’s all about how much you love each other every single day.',
        author: 'Unknown',
      },
      {
        text: 'To love and be loved is to feel the sun from both sides.',
        author: 'David Viscott',
      },
      {
        text: 'The course of true love never did run smooth.',
        author: 'William Shakespeare',
      },
      {
        text: 'Love is the greatest refreshment in life.',
        author: 'Pablo Picasso',
      },
    ];

    function QuotesPage() {
      const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
      });

      return (
        <animated.div style={fadeIn} className="quotes-page">
          <div className="petals-background">
            {quotes.map((quote, index) => (
              <QuoteCard key={index} quote={quote} index={index} />
            ))}
          </div>
        </animated.div>
      );
    }

    function QuoteCard({ quote, index }) {
      const cardAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        delay: index * 200,
        config: { duration: 800 },
      });

      return (
        <animated.div style={cardAnimation} className="quote-card">
          <div className="quote-text">
            <p>"{quote.text}"</p>
            <p className="author">- {quote.author}</p>
          </div>
        </animated.div>
      );
    }

    export default QuotesPage;
