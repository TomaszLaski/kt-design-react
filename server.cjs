const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;

// CORS Middleware
app.use(cors());

// Static Assets Middleware
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

// API Endpoint
app.get('/api/images', (req, res) => {
	const gallery = [];

	for (let i = 1; i <= 5; i++) {
		gallery.push({
			id: i,
			main: `http://localhost:${port}/assets/${i}/main.jpg`,
			second: `http://localhost:${port}/assets/${i}/second.jpg`,
			folder: 'multiple', // Dodane
		});
	}

	for (let i = 1; i <= 11; i++) {
		gallery.push({
			id: i + 6,
			main: `http://localhost:${port}/assets/single/${i}.jpg`,
			second: null,
			folder: 'single', // Dodane
		});
	}

	res.json(gallery);
});

// Start Server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
