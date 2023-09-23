export const starImageAnimation = {
    initial: { scale: 1, opacity: 0.7 },
    animate: { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] },
    transition: { duration: 2, repeat: Infinity },
  };
  export  const info = {
    spy: true,
    smooth: true,
    duration: 1000,
  };
  export const scaler = {
    initial : { scale: 0.7 },
    whileInView : { scale: 1 },
     transition : { duration: 0.5, damping:10}
  }
  