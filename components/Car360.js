'use client'
import React, { useState, useRef, useEffect } from "react";

const Car360 = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const [isPreloading, setIsPreloading] = useState(true);
  const lastX = useRef(0);
  const imageCache = useRef([]);
  const totalImages = 72;
  const sensitivity = 1;

  // Preload all images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = [];
      
      for (let i = 1; i <= totalImages; i++) {
        const img = new Image();
        const src = i <= 36 
          ? `/images/images_${i}.jpg` 
          : `/ext-images/ext-zip_${i - 36}.jpg`;
        
        const promise = new Promise((resolve) => {
          img.onload = () => {
            setLoadedImages((prev) => prev + 1);
            resolve();
          };
          img.onerror = () => resolve();
        });
        
        img.src = src;
        imageCache.current[i] = img;
        promises.push(promise);
      }
      
      await Promise.all(promises);
      setIsPreloading(false);
    };

    preloadImages();
  }, []);

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

  const currentSrc = currentImage <= 36 
    ? `/images/images_${currentImage}.jpg` 
    : `/ext-images/ext-zip_${currentImage - 36}.jpg`;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
      {isPreloading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="text-white text-xl mb-4">Loading 360° View...</div>
          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${(loadedImages / totalImages) * 100}%` }}
            />
          </div>
          <div className="text-white text-sm mt-2">
            {loadedImages} / {totalImages} images
          </div>
        </div>
      )}

      <div
        className={`w-full h-full flex justify-center items-center select-none overflow-hidden ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
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
          src={currentSrc}
          alt="360° product view"
          className="object-contain pointer-events-none"
          draggable="false"
          style={{ 
            userSelect: "none",
            opacity: isPreloading ? 0.5 : 1,
            transition: 'none' 
          }}
        />
      </div>
    </div>
  );
};

export default Car360;