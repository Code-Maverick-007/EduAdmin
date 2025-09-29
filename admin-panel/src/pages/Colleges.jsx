import React, { useState } from 'react';
import { Search, Plus, MapPin, Star, Users, ExternalLink } from 'lucide-react';

const colleges = [
  
    {
      "id": "DL2",
      "name": "All India Institute of Medical Sciences (AIIMS) Delhi",
      "location": "New Delhi, India",
      "rating": 5.0,
      "students": 2500,
      "image": "/collage img/AIIMS delhi.webp",
      "category": "Medical",
      "established": 1956,
      "description": "India's top medical institute providing undergraduate, postgraduate, and research programs in medicine and allied sciences."
    },
    {
      "id": "JK1",
      "name": "National Institute of Technology Srinagar (NIT Srinagar)",
      "location": "Srinagar, J&K, India",
      "rating": 4.6,
      "students": 3800,
      "image": "/collage img/NIT Srinagar.jpeg",
      "category": "Technical",
      "established": 1960,
      "description": "A premier engineering institute and one of the 31 NITs in India, located in Jammu & Kashmir."
    },
    {
      "id": "GJ4",
      "name": "Gujarat National Law University (GNLU)",
      "location": "Gandhinagar, Gujarat, India",
      "rating": 4.6,
      "students": 1500,
      "image": "/collage img/GNLU.jpeg",
      "category": "Law",
      "established": 2003,
      "description": "One of India's leading National Law Universities offering integrated LLB, LLM, and PhD programs."
    },
    {
      "id": "MH3",
      "name": "Savitribai Phule Pune University (SPPU)",
      "location": "Pune, Maharashtra, India",
      "rating": 4.6,
      "students": 700000,
      "image": "/collage img/SPPU.jpeg",
      "category": "University",
      "established": 1949,
      "description": "One of India's largest and most reputed affiliating universities, offering a vast array of courses in science, commerce, arts, and law."
    },
    {
      "id": "DL4",
      "name": "Delhi Technological University (DTU)",
      "location": "New Delhi, India",
      "rating": 4.7,
      "students": 15000,
      "image": "/collage img/DTU.jpeg",
      "category": "University",
      "established": 1941,
      "description": "A leading government engineering university known for research, innovation, and strong placement records."
    },
    {
      "id": "MH1",
      "name": "Indian Institute of Technology Bombay (IIT Bombay)",
      "location": "Powai, Mumbai, India",
      "rating": 4.9,
      "students": 12000,
      "image": "/collage img/IIT Bombay.jpeg",
      "category": "Technical",
      "established": 1958,
      "description": "A world-renowned engineering institute with strong research, global recognition, and excellent placement opportunities."
    }
  
];

export default function Colleges() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'University', 'Technical', 'Business', 'Medical', 'Arts', 'Research'];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || college.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Colleges</h1>
          <p className="text-gray-600">Browse and manage partner institutions</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add College</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search colleges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Colleges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college) => (
          <div key={college.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48 bg-gray-200">
              <img 
                src={college.image} 
                alt={college.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {college.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{college.name}</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                {college.location}
              </div>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{college.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{college.rating}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  {college.students.toLocaleString()} students
                </div>
              </div>
              
              <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                <span>Est. {college.established}</span>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md text-sm font-medium transition-colors">
                  View Details
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm font-medium transition-colors">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">College Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{colleges.length}</div>
            <div className="text-sm text-gray-600">Total Colleges</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {colleges.reduce((sum, college) => sum + college.students, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {(colleges.reduce((sum, college) => sum + college.rating, 0) / colleges.length).toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{categories.length - 1}</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
}