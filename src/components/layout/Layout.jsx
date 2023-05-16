import React, { PropsWithChildren } from 'react'
import NavigationBar from '../navbar/NavigationBar'
import Footer from '../footer/Footer';

function Layout({ children }) {
  return (
    <>
        <NavigationBar />
        <div>{children}</div>
        <Footer />
    </>
  );
};

export default Layout;
