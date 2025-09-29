import React from 'react';
import { TrendingUp, Users, Clock, CheckCircle, XCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

// Updated data for an Indian context (larger volumes, relevant financial/process details)
const enrollmentStats = [
  // Increased volume for Indian context
  { name: 'Total Applications', value: '45,670', change: '+25%', icon: Users, color: 'bg-blue-600' },
  { name: 'Approved', value: '38,120', change: '+22%', icon: CheckCircle, color: 'bg-green-600' },
  { name: 'Pending (Verification)', value: '6,050', change: '+15%', icon: Clock, color: 'bg-yellow-600' },
  { name: 'Success Rate (YoY)', value: '83%', change: '+5%', icon: TrendingUp, color: 'bg-purple-600' },
];

const monthlyData = [
  // Example data reflecting peak admission cycle months (e.g., May to August)
  { month: 'Apr', applications: 4200, approvals: 3500 },
  { month: 'May', applications: 6500, approvals: 5800 },
  { month: 'Jun', applications: 8100, approvals: 6900 },
  { month: 'Jul', applications: 9500, approvals: 8200 },
  { month: 'Aug', applications: 7800, approvals: 6700 },
  { month: 'Sep', applications: 5500, approvals: 4800 },
];

const statusData = [
  { name: 'Approved', value: 38120, color: '#10B981' },
  { name: 'Pending', value: 6050, color: '#F59E0B' },
  // Calculated rejections: Total - Approved - Pending
  { name: 'Rejected/Withdrawn', value: 1500, color: '#EF4444' },
];

const serviceCategories = [
    { name: 'Admission Counselling (NEET/JEE)', count: 520, color: 'bg-red-100 text-red-800' },
    { name: 'Document Verification (State Board)', count: 890, color: 'bg-green-100 text-green-800' },
    { name: 'Fee Structure Clarification (Govt. Schemes)', count: 345, color: 'bg-purple-100 text-purple-800' },
    { name: 'Foreign University Transfer Queries', count: 180, color: 'bg-orange-100 text-orange-800' },
];

const commonQuestions = [
  { question: 'What is the last date for JEE Counselling fee payment?', category: 'JEE/NEET' },
  { question: 'Format for State Domicile Certificate?', category: 'Documentation' },
  { question: 'Are installments available for the first-year tuition fee?', category: 'Financial' },
  { question: 'Procedure for lateral entry admission (Diploma holders)?', category: 'Process' },
];

export default function EnrollmentServices() {
  return (
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Indian Enrollment & Admission Services</h1>
        <p className="text-gray-600 mt-1">Real-time monitoring of application workflow across major states and institutions.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {enrollmentStats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                  <span className='text-xs text-gray-500 ml-1'>YoY</span>
                </div>
              </div>
              <div className={`${stat.color} p-4 rounded-full flex-shrink-0`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Enrollment Trends */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Application & Approval Trends (Academic Cycle)</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={monthlyData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis tickFormatter={(value) => (value / 1000).toFixed(1) + 'k'} />
              <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
              <Legend verticalAlign="top" height={36}/>
              <Line type="monotone" dataKey="applications" stroke="#3B82F6" strokeWidth={3} name="Total Applications" dot={{ r: 4 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="approvals" stroke="#10B981" strokeWidth={3} name="Final Approvals" dot={{ r: 4 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Status Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Application Status Distribution</h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value) + ' students'} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Services and Q&A Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Service Categories */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Active Service Tickets (Priority Areas)</h3>
          <div className="space-y-4">
            {serviceCategories.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg transition duration-200 hover:bg-gray-100">
                <div className="font-medium text-gray-900">{service.name}</div>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${service.color}`}>
                  {service.count} active tickets
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Questions */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Top Student Queries (Indian Context)</h3>
          <div className="space-y-4">
            {commonQuestions.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-500 hover:bg-indigo-50 transition-colors">
                <div className="font-medium text-gray-900 mb-1">{item.question}</div>
                <span className="text-xs font-medium px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Student Activity Feed</h3>
        <div className="space-y-4">
          {[
            { student: 'Amit Patel', action: 'Application submitted for IIT-Kharagpur', time: '30 mins ago', status: 'new' },
            { student: 'Shreya Das', action: 'Domicile Certificate verified by Admin', time: '2 hours ago', status: 'verified' },
            { student: 'Rohit Verma', action: 'Fee payment successful. Enrollment complete.', time: '5 hours ago', status: 'approved' },
            { student: 'Kavita Menon', action: 'Waiting for Aadhaar verification', time: '1 day ago', status: 'pending' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-white">
                    {activity.student.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{activity.student}</div>
                  <div className="text-sm text-gray-600">{activity.action}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">{activity.time}</div>
                <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full mt-1 ${
                  activity.status === 'approved' ? 'bg-green-100 text-green-800' :
                  activity.status === 'verified' ? 'bg-blue-100 text-blue-800' :
                  activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}