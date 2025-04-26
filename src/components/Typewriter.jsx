import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Typewriter = () => {
  const el = useRef(null);  // This will reference the DOM element

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full stack web developer", " Coding"],
      typeSpeed: 132,
      backSpeed: 132,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup the Typed.js instance when the component is unmounted
    };
  }, []);

  return (
    <div>
      Thiv <span ref={el}></span> {/* The typed text will appear here */}
    </div>
  );
};

export default Typewriter;
