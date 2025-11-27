import React from 'react'
import { Car, User } from 'lucide-react'

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Car className="w-8 h-8 text-blue-900" />
                    <span className="text-xl font-bold text-gray-900 hidden sm:block">Alpha Cars</span>
                </div>
                <nav className="flex items-center space-x-8">
                    <a href="#" className="text-gray-700 hover:text-gray-900 hidden sm:block">Buy Car</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 hidden sm:block">Sell Car</a>
                    <div className="relative">
                        <button className="text-gray-700 hover:text-gray-900 sm:flex items-center hidden">
                            More
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <User className="w-5 h-5 text-gray-700" />
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header