'use client'
import React, { useState } from 'react'

const Price_Calc = () => {
    const [invites, setInvites] = useState(150);
    const [duration, setDuration] = useState(4);

    const totalPrice = 850000 + (invites * 20000) + (duration * 2000);

    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-blue-900 text-white px-4 py-3">
                <h3 className="font-semibold">Price Calculator</h3>
            </div>

            <div className="p-4 space-y-6">

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm text-gray-700">Number of invites:</label>
                        <input
                            type="number"
                            value={invites}
                            onChange={(e) => setInvites(Math.max(0, Math.min(500, parseInt(e.target.value) || 0)))}
                            className="w-16 px-2 py-1 text-black border border-gray-300 rounded text-sm text-right"
                        />
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="500"
                        value={invites}
                        onChange={(e) => setInvites(parseInt(e.target.value))}
                        className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0</span>
                        <span>500</span>
                    </div>
                </div>


                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm text-gray-700">Duration of Event (Hours):</label>
                        <input
                            type="number"
                            value={duration}
                            onChange={(e) => setDuration(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                            className="w-16 text-black px-2 py-1 border border-gray-300 rounded text-sm text-right"
                        />
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={duration}
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                        className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>1</span>
                        <span>10</span>
                    </div>
                </div>


                <div className="pt-4 border-t border-gray-200">
                    <div className="text-center">
                        <p className="text-lg font-bold text-gray-900">
                            Total Price: ₹ {totalPrice.toLocaleString('en-IN')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price_Calc