import React, { useState } from 'react';
import { Search, Plus, Phone, Mail, MapPin, Calendar, CheckCircle, X } from 'lucide-react';

// Detailed Indian Counselor data adapted for the component structure, including image paths
const counselors = [
  {
    id: 1,
    name: 'Dr. Ananya Sharma',
    email: 'ananya.sharma@counsel.in',
    phone: '+91 98765 10001',
    specialization: 'Career Counseling & College Admissions',
    location: 'New Delhi',
    experience: '11 years',
    status: 'approved',
    joinDate: '2024-05-20',
    avatar: 'AS',
    image: '/collage img/tech1.jpeg' // Added image path
  },
  {
    id: 2,
    name: 'Prof. Rajesh Menon',
    email: 'rajesh.menon@counsel.in',
    phone: '+91 90123 20002',
    specialization: 'Engineering & Technology Careers',
    location: 'Bengaluru',
    experience: '9 years',
    status: 'pending',
    joinDate: '2025-01-15',
    avatar: 'RM',
    image: '/collage img/tech4.jpeg' // Added image path
  },
  {
    id: 3,
    name: 'Dr. Priya Desai',
    email: 'priya.desai@counsel.in',
    phone: '+91 88990 30003',
    specialization: 'Medical & Healthcare Careers',
    location: 'Mumbai',
    experience: '13 years',
    status: 'approved',
    joinDate: '2024-08-01',
    avatar: 'PD',
    image: '/collage img/tech2.jpeg' // Added image path
  },
  {
    id: 4,
    name: 'Mr. Arvind Kapoor',
    email: 'arvind.kapoor@counsel.in',
    phone: '+91 77665 40004',
    specialization: 'MBA & Management Studies',
    location: 'Chandigarh',
    experience: '10 years',
    status: 'pending',
    joinDate: '2025-02-10',
    avatar: 'AK',
    image: '/collage img/tech5.jpeg' // Added image path
  },
  {
    id: 5,
    name: 'Ms. Kavya Iyer',
    email: 'kavya.iyer@counsel.in',
    phone: '+91 99887 50005',
    specialization: 'Humanities & Arts Careers',
    location: 'Chennai',
    experience: '8 years',
    status: 'approved',
    joinDate: '2024-11-25',
    avatar: 'KI',
    image: '/collage img/tech3.jpeg' // Added image path
  },
  {
    id: 6,
    name: 'Dr. Neeraj Verma',
    email: 'neeraj.verma@counsel.in',
    phone: '+91 80001 60006',
    specialization: 'Government Exams & Civil Services',
    location: 'Lucknow',
    experience: '15 years',
    status: 'approved',
    joinDate: '2024-09-12',
    avatar: 'NV',
    image: '/collage img/tech6.jpeg' // Added image path
  },
];

export default function Counselors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredCounselors = counselors.filter(counselor => {
    const matchesSearch = counselor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         counselor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         counselor.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || counselor.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleApprove = (counselorId) => {
    console.log(`Approving counselor ${counselorId}`);
    // In a real app, you'd update state/API here
  };

  const handleReject = (counselorId) => {
    console.log(`Rejecting counselor ${counselorId}`);
    // In a real app, you'd update state/API here
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Indian Educational Counselors</h1>
          <p className="text-gray-600 mt-1">Manage expert counselor profiles and their application status</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition-colors shadow-md">
          <Plus className="w-5 h-5" />
          <span>Onboard Counselor</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by Name, Specialization, or City..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full md:w-auto px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
            >
              <option value="All">All Status</option>
              <option value="pending">Pending Review</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Counselors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {filteredCounselors.map((counselor) => (
          <div key={counselor.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                    {/* Displaying Image/Avatar */}
                    {counselor.image ? (
                        <img 
                            src={counselor.image} 
                            alt={counselor.name}
                            className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-md"
                            onError={(e) => {
                                // Fallback to avatar if image fails to load
                                e.target.style.display = 'none'; 
                                const avatarDiv = e.target.parentNode.querySelector('.fallback-avatar');
                                if (avatarDiv) avatarDiv.style.display = 'flex';
                            }}
                        />
                    ) : (
                        <div className="w-14 h-14 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-md fallback-avatar">
                            <span className="text-xl text-white font-bold">{counselor.avatar}</span>
                        </div>
                    )}
                    <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">{counselor.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">ID: {counselor.id.toString().padStart(3, '0')}</p>
                    </div>
                </div>
                <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(counselor.status)}`}>
                    {counselor.status.charAt(0).toUpperCase() + counselor.status.slice(1)}
                </span>
              </div>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 mr-3 text-indigo-500" />
                  <a href={`mailto:${counselor.email}`} className='hover:text-indigo-600 transition-colors'>{counselor.email}</a>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-4 h-4 mr-3 text-indigo-500" />
                  {counselor.phone}
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-4 h-4 mr-3 text-indigo-500" />
                  {counselor.location}
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-4 h-4 mr-3 text-indigo-500" />
                  Joined on: {counselor.joinDate}
                </div>
              </div>

              <div className="mb-4 p-3 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
                <div className="text-sm font-semibold text-gray-900 mb-1">Specialization</div>
                <div className="text-base text-indigo-800 font-medium">{counselor.specialization}</div>
              </div>

              <div className="mb-6">
                <div className="text-sm font-medium text-gray-900 mb-1">Experience</div>
                <div className="text-sm text-gray-600 font-semibold">{counselor.experience}</div>
              </div>

              {counselor.status === 'pending' && (
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleApprove(counselor.id)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 px-3 rounded-lg text-sm font-medium flex items-center justify-center transition-colors shadow-md"
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(counselor.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2.5 px-3 rounded-lg text-sm font-medium flex items-center justify-center transition-colors shadow-md"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Reject
                  </button>
                </div>
              )}

              {counselor.status === 'approved' && (
                <div className="flex space-x-3">
                  <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-3 rounded-lg text-sm font-medium transition-colors shadow-md">
                    View Profile
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors border border-gray-300">
                    Message
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Counselor Statistics (India)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{counselors.length}</div>
            <div className="text-sm text-gray-600">Total Counselors</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">
              {counselors.filter(c => c.status === 'approved').length}
            </div>
            <div className="text-sm text-gray-600">Approved</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 rounded-lg">
            <div className="text-3xl font-bold text-yellow-600">
              {counselors.filter(c => c.status === 'pending').length}
            </div>
            <div className="text-sm text-gray-600">Pending Review</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600">
              {[...new Set(counselors.map(c => c.specialization))].length}
            </div>
            <div className="text-sm text-gray-600">Unique Specializations</div>
          </div>
        </div>
      </div>
    </div>
  );
}