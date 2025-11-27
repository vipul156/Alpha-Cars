'use client'
import React, { useState, useRef } from "react";

const Car360 = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const lastX = useRef(0);
  const totalImages = 72;
  const sensitivity = 1;

  const handleMouseScroll = (event) => {
    event.preventDefault();
    const delta = event.deltaY;
    setCurrentImage((prev) => {
      const next = delta > 0 ? prev + 1 : prev - 1;
      if (next > totalImages) return 1;
      if (next < 1) return totalImages;
      return next;
    });
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    lastX.current = event.clientX;
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - lastX.current;

    if (Math.abs(deltaX) > sensitivity) {
      setCurrentImage((prev) => {
        const next = deltaX > 0 ? prev + 1 : prev - 1;
        if (next > totalImages) return 1;
        if (next < 1) return totalImages;
        return next;
      });
      lastX.current = event.clientX;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (event) => {
    lastX.current = event.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (event) => {
    if (!isDragging) return;

    const deltaX = event.touches[0].clientX - lastX.current;

    if (Math.abs(deltaX) > sensitivity) {
      setCurrentImage((prev) => {
        const next = deltaX > 0 ? prev + 1 : prev - 1;
        if (next > totalImages) return 1;
        if (next < 1) return totalImages;
        return next;
      });
      lastX.current = event.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
      <div
        className={`w-full h-full flex justify-center items-center select-none overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        onWheel={handleMouseScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={currentImage <= 36 ? `/images/images_${currentImage}.jpg` : `/ext-images/ext-zip_${currentImage - 36}.jpg`}
          alt="360° product view"
          className="object-contain transition-opacity duration-150 pointer-events-none"
          draggable="false"
          style={{ userSelect: "none" }}
        />
      </div>
    </div>
  );
};

export default Car360;