const docElm = document.documentElement;
const cardElm = document.querySelector("#card");
const titleElm = document.querySelector("#title");

const { clientWidth, clientHeight } = docElm;

// Stream of all mousemove events
const mouseMove$ = Rx.Observable.fromEvent(docElm, "mousemove").map(
  (event) => ({
    x: event.clientX,
    y: event.clientY,
  })
);

// Stream of all touchmove events
const touchMove$ = Rx.Observable.fromEvent(docElm, "touchmove").map(
  (event) => ({
    x: event.touches[0].clientX,
    y: event.touches[0].clientY,
  })
);

// Combination of mousemove and touchmove streams
const move$ = Rx.Observable.merge(mouseMove$, touchMove$);

// Apply values to styles
move$.subscribe((pos) => {
  const rotX = (pos.y / clientHeight) * -50 + 25;
  const rotY = (pos.x / clientWidth) * 50 - 25;

  cardElm.style.cssText = `
    transform: rotateX(${rotX}deg) rotateY(${rotY}deg);
  `;
});
