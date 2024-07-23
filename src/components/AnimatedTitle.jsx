import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const AnimatedTitle = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]); // Adjust scale range as needed

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log('Scroll progress:', latest);
    });
  }, [scrollYProgress]);

  return (
    <motion.h1
      className='text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-white py-6 text-center mt-32'
      style={{ scale }}
    >
      Projects
    </motion.h1>
  );
};

export default AnimatedTitle;
