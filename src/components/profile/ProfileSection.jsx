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
            <span className="text-gray-600">نام پدر:</span>
            <span className="font-bold text-gray-800">{userProfile.fatherName}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-600">کد ملی:</span>
            <span className="font-bold text-gray-800">{userProfile.nationalCode}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-600">معدل کل:</span>
            <span className="font-bold text-green-600 text-lg">{calculateOverallAverage()}</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center mb-2">
            <span className="text-blue-600 ml-2">🏫</span>
            <h4 className="font-bold text-blue-800">مدرسه:</h4>
          </div>
          <p className="text-sm text-blue-700 font-medium">
            {userProfile.school}
          </p>
        </div>

        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-green-700 text-center">
            📅 سال تحصیلی: ۱۴۰۳-۱۴۰۴ | ترم اول
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;