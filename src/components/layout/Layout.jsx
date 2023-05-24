import React from 'react';
import NavigationBar from '../navbar/NavigationBar';
import Footer from '../footer/Footer';

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
