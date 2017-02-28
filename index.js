import animationFrame from 'dom-helpers/util/requestAnimationFrame';


export const nextFrame = (...args) => new Promise((resolve) => {
  animationFrame(resolve(...args));
});

const delay = (ms = 0, ...args) => new Promise((resolve, reject) => {
  setTimeout(() => {
    nextFrame()
      .then(() => resolve(ms, ...args));
  }, ms);
});

export default delay;
