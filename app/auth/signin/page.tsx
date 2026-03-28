'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sparkles, LogIn, ArrowRight } from 'lucide-react';

export default function SignInPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignIn = () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (status === 'authenticated') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
            <p className="text-gray-600 mb-6">You're already signed in as {session.user?.email}</p>
            
            <div className="space-y-3">
              <button
                onClick={() => router.push('/dashboard')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Go to Dashboard
              </button>
              <button
                onClick={handleSignOut}
                className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Proxi.tech</h1>
          <p className="text-gray-600 mb-8">Sign in to access your dashboard and start generating content</p>
          
          <button
            onClick={handleSignIn}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            <LogIn className="h-5 w-5" />
            <span>Sign in with Google</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <p className="text-xs text-gray-500 mt-4">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </motion.div>
      </div>
    </div>
  );
}