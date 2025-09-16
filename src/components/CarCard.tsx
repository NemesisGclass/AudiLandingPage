import React from 'react'

interface CarCardProps {
  name: string
  image: string
  video: string
}

const CarCard: React.FC<CarCardProps> = ({ name, image, video }) => {
  return (
    <div className="max-w-full mx-auto px-4">
      <div className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 group">
        <div className="relative w-full h-96" style={{ aspectRatio: '1000/500' }}>
          {/* Static Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0" 
            style={{ backgroundImage: `url('${image}')` }}
          ></div>
          
          {/* Video on Hover */}
          <video 
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            muted
            loop
            playsInline
            preload="metadata"
            autoPlay
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
            onError={(e) => console.log('Video error:', e)}
            onLoadStart={() => console.log('Video loading:', video)}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      {/* Name outside the card */}
      <div className="text-center mt-12">
        <p className="text-2xl text-gray-400 mb-6">Premium Vehicle</p>
        <h3 className="text-7xl font-bold">{name}</h3>
      </div>
    </div>
  )
}

export default CarCard
