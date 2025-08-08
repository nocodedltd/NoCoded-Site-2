export const fadeUp = {
  hidden: {opacity:0, y:20},
  show:  {opacity:1, y:0, transition:{duration:.6, ease:[0.16,1,0.3,1]}},
};

export const stagger = (st=0.12)=>({
  hidden: {},
  show: { transition: { staggerChildren: st } }
});

export const floatIn = {
  hidden: {opacity:0, scale:.96},
  show:  {opacity:1, scale:1, transition:{duration:.5, ease:[0.16,1,0.3,1]}}
};

