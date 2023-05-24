import React from 'react';
import NavigationBar from '../navbar/NavigationBar';
import Footer from '../footer/Footer';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
  
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavigationBar />
      <div style={{ flex: '1' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
