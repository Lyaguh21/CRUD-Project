import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedText({ text }: { text: string }) {
  const letters = Array.from(text);
  const containerRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      style={{
        display: 'flex',
        overflow: 'hidden',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: index * 0.05,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          style={{
            display: 'inline-block',
            whiteSpace: 'pre',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
