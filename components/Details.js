import React from 'react'
import Price_Calc from './Price_Calc'
import { Car, Calendar, Gauge, IndianRupee } from 'lucide-react'

const Details = () => {
  return (
    <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Car Overview</h2>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Car className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">Model: <span className="font-medium">Alpha Omega 2025</span></span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">Year: <span className="font-medium">2025</span></span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Gauge className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">Mileage: <span className="font-medium">20 km/l</span></span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-700">
                    <IndianRupee className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">Price: <span className="font-medium">₹ 8,50,000</span></span>
                  </div>
                </div>
              </div>
              <Price_Calc />
            </div>
  )
}

export default Details