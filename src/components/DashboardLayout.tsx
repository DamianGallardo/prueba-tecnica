import React from 'react'
import Navbar from './Navbar';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <header className="bg-white shadow-sm">
          <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl text-center font-bold tracking-tight text-gray-900">
              Lanzamientos de SpaceX
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  )
}
