import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    let animationFrameId;
    let targetX = -100;
    let targetY = -100;
    let followerX = -100;
    let followerY = -100;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
    };

    const handleMouseDown = () => {
      if (dotRef.current) dotRef.current.classList.add('clicked');
      if (ringRef.current) ringRef.current.classList.add('clicked');
    };

    const handleMouseUp = () => {
      if (dotRef.current) dotRef.current.classList.remove('clicked');
      if (ringRef.current) ringRef.current.classList.remove('clicked');
    };

    // Smooth lerp loop for outer ring directly via DOM
    const render = () => {
      followerX += (targetX - followerX) * 0.2;
      followerY += (targetY - followerY) * 0.2;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse over interactive elements listener
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.glass-card') ||
        target.closest('.portfolio-card') ||
        target.closest('.service-card') ||
        target.closest('.social-icon-btn')
      );

      if (isInteractive) {
        if (dotRef.current) dotRef.current.classList.add('hovered');
        if (ringRef.current) ringRef.current.classList.add('hovered');
      } else {
        if (dotRef.current) dotRef.current.classList.remove('hovered');
        if (ringRef.current) ringRef.current.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
