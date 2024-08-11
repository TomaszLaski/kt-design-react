import React from 'react';
import NavigationBar from '../navbar/NavigationBar';
import Footer from '../footer/Footer';

function Layout({ children, showIcons = true }) {
	console.log(showIcons, 'showIcons');
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
			}}
		>
			<NavigationBar />
			<div style={{ flex: '1' }}>{children}</div>
			<Footer showIcons={showIcons} />
		</div>
	);
}

export default Layout;
