import React from 'react';
import { TrendingUp, Users, Clock, Target, ArrowUp, ArrowDown, BookOpen, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Updated data for Indian Education Platform Analytics
const analyticsStats = [
  // Higher volumes typical of a large Indian platform
  { name: 'Total Applications (YTD)', value: '1.2 Lakh', change: '+25%', trend: 'up', icon: Users },
  { name: 'Trending Courses Added', value: '185', change: '+18%', trend: 'up', icon: BookOpen },
  { name: 'Average Student Session', value: '12.5 mins', change: '+10%', trend: 'up', icon: TrendingUp },
  { name: 'Avg. Application TAT', value: '1.8 days', change: '-15%', trend: 'down', icon: Clock },
];

const trendingData = [
  // Data reflecting the typical Indian academic cycle (peak around May/June/July)
  { month: 'Jan', applications: 12000, enrollments: 9500, counseling: 8000 },
  { month: 'Feb', applications: 15500, enrollments: 12000, counseling: 10500 },
  { month: 'Mar', applications: 21000, enrollments: 17500, counseling: 14500 },
  { month: 'Apr', applications: 25000, enrollments: 20500, counseling: 17000 },
  { month: 'May', applications: 35000, enrollments: 31000, counseling: 28000 },
  { month: 'Jun', applications: 42000, enrollments: 38500, counseling: 35000 },
];

const courseData = [
  // Popular courses in India
  { name: 'CSE/IT Engineering', students: 45000 },
  { name: 'Medicine (MBBS/BDS)', students: 38000 },
  { name: 'B.Com/CA/Finance', students: 32000 },
  { name: 'Mechanical/Civil Engg.', students: 28000 },
  { name: 'Law (LLB/LLM)', students: 15000 },
  { name: 'Arts & Humanities', students: 12000 },
];

const engagementData = [
  // Engagement levels in a percentage format
  { name: 'High Engagement (Daily)', value: 45, color: '#10B981' },
  { name: 'Medium Engagement (Weekly)', value: 35, color: '#F59E0B' },
  { name: 'Low Engagement (Monthly)', value: 20, color: '#EF4444' },
];

const topColleges = [
  // Top Indian Government/Premier institutions
  { name: 'IIT Bombay', applications: 1520, acceptance: '85%' },
  { name: 'AIIMS Delhi', applications: 1280, acceptance: '78%' },
  { name: 'IIM Bangalore', applications: 1150, acceptance: '72%' },
  { name: 'NIT Trichy', applications: 980, acceptance: '69%' },
  { name: 'Jadavpur University', applications: 850, acceptance: '82%' },
];

const recentActivities = [
  // Activities relevant to the Indian context
  { action: 'New JEE Mains application submitted', count: 150, time: '1 hour ago', type: 'application' },
  { action: 'NEET counseling sessions scheduled', count: 80, time: '3 hours ago', type: 'counseling' },
  { action: 'State Scholarship applications pending', count: 120, time: '5 hours ago', type: 'scholarship' },
  { action: 'New college partnership signed (Pune)', count: 3, time: '1 day ago', type: 'partnership' },
];

export default function Analytics() {
  // Utility function for thousands formatting (e.g., 12000 -> 12K)
  const valueFormatter = (value) => {
    if (value >= 1000) {
      return (value / 1000).toFixed(0) + 'K';
    }
    return value;
  };
  
  return (
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Indian Education Platform Analytics</h1>
        <p className="text-gray-600 mt-1">Comprehensive insights into student demand, trends, and platform performance.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsStats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} (YoY)
                  </span>
                </div>
              </div>
              <div className="bg-indigo-600 p-4 rounded-full">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trending Data */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly Student Activity Trend (in thousands)</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={trendingData} margin={{ top: 10, right: 30, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis tickFormatter={valueFormatter} />
              <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
              <Line type="monotone" dataKey="applications" stroke="#3B82F6" strokeWidth={3} name="Applications" dot={{ r: 4 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="enrollments" stroke="#10B981" strokeWidth={3} name="Enrollments" dot={{ r: 4 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="counseling" stroke="#F59E0B" strokeWidth={3} name="Counseling Sessions" dot={{ r: 4 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Course Popularity */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Top Course Demand (Total Students)</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={courseData} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickFormatter={valueFormatter} />
              <YAxis dataKey="name" type="category" stroke="#6b7280" width={100} />
              <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
              <Bar dataKey="students" fill="#EF4444" radius={[10, 10, 0, 0]} name="Students Applied" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student Engagement */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Platform Engagement Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={engagementData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              >
                {engagementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top Colleges */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Top 5 College Destinations</h3>
          <div className="space-y-4">
            {topColleges.map((college, index) => (
              <div key={college.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-indigo-500">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-bold text-gray-500 w-6">#{index + 1}</span>
                  <div>
                    <div className="font-medium text-gray-900">{college.name}</div>
                    <div className="text-sm text-gray-600">{college.applications} applications this month</div>
                  </div>
                </div>
                <div className="text-right">
                    <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        {college.acceptance} Avg. Acceptance
                    </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Platform Activity Feed</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{activity.action}</div>
                  <div className="text-sm text-gray-600">{activity.time}</div>
                </div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  activity.type === 'application' ? 'bg-indigo-100 text-indigo-800' :
                  activity.type === 'counseling' ? 'bg-green-100 text-green-800' :
                  activity.type === 'scholarship' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  +{activity.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Performance Metrics (KPIs)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">91%</div>
            <div className="text-sm text-gray-600 mb-1">Application Success Rate</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '91%' }}></div>
            </div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-4xl font-extrabold text-green-600 mb-2">88%</div>
            <div className="text-sm text-gray-600 mb-1">Student Satisfaction Score</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '88%' }}></div>
            </div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-4xl font-extrabold text-purple-600 mb-2">₹1.5 Cr+</div>
            <div className="text-sm text-gray-600 mb-1">Scholarship Amount Disbursed (QTR)</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
