import React from 'react';
import { useApp } from '../../contexts/AppContext';

const GradeCard = ({ subject }) => {
  const { calculateSubjectAverage } = useApp();
  
  const average = calculateSubjectAverage(subject.grades);

  const getGradeColor = (grade) => {
    if (grade >= 17) return 'bg-green-100 text-green-800';
    if (grade >= 14) return 'bg-blue-100 text-blue-800';
    if (grade >= 10) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getAverageColor = (avg) => {
    if (avg >= 17) return 'text-green-600';
    if (avg >= 14) return 'text-blue-600';
    if (avg >= 10) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="border-2 border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="font-bold text-gray-800 text-lg">{subject.name}</h3>
          <p className="text-sm text-gray-600 mt-1">کد کتاب: {subject.code}</p>
        </div>
        <div className="text-center ml-4">
          <div className={`text-lg font-bold ${getAverageColor(average)}`}>
            {average}
          </div>
          <div className="text-xs text-gray-500">معدل</div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {subject.grades.map((grade, index) => (
          <div key={index} className="text-center">
            <div className={`py-2 rounded-lg font-bold ${getGradeColor(grade)}`}>
              {grade}
            </div>
            <div className="text-xs text-gray-500 mt-1">آزمون {index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradeCard;