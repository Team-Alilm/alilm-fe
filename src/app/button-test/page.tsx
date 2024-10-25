'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';

import * as styles from './index.css';

export default function App(): JSX.Element {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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

  const handleClick = (): void => {
    const svg = svgRef.current;
    const button = buttonRef.current;

    if (!svg || !button) return; // 안전하게 null 체크

    // 버튼 클릭 애니메이션
    const buttonTl = gsap.timeline();
    gsap.set(button, { transformOrigin: '50% 50%' });
    buttonTl.to(button, {
      scale: 0.975,
      repeat: 1,
      yoyo: true,
      duration: 0.15,
      ease: 'Back.easeIn.config(1.5)',
    });
    buttonTl.play(0);

    // 새로운 요소들 추가
    const elements: SVGPathElement[] = [];
    for (let i = 0; i < shapeCount; i++) {
      const newElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      newElement.setAttribute('d', gsap.utils.random(shapes));
      newElement.style.fill = gsap.utils.random(colors);
      svg.appendChild(newElement);
      elements.push(newElement);
    }

    // 애니메이션 설정 및 실행
    gsap.set(elements, {
      transformOrigin: '50% 50%',
      scale: gsap.utils.random(0.4, 1),
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
          x: (i: number) => {
            const angle = (i / shapeCount) * Math.PI * 2; // 360도 균등 분포
            const distance = gsap.utils.random(50, 200); // 랜덤한 거리

            return Math.cos(angle) * distance;
          },
          y: (i: number) => {
            const angle = (i / shapeCount) * Math.PI * 2; // 360도 균등 분포
            const distance = gsap.utils.random(50, 200); // 랜덤한 거리

            return Math.sin(angle) * distance;
          },
          ease: 'expo.out',
          duration: 3,
          stagger: {
            amount: 0.15,
          },
        },
        {
          opacity: 0,
          delay: -2.35,
          ease: 'expo.out',
          duration: 0.5,
        },
      ],
    });
  };

  return (
    <section className={`${styles.flex} ${styles.scene}`}>
      <div className={styles.confetti}>
        <figure className={styles.confettiImage}>
          <svg ref={svgRef} viewBox="-225 -225 450 450" role="presentation" />
        </figure>
        <button ref={buttonRef} className={styles.button} type="button" onClick={handleClick}>
          <span className={styles.buttonText}>click me</span>
        </button>
      </div>
    </section>
  );
}
