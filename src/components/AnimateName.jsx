// src/components/AnimatedName.jsx
import { useEffect, useState } from 'react';

export default function AnimatedName() {
  const [text, setText] = useState('');
  const name = 'Gaanti Rama Devi'; // Change this to your actual name
  const speed = 90; // ms per character

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
        if (i < name.length - 1) {
            setText((prev) => prev + name[i]);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);

    return () => clearInterval(timer);
  }, []);

  return (
    <h1
      style={{
        fontSize: '3rem',
        textAlign: 'center',
        marginTop: '2rem',
      }}
    >
      {text}
    </h1>
  );
}
