import { useEffect, useRef } from 'react';
import '../App.css';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const initTyped = async () => {
      const { default: Typed } = await import('typed.js');

      if (typedRef.current) {
        new Typed(typedRef.current, {
          strings: ['Volunteer', 'Content Writer', 'Web Developer', 'UI/UX Designer', 'Translator'],
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          loop: true,
        });
      }
    };

    initTyped();
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>HIRUSHI SIRIWARDHANA</h1>
        <p>I'm a <span ref={typedRef}></span></p>
      </div>
    </section>
  );
};

export default Hero;
