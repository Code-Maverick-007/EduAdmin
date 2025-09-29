import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { GraduationCap } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <GraduationCap className="w-12 h-12 text-indigo-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join us today and start exploring
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-center">
            <SignUp 
              path="/sign-up"
              routing="path"
              signInUrl="/sign-in"
              afterSignInUrl="/dashboard"
              afterSignUpUrl="/dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
