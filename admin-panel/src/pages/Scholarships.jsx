import React, { useState } from 'react';
import { Search, Plus, DollarSign, Users, Clock, Award, TrendingUp } from 'lucide-react';

// Updated data with Indian Scholarship details (Rupees, Indian providers, relevant names)
const scholarships = [
  {
    id: 1,
    name: 'Post Matric Scholarship for SC/ST',
    provider: 'Ministry of Social Justice & Empowerment',
    amount: '₹1,20,000/year',
    type: 'Need-based (Government)',
    applicants: '1,245',
    deadline: '2025-01-31',
    status: 'Active',
    description: 'A major central scheme for SC/ST students pursuing higher education across India.',
    color: 'bg-indigo-600'
  },
  {
    id: 2,
    name: 'Aditya Birla Group Scholarship',
    provider: 'Aditya Birla Group',
    amount: '₹1,75,000/year',
    type: 'Merit-based (Corporate)',
    applicants: '889',
    deadline: '2024-12-15',
    status: 'Active',
    description: 'For students of premier institutions like IITs, IIMs, and top Law Schools.',
    color: 'bg-green-600'
  },
  {
    id: 3,
    name: 'CSIR Research Fellowship',
    provider: 'Council of Scientific & Industrial Research',
    amount: '₹37,000/month',
    type: 'Research',
    applicants: '560',
    deadline: '2025-03-20',
    status: 'Active',
    description: 'Junior Research Fellowship for NET/GATE qualified candidates in Science & Tech.',
    color: 'bg-red-600'
  },
  {
    id: 4,
    name: 'Chief Minister Scholarship Scheme (MP)',
    provider: 'Govt. of Madhya Pradesh',
    amount: '₹10,000/year',
    type: 'State-Specific (Need)',
    applicants: '2,503',
    deadline: '2025-05-10',
    status: 'Active',
    description: 'Financial aid for students from MP for various undergraduate courses.',
    color: 'bg-yellow-600'
  },
  {
    id: 5,
    name: 'Inlaks Fine Arts Grant',
    provider: 'Inlaks Shivdasani Foundation',
    amount: '₹7,500/month',
    type: 'Creative (Foundation)',
    applicants: '198',
    deadline: '2025-03-30',
    status: 'Active',
    description: 'Supporting creative talents in visual and performing arts.',
    color: 'bg-pink-600'
  },
  {
    id: 6,
    name: 'L&T Build India Scholarship',
    provider: 'Larsen & Toubro (L&T)',
    amount: 'Tuition + Stipend',
    type: 'Field-specific (Corporate)',
    applicants: '634',
    deadline: '2025-04-15',
    status: 'Active',
    description: 'Sponsorship for M.Tech in Construction Technology at select IITs/NITs.',
    color: 'bg-teal-600'
  },
];

const scholarshipStats = [
  { name: 'Total Active Schemes', value: '420', icon: Award, color: 'bg-indigo-600' },
  { name: 'Total Funding (Est.)', value: '₹500 Cr+', icon: DollarSign, color: 'bg-green-600' },
  { name: 'Total Applicants (Current Cycle)', value: '1.2 Lakh', icon: Users, color: 'bg-red-600' },
  { name: 'Urgent Deadlines (<30 days)', value: '14', icon: Clock, color: 'bg-orange-600' },
];

export default function Scholarships() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const types = ['All', 'Need-based (Government)', 'Merit-based (Corporate)', 'Research', 'State-Specific (Need)', 'Creative (Foundation)', 'Field-specific (Corporate)'];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || scholarship.type === selectedType;
    return matchesSearch && matchesType;
  });

  const recentApplications = [
    { student: 'Rahul Sharma', scholarship: 'Post Matric Scholarship for SC/ST', date: '2 hours ago', status: 'new' },
    { student: 'Priya Verma', scholarship: 'Aditya Birla Group Scholarship', date: '4 hours ago', status: 'reviewed' },
    { student: 'Amit Patel', scholarship: 'CSIR Research Fellowship', date: '1 day ago', status: 'approved' },
    { student: 'Sneha Menon', scholarship: 'Chief Minister Scholarship Scheme (MP)', date: '2 days ago', status: 'pending' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'new': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Scholarship Management (India)</h1>
          <p className="text-gray-600 mt-1">Monitor and manage Government, Corporate, and Private scholarship schemes.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition-colors shadow-md">
          <Plus className="w-5 h-5" />
          <span>Add New Scheme</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {scholarshipStats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-4 rounded-full`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by Scheme or Provider..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors text-sm font-medium ${
                  selectedType === type
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scholarships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScholarships.map((scholarship) => (
          <div key={scholarship.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`${scholarship.color} p-3 rounded-full flex-shrink-0`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 text-xs font-semibold rounded-full border border-green-300">
                  {scholarship.status}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 min-h-[50px]">{scholarship.name}</h3>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{scholarship.description}</p>

              <div className="space-y-3 mb-6 border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Provider:</span>
                  <span className="text-sm font-medium text-gray-900">{scholarship.provider}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Amount:</span>
                  <span className="text-base font-bold text-green-700">{scholarship.amount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Type:</span>
                  <span className="text-sm font-medium text-gray-900">{scholarship.type}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Applicants:</span>
                  <span className="text-sm font-medium text-gray-900">{scholarship.applicants}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Deadline:</span>
                  <span className="text-sm font-medium text-red-600">{new Date(scholarship.deadline).toLocaleDateString('en-IN', {day: 'numeric', month: 'short', year: 'numeric'})}</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-3 rounded-lg text-sm font-medium transition-colors shadow-md">
                  View Guidelines
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors border border-gray-300">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Application Trends */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Application Activity</h3>
        <div className="space-y-4">
          {recentApplications.map((application, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-white">
                    {application.student.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{application.student}</div>
                  <div className="text-sm text-gray-600">{application.scholarship}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">{application.date}</div>
                <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full mt-1 ${getStatusColor(application.status)}`}>
                  {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}