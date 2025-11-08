import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">دایاموز 📚</h1>
          <p className="text-center mt-2 text-blue-100">
            سیستم مدیریت کارنامه تحصیلی - دبیرستان راهیان صادق
          </p>
          <div className="mt-2 text-sm text-blue-200">
            سال تحصیلی ۱۴۰۳-۱۴۰۴ | ترم اول
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;