import React from 'react';
import { useApp } from '../../contexts/AppContext';

const ProfileSection = () => {
  const { userProfile, calculateOverallAverage } = useApp();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        پروفایل دانش‌آموز
      </h2>

      <div className="space-y-4">
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-blue-600">👨‍🎓</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800">{userProfile.name}</h3>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-600">شماره دانش‌آموزی:</span>
            <span className="font-bold text-gray-800">{userProfile.studentId}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-600">کلاس:</span>
            <span className="font-bold text-gray-800">{userProfile.class}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-600">معدل کل:</span>
            <span className="font-bold text-green-600 text-lg">{calculateOverallAverage()}</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-bold text-blue-800 mb-2">توضیحات:</h4>
          <p className="text-sm text-blue-700">
            این کارنامه نشان‌دهنده نمرات ۵ آزمون پایانی میان ترم می‌باشد.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;