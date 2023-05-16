import React, { PropsWithChildren } from 'react'
import NavigationBar from '../navbar/NavigationBar'

function Layout({ children }) {
  return (
    <>
        <NavigationBar />
        <div>{children}</div>
    </>
  );
};

export default Layout;
