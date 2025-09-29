import React from 'react';
import { Users, Building2, UserCheck, GraduationCap, TrendingUp, TrendingDown, BookOpen, MapPin } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

// Updated data for an Indian education platform context
const stats = [
  // Example large-scale data for Indian context
  { name: 'Total Students', value: '1,50,840', change: '+15%', icon: Users, color: 'bg-blue-600' },
  { name: 'Total Colleges', value: '18,768', change: '+8%', icon: Building2, color: 'bg-green-600' },
  { name: 'Active Courses', value: '1,440', change: '+5%', icon: BookOpen, color: 'bg-purple-600' },
  { name: 'Scholarships Awarded', value: '85,000', change: '+22%', icon: GraduationCap, color: 'bg-orange-600' },
];

const enrollmentData = [
  // Example monthly data reflecting an academic cycle
  { month: 'Jul', applications: 2500, enrollments: 1800 },
  { month: 'Aug', applications: 4500, enrollments: 3800 },
  { month: 'Sep', applications: 3200, enrollments: 2900 },
  { month: 'Oct', applications: 1800, enrollments: 1500 },
  { month: 'Nov', applications: 1200, enrollments: 1050 },
  { month: 'Dec', applications: 900, enrollments: 780 },
];

const collegePerformanceData = [
  // Example college rating/performance metric over time
  { quarter: 'Q1', rating: 7.5 },
  { quarter: 'Q2', rating: 8.2 },
  { quarter: 'Q3', rating: 7.8 },
  { quarter: 'Q4', rating: 8.5 },
];

const recentApplications = [
    { name: 'Priya Sharma', college: 'IIT Delhi', status: 'Approved' },
    { name: 'Rahul Singh', college: 'BITS Pilani', status: 'Pending' },
    { name: 'Aisha Khan', college: 'IIM Bangalore', status: 'Under Review' },
    { name: 'Sanjay Reddy', college: 'Anna Univ, Chennai', status: 'Approved' },
    { name: 'Meera Menon', college: 'Jadavpur Univ, Kolkata', status: 'Pending' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">Indian Education Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of Student Enrollment and College Metrics across India.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.change.startsWith('+') ? (
                    <TrendingUp className="w-5 h-5 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-semibold ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className='text-xs text-gray-500 ml-1'>vs last year</span>
                </div>
              </div>
              <div className={`${stat.color} p-4 rounded-full flex-shrink-0`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enrollment Trends */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Applications & Enrollment (Monthly)</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={enrollmentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis />
              <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
              <Line type="monotone" dataKey="applications" stroke="#3B82F6" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} name="Applications" />
              <Line type="monotone" dataKey="enrollments" stroke="#10B981" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} name="Enrollments" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* College Performance */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Average College Rating Trend</h3>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={collegePerformanceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="quarter" stroke="#6b7280" />
              <YAxis domain={[6, 10]} />
              <Tooltip />
              <Area type="monotone" dataKey="rating" stroke="#F97316" fill="#F97316" fillOpacity={0.3} name="Avg. Rating (out of 10)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Student Applications (Top Colleges)</h3>
          <div className="space-y-4">
            {recentApplications.map((application, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg transition duration-200 hover:bg-gray-100">
                <div className="flex items-center">
                    <Users className='w-5 h-5 text-indigo-500 mr-3'/>
                    <div>
                        <p className="font-medium text-gray-900">{application.name}</p>
                        <p className="text-sm text-gray-600 flex items-center mt-0.5">
                            <MapPin className='w-3 h-3 mr-1'/> {application.college}
                        </p>
                    </div>
                </div>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full min-w-[100px] text-center ${
                  application.status === 'Approved' 
                    ? 'bg-green-100 text-green-800'
                    : application.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {application.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions for India Operations</h3>
          <div className="space-y-4">
            <button className="w-full text-left p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors border-l-4 border-indigo-600 shadow-sm">
              <div className="font-semibold text-indigo-900">Onboard New College Partner</div>
              <div className="text-sm text-indigo-700 mt-0.5">Add a new affiliated Indian college or university.</div>
            </button>
            <button className="w-full text-left p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors border-l-4 border-amber-600 shadow-sm">
              <div className="font-semibold text-amber-900">Launch State-Specific Campaign</div>
              <div className="text-sm text-amber-700 mt-0.5">Target students in Maharashtra or Karnataka.</div>
            </button>
            <button className="w-full text-left p-4 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors border-l-4 border-rose-600 shadow-sm">
              <div className="font-semibold text-rose-900">Generate Compliance Report (UGC/AICTE)</div>
              <div className="text-sm text-rose-700 mt-0.5">Access required regulatory documentation.</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}