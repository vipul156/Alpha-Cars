'use client'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Car360 from './Car360'
import Image from 'next/image'

const Coursel = () => {
    const [currentImage, setCurrentImage] = useState(0);

    let images = []
    for (let i = 1; i <= 116; i++) {
        images.push(`coursel-img/coursel-img_${i}.jpg`)
    }

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };
    return (
        <div className="lg:col-span-2">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <img
                    src={images[currentImage]}
                    alt="Alpha Omega 2025"
                    className="w-full sm:h-140 object-cover"
                />

                <button
                    onClick={prevImage}
                    className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1 sm:p-2 rounded-full shadow-lg"
                >
                    <ChevronLeft className="sm:size-6 size-3 text-gray-800" />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1 sm:p-2 rounded-full shadow-lg"
                >
                    <ChevronRight className="sm:size-6 size-3 text-gray-800" />
                </button>
                <Dialog className>
                    <div className='absolute  bottom-1 right-1 sm:bottom-3 sm:right-4 bg-black/45 px-2 py-1 sm:px-3 sm:py-2 text-white font-bold rounded-xl text-[10px] sm:text-sm'>
                        {currentImage + 1} / {images.length}
                    </div>
                    <DialogTrigger asChild>
                        <button className="absolute bottom-1 sm:bottom-4 left-3 sm:left-1/2  sm:-translate-x-1/2 bg-blue-900 hover:bg-blue-800 text-white py-1 px-2 text-[10px] sm:text-sm sm:px-4 sm:py-2 rounded-md font-medium flex gap-2 items-center justify-center">
                            <Image src="/images_37.jpg" alt="360" width={20} height={20} /> 360° View
                        </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[100vw] w-screen h-[85vh] md:h-[95vh] flex flex-col p-0 sm:max-w-[95vw]">
                        <DialogHeader className="px-6 pt-6 pb-2 shrink-0">
                            <DialogTitle>360° Car View</DialogTitle>
                        </DialogHeader>
                        <div className="flex-1 overflow-hidden p-6 pt-2">
                            <Car360 />
                        </div>
                    </DialogContent>
                </Dialog>
            </div>


            <div className="flex justify-center space-x-2 mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`h-1 rounded-full transition-all ${index === currentImage ? 'w-8 bg-blue-900' : 'w-6 bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Coursel