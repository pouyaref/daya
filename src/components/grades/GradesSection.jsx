import React from 'react';
import { useApp } from '../../contexts/AppContext';
import GradeCard from './GradeCard';

const GradesSection = () => {
  const { subjects, calculateOverallAverage } = useApp();

  const getGradeStatus = (average) => {
    if (average >= 17) return { color: 'text-green-600', text: 'عالی' };
    if (average >= 14) return { color: 'text-blue-600', text: 'خوب' };
    if (average >= 10) return { color: 'text-yellow-600', text: 'قابل قبول' };
    return { color: 'text-red-600', text: 'نیاز به تلاش' };
  };

  const overallAverage = calculateOverallAverage();
  const status = getGradeStatus(overallAverage);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">کارنامه تحصیلی</h2>
        <div className="text-center">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            <span className="font-medium">معدل کل: </span>
            <span className="font-bold text-lg">{overallAverage}</span>
          </div>
          <div className={`mt-1 text-sm font-medium ${status.color}`}>
            {status.text}
          </div>
        </div>
      </div>

      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-gray-700 mb-2">راهنما:</h3>
        <div className="grid grid-cols-5 gap-2 text-center text-sm">
          <div className="font-medium text-gray-600">آزمون ۱</div>
          <div className="font-medium text-gray-600">آزمون ۲</div>
          <div className="font-medium text-gray-600">آزمون ۳</div>
          <div className="font-medium text-gray-600">آزمون ۴</div>
          <div className="font-medium text-gray-600">آزمون ۵</div>
        </div>
      </div>

      <div className="space-y-4">
        {subjects.map((subject) => (
          <GradeCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default GradesSection;