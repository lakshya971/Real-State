import React from 'react';
import PropertyGrid from '../components/PropertyGrid';

const Properties = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              All Properties
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our complete collection of premium properties. Find your perfect home with advanced search and filtering options.
            </p>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <PropertyGrid />
    </div>
  );
};

export default Properties;