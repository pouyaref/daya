import React, { createContext, useContext, useState } from 'react';
import { subjects as initialSubjects } from '../data/subjects';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    name: 'پویا عارف زاده خادملو',
    studentId: '1400111177971',
    class: 'دهم ریاضی ۱',
    fatherName: 'جواد',
    nationalCode: '0452431000',
    school: 'دبیرستان دوره دوم راهیان صادق'
  });
  const [subjects, setSubjects] = useState(initialSubjects);

  const updateProfile = (profileData) => {
    setUserProfile(prev => ({ ...prev, ...profileData }));
  };

  // تابع برای محاسبه معدل هر درس
  const calculateSubjectAverage = (grades) => {
    if (grades.length === 0) return 0;
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return (sum / grades.length).toFixed(2);
  };

  // تابع برای محاسبه معدل کل
  const calculateOverallAverage = () => {
    const averages = subjects.map(subject => 
      parseFloat(calculateSubjectAverage(subject.grades))
    );
    if (averages.length === 0) return 0;
    const sum = averages.reduce((total, avg) => total + avg, 0);
    return (sum / averages.length).toFixed(2);
  };

  const value = {
    userProfile,
    subjects,
    updateProfile,
    calculateSubjectAverage,
    calculateOverallAverage
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};