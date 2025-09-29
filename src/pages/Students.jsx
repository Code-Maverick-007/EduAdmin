import React, { useState } from 'react';
import { Search, Filter, Plus, MoreHorizontal, Eye, CreditCard as Edit, Trash2 } from 'lucide-react';

// Updated data with Indian student names, government colleges, and J&K specific institutions
const students = [
  {
    id: 1,
    name: 'Priya Sharma',
    email: 'priya.sharma@iitb.ac.in',
    phone: '+91 98765 12345',
    status: 'Enrolled',
    college: 'IIT Bombay',
    course: 'Computer Science',
    avatar: 'PS'
  },
  {
    id: 2,
    name: 'Rahul Singh',
    email: 'rahul.singh@nitw.ac.in',
    phone: '+91 90123 67890',
    status: 'Active',
    college: 'NIT Warangal',
    course: 'Electrical Engineering',
    avatar: 'RS'
  },
  {
    id: 3,
    name: 'Aisha Khan',
    email: 'aisha.khan@nitsri.ac.in',
    phone: '+91 88990 11223',
    status: 'Pending',
    college: 'NIT Srinagar (J&K)',
    course: 'Civil Engineering',
    avatar: 'AK'
  },
  {
    id: 4,
    name: 'Sanjay Reddy',
    email: 'sanjay.reddy@iitd.ac.in',
    phone: '+91 77665 44332',
    status: 'Enrolled',
    college: 'IIT Delhi',
    course: 'Mechanical Engineering',
    avatar: 'SR'
  },
  {
    id: 5,
    name: 'Meera Menon',
    email: 'meera.menon@juc.ac.in',
    phone: '+91 99887 22110',
    status: 'Active',
    college: 'Jadavpur University',
    course: 'Mathematics',
    avatar: 'MM'
  },
  {
    id: 6,
    name: 'Vishal Patel',
    email: 'vishal.patel@du.ac.in',
    phone: '+91 80001 34567',
    status: 'Active',
    college: 'Delhi University',
    course: 'Physics Hons.',
    avatar: 'VP'
  },
  {
    id: 7,
    name: 'Tanya Verma',
    email: 'tanya.verma@cuk.ac.in',
    phone: '+91 75678 90123',
    status: 'Pending',
    college: 'Central University of Kashmir (J&K)',
    course: 'Political Science',
    avatar: 'TV'
  },
  {
    id: 8,
    name: 'Faisal Bhat',
    email: 'faisal.bhat@gcet.ac.in',
    phone: '+91 94190 56789',
    status: 'Enrolled',
    college: 'Govt. College of Engg. & Tech., Jammu (J&K)',
    course: 'IT Engineering',
    avatar: 'FB'
  },
  {
    id: 9,
    name: 'Suman Das',
    email: 'suman.das@iitkgp.ac.in',
    phone: '+91 96543 21098',
    status: 'Active',
    college: 'IIT Kharagpur',
    course: 'Aerospace Engineering',
    avatar: 'SD'
  },
];

export default function Students() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showDropdown, setShowDropdown] = useState(null);

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.college.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || student.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Enrolled':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Indian Government College Student Data</h1>
          <p className="text-gray-600 mt-1">Managing profiles from Centrally Funded Technical Institutions (CFTIs) and Central Universities, including J&K.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition-colors shadow-md">
          <Plus className="w-5 h-5" />
          <span>Add New Student</span>
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
                placeholder="Search by Name, Email, or College (e.g., IIT, NIT, Kashmir)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full md:w-auto px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Enrolled">Enrolled</option>
              <option value="Pending">Pending</option>
            </select>
            <button className="w-full md:w-auto px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center space-x-2 transition-colors">
              <Filter className="w-4 h-4" />
              <span className='hidden sm:inline'>Filter Options</span>
            </button>
          </div>
        </div>
      </div>

      {/* Students List */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Institution & Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-indigo-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center">
                          <span className="text-sm font-semibold text-white">{student.avatar}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">{student.name}</div>
                        <div className="text-xs text-gray-500">Student ID: {student.id.toString().padStart(4, '0')}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.email}</div>
                    <div className="text-sm text-gray-500">{student.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{student.college}</div>
                    <div className="text-xs text-gray-500">{student.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(student.status)}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="relative">
                      <button
                        onClick={() => setShowDropdown(showDropdown === student.id ? null : student.id)}
                        className="text-gray-500 hover:text-indigo-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                      {showDropdown === student.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20 border border-gray-200 origin-top-right animate-fade-in-down">
                          <div className="py-1">
                            <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">
                              <Eye className="w-4 h-4 mr-3 text-indigo-500" />
                              View Profile
                            </button>
                            <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">
                              <Edit className="w-4 h-4 mr-3 text-green-500" />
                              Edit Application
                            </button>
                            <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left transition-colors">
                              <Trash2 className="w-4 h-4 mr-3" />
                              Remove Student
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-semibold text-gray-900">1</span> to <span className="font-semibold text-gray-900">{filteredStudents.length}</span> of{' '}
          <span className="font-semibold text-gray-900">{students.length}</span> results
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
            Previous
          </button>
          <button className="px-3 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700">
            1
          </button>
          <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}