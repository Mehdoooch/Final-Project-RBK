import React from 'react';
import { Home } from 'lucide-react';

export default function CenteredErrorPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <Home className="mx-auto h-24 w-24 text-gray-400" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            No houses at the moment
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We're sorry, but there are currently no houses available.
          </p>
        </div>
        <div>
          <a
            href="/Home"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Go back home
            <Home className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}