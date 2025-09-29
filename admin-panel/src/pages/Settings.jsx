import React, { useState } from 'react';
import { Users, Shield, Settings as SettingsIcon, Lock, Eye, CreditCard as Edit, Trash2, Plus, Clock, Globe } from 'lucide-react';

// Updated data with Indian names, email formats, and relevant roles
const subAdmins = [
  {
    id: 1,
    name: 'Amit Patel',
    email: 'amit.patel@edu.in',
    role: 'Central Admin',
    permissions: ['Students', 'Colleges', 'Analytics', 'Settings'],
    status: 'Active',
    avatar: 'AP'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya.sharma@edu.in',
    role: 'Scholarship Coordinator',
    permissions: ['Scholarships', 'Analytics'],
    status: 'Active',
    avatar: 'PS'
  },
  {
    id: 3,
    name: 'Rajesh Menon',
    email: 'rajesh.menon@edu.in',
    role: 'Regional Head (South)',
    permissions: ['Students', 'Colleges', 'Counselors'],
    status: 'Inactive',
    avatar: 'RM'
  },
];

const permissions = [
  { id: 'students', name: 'Student Records', description: 'View and manage student application and profile data' },
  { id: 'colleges', name: 'College Management', description: 'Manage college listings, approvals, and fee structures' },
  { id: 'counselors', name: 'Counselor Approvals', description: 'Approve, assign, and manage expert counselors' },
  { id: 'scholarships', name: 'Scholarship Schemes', description: 'Create, update, and monitor scholarship programs' },
  { id: 'analytics', name: 'Platform Analytics', description: 'Access student engagement and trend reports' },
  { id: 'settings', name: 'System Configuration', description: 'Modify critical system settings and integration keys' },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState('roles');
  const [showAddModal, setShowAddModal] = useState(false); // Modal state kept for functionality demo

  const tabs = [
    { id: 'roles', name: 'Sub-Admin Roles', icon: Users },
    { id: 'permissions', name: 'Permissions', icon: Shield },
    { id: 'general', name: 'General Settings', icon: SettingsIcon },
    { id: 'security', name: 'Security', icon: Lock },
  ];

  return (
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Platform Settings</h1>
          <p className="text-gray-600 mt-1">Manage system configurations and administrative access for the Indian platform.</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-indigo-600 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6 md:p-8">
          {/* Sub-Admin Roles Tab */}
          {activeTab === 'roles' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">Manage Sub-Admin Roles</h3>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg flex items-center space-x-2 transition-colors shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Admin</span>
                </button>
              </div>

              <div className="space-y-4">
                {subAdmins.map((admin) => (
                  <div key={admin.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-semibold text-base">{admin.avatar}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{admin.name}</h4>
                          <p className="text-sm text-gray-600">{admin.email}</p>
                          <div className="flex items-center mt-1 space-x-2">
                            <span className="text-sm font-medium text-indigo-700">{admin.role}</span>
                            <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                              admin.status === 'Active' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {admin.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <button title="View Details" className="p-2 text-gray-500 hover:text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button title="Edit Role" className="p-2 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-50 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button title="Delete Admin" className="p-2 text-gray-500 hover:text-red-600 rounded-full hover:bg-red-50 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <div className="text-sm text-gray-600 mb-2 font-medium">Access Areas:</div>
                      <div className="flex flex-wrap gap-2">
                        {admin.permissions.map((permission) => (
                          <span
                            key={permission}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full"
                          >
                            {permission}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Permissions Tab */}
          {activeTab === 'permissions' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Platform Access Permissions</h3>
              <p className='text-sm text-gray-600'>Define Read, Write, and Delete access for different user roles across key modules.</p>
              <div className="space-y-4">
                {permissions.map((permission) => (
                  <div key={permission.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className='mb-3 md:mb-0 md:w-1/3'>
                      <h4 className="font-medium text-gray-900">{permission.name}</h4>
                      <p className="text-xs text-gray-600 mt-1">{permission.description}</p>
                    </div>
                    <div className="flex items-center space-x-6">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <span className="ml-2 text-sm text-gray-700">Read</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <span className="ml-2 text-sm text-gray-700">Write</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <span className="ml-2 text-sm text-gray-700">Delete</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* General Settings Tab */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">General Platform Settings</h3>
              <div className="space-y-6 max-w-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
                  <input
                    type="text"
                    defaultValue="Bharat EduConnect"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Support Email</label>
                  <input
                    type="email"
                    defaultValue="support@bharatedu.in"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Clock className='w-4 h-4 mr-1 text-gray-500'/> Primary Time Zone
                  </label>
                  <select defaultValue="Asia/Kolkata" className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="Asia/Kolkata">UTC+5:30 (Indian Standard Time - IST)</option>
                    <option value="Asia/Dubai">UTC+4 (Dubai)</option>
                    <option value="Europe/London">UTC+0 (London/GMT)</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <input
                    id="email-notifications"
                    type="checkbox"
                    defaultChecked
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="email-notifications" className="ml-2 text-sm text-gray-700">
                    Enable email notifications for new applications
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Security Settings</h3>
              <div className="space-y-6 max-w-lg">
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-3 border-b pb-2">Password Requirements</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        id="min-length"
                        type="checkbox"
                        defaultChecked
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="min-length" className="ml-2 text-sm text-gray-700">
                        Minimum 10 characters (Bigger requirement for security)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="uppercase"
                        type="checkbox"
                        defaultChecked
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="uppercase" className="ml-2 text-sm text-gray-700">
                        Require uppercase letters, numbers, and symbols
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="two-factor"
                        type="checkbox"
                        defaultChecked
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="two-factor" className="ml-2 text-sm text-gray-700">
                        Enforce Two-Factor Authentication (2FA) for all admins
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-3 border-b pb-2">Session Management</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                      <input
                        type="number"
                        defaultValue="30" // Reduced timeout for better security
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        id="auto-logout"
                        type="checkbox"
                        defaultChecked
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="auto-logout" className="ml-2 text-sm text-gray-700">
                        Auto-logout on inactivity
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-4">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
}