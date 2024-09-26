import React, { useEffect } from 'react';
import './App.css';
import Navba from './commponents/Nav/Nav';
import Home from './commponents/Home/Home';
import Footer from './commponents/footer/Footer';
import i18n from './i18n'; // التأكد من استيراد i18n

function App() {

  useEffect(() => {
    // تعيين اللغة الافتراضية عند تحميل التطبيق
    i18n.changeLanguage('en'); // أو يمكنك تعيين 'ar' إذا كنت تريد اللغة العربية
  }, []);

  return (
    <div className="App">
      <Navba />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
