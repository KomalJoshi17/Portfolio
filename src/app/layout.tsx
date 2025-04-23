'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Service from './components/ui/Service';
import { AnimatedTestimonialsDemo } from './components/AnimatedTestimonialsDemo';
import { StickyScrollRevealDemo } from './components/StickyScrollRevealDemo';
import { FloatingDockDemo } from './components/FloatingDockDemo';
import { CarouselDemo } from './components/CarouselDemo';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-white flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong:</h2>
      <pre className="bg-red-900 p-4 rounded-lg mb-4 overflow-auto max-w-full">
        {error.message}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <body>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {isClient ? (
            <>
              <Navbar />
              <Hero />
              <About />
              <Service />
              <StickyScrollRevealDemo />
              <AnimatedTestimonialsDemo />
              <CarouselDemo />
              <FloatingDockDemo />
              {children}
            </>
          ) : (
            <div className="min-h-screen bg-[#0B0D10] flex items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
        </ErrorBoundary>
      </body>
    </html>
  );
}
