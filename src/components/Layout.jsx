import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  UserCheck, 
  GraduationCap, 
  Settings, 
  BarChart3, 
  ClipboardList,
  Search
} from 'lucide-react';
import { useUser } from '@clerk/clerk-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Students', href: '/students', icon: Users },
  { name: 'Enrollment Services', href: '/enrollment', icon: ClipboardList },
  { name: 'Colleges', href: '/colleges', icon: Building2 },
  { name: 'Counselors', href: '/counselors', icon: UserCheck },
  { name: 'Scholarships', href: '/scholarships', icon: GraduationCap },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Layout({ children, userButton }) {
  const location = useLocation();
  const { user } = useUser();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 px-6">
            <div className="flex items-center">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">EduAdmin</span>
            </div>
          </div>
          <div className="mt-8 flex-grow flex flex-col">
            <nav className="flex-1 px-4 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          
          {/* User profile in sidebar */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium">
                  {user?.fullName?.charAt(0) || user?.username?.charAt(0) || 'U'}
                </div>
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.fullName || user?.username || 'User'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.primaryEmailAddress?.emailAddress || 'Admin'}
                </p>
              </div>
              <div className="ml-2">
                {userButton}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navbar */}
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow-sm border-b border-gray-200 md:hidden">
          <div className="flex-1 px-4 flex justify-between items-center">
            <div className="flex-1 flex">
              <div className="w-full flex">
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <Search className="w-5 h-5" />
                  </div>
                  <input
                    className="block w-full h-full pl-8 pr-3 py-2 border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="ml-2">
              {userButton}
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}