import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Videos from './components/Videos';
import Projectos from './components/Projectos';

import 'bootstrap/dist/css/bootstrap.min.css';
// index.jsx o App.jsx
import './index.css';



function App() {
  const [currentTab, setCurrentTab] = useState('Home');

  const renderContent = () => {
    switch (currentTab) {
      case 'Home':
        return <Home />;
      case 'Videos':
        return <Videos />;
      case 'Projectos':
        return <Projectos />;

      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header setCurrentTab={setCurrentTab} />
      <main>{renderContent()}</main>
      <Footer />
    </div>
  );
}

export default App;
