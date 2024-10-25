import { gsap } from 'gsap';

export const FanfareAnimation = (svgRef: React.RefObject<SVGSVGElement>) => {
  const svg = svgRef.current;
  if (!svg) return;

  const colors: string[] = [
    '#4b7bec',
    '#fc5c65',
    '#fed330',
    '#26de81',
    '#2bcbba',
    '#fd9644',
    '#a55eea',
  ];
  const shapes: string[] = [
    'M -20 0 a 20 20 0 1 0 40 0 a 20 20 0 1 0 -40 0', // circle
    'M -20 0 a 20 20 0 1 0 40 0 Z', // semicircle
    'M -10 -10 H 20 V 20 H -10 Z', // square
    'M 0 -15 L 20 20 L -20 20 Z', // triangle
  ];
  const shapeCount = 16;

  const elements: SVGPathElement[] = [];
  for (let i = 0; i < shapeCount; i++) {
    const newElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    newElement.setAttribute('d', gsap.utils.random(shapes));
    newElement.style.fill = gsap.utils.random(colors);
    svg.appendChild(newElement);
    elements.push(newElement);
  }

  gsap.set(elements, {
    transformOrigin: '50% 50%',
    scale: gsap.utils.random(0.4, 0.8),
  });

  const removeElements = (): void => {
    elements.forEach(shape => {
      if (svg.contains(shape)) svg.removeChild(shape);
    });
  };

  gsap.to(elements, {
    onComplete: removeElements,
    keyframes: [
      {
        rotation: gsap.utils.random(-360, 360),
        x: () => {
          const angle = gsap.utils.random(0, Math.PI * 2); // 랜덤 각도
          const distance = gsap.utils.random(200, 400); // 랜덤 거리

          return Math.cos(angle) * distance;
        },
        y: () => {
          const angle = gsap.utils.random(0, Math.PI * 2); // 랜덤 각도
          const distance = gsap.utils.random(200, 400); // 랜덤 거리

          return Math.sin(angle) * distance;
        },
        ease: 'expo.out',
        duration: 5,
        stagger: {
          amount: 0.15,
        },
      },
      {
        opacity: 0,
        delay: -4.35,
        ease: 'expo.out',
        duration: 0.5,
      },
    ],
  });
};
