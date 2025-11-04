import React from 'react';
import { AppProvider } from './contexts/AppContext';
import ProfileSection from './components/profile/ProfileSection';
import GradesSection from './components/grades/GradesSection';
import Header from './components/common/Header';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <ProfileSection />
            </div>
            <div className="lg:col-span-2">
              <GradesSection />
            </div>
          </div>
        </main>
      </div>
    </AppProvider>
  );
}

export default App;