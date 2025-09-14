import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Building } from 'lucide-react';
import { SearchFilters } from '../types';

const Hero = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    priceRange: { min: 0, max: 1000000 },
    propertyType: '',
    bedrooms: 0
  });

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
    // This would typically navigate to properties page with filters
  };

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury homes"
        />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Your Perfect
            <span className="block text-blue-400">Dream Home</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover exceptional properties with our expert real estate consulting services. 
            We help buyers find their ideal homes and assist builders and brokers in showcasing their listings.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Location */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter location..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                    onChange={(e) => {
                      const [min, max] = e.target.value.split('-').map(Number);
                      setFilters({ ...filters, priceRange: { min, max } });
                    }}
                  >
                    <option value="0-1000000">Any Price</option>
                    <option value="0-300000">Under $300K</option>
                    <option value="300000-500000">$300K - $500K</option>
                    <option value="500000-800000">$500K - $800K</option>
                    <option value="800000-1200000">$800K - $1.2M</option>
                    <option value="1200000-999999999">Above $1.2M</option>
                  </select>
                </div>
              </div>

              {/* Property Type */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                    value={filters.propertyType}
                    onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                  >
                    <option value="">All Types</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                    <option value="condo">Condo</option>
                  </select>
                </div>
              </div>

              {/* Bedrooms */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                  value={filters.bedrooms}
                  onChange={(e) => setFilters({ ...filters, bedrooms: Number(e.target.value) })}
                >
                  <option value={0}>Any</option>
                  <option value={1}>1+ Bed</option>
                  <option value={2}>2+ Beds</option>
                  <option value={3}>3+ Beds</option>
                  <option value={4}>4+ Beds</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6 md:mt-8">
              <button
                onClick={handleSearch}
                className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Search className="w-5 h-5" />
                <span>Search Properties</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Properties Listed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-300">Expert Agents</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;