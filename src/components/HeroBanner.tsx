import React, { useState, useEffect } from 'react';

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
}

const banners: BannerItem[] = [
  {
    id: 1,
    title: "All-New Kindle",
    subtitle: "The lightest and most compact Kindle, now with a 300 ppi high-resolution display",
    buttonText: "Shop Now",
    image: "https://images.pexels.com/photos/1496183/pexels-photo-1496183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Prime Day Deals",
    subtitle: "Save big on thousands of items across all categories",
    buttonText: "Explore Deals",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Echo & Alexa",
    subtitle: "Designs that fit your life. Features that adapt to your home.",
    buttonText: "Learn More",
    image: "https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const HeroBanner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto rotate banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentBanner(index);
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "min(500px, 50vh)" }}>
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#00000080] to-transparent z-10"
        aria-hidden="true"
      ></div>

      {/* Banner images */}
      <div className="relative w-full h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentBanner === index ? 1 : 0 }}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 z-20 text-white">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {banner.title}
              </h2>
              <p className="text-sm md:text-base mb-4 max-w-md">
                {banner.subtitle}
              </p>
              <button className="bg-[#FF9900] hover:bg-[#E88A00] text-black font-bold py-2 px-6 rounded transition-colors">
                {banner.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentBanner === index ? "bg-[#FF9900]" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;