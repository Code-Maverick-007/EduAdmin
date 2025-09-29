import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { UserButton, useUser, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Colleges from './pages/Colleges';
import Counselors from './pages/Counselors';
import Scholarships from './pages/Scholarships';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';
import EnrollmentServices from './pages/EnrollmentServices';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import Layout from './components/Layout';

function ProtectedRoutes() {
  return (
    <Layout userButton={<UserButton afterSignOutUrl="/sign-in" />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/enrollment" element={<EnrollmentServices />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/counselors" element={<Counselors />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Layout>
  );
}

function AppRoutes() {
  const { isLoaded, isSignedIn } = useUser();
  
  if (!isLoaded) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      
      {/* Protected routes */}
      <Route
        path="*"
        element={
          <>
            <SignedIn>
              <ProtectedRoutes />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn redirectUrl="/sign-in" />
            </SignedOut>
          </>
        }
      />
    </Routes>
  );
}

export default AppRoutes;