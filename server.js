// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// let channels = [
//     {
//         id: 1,
//         name: "Outside TV",
//         url: "https://livetv-fa.tubi.video/outsidetv2/playlist.m3u8"
//     }
// ];
// const corsOptions = {
//     origin: "*", // Allow all domains
//     methods: "GET,POST,DELETE",
//     allowedHeaders: "Content-Type"
// };
// app.use(cors(corsOptions));

// // Get all channels
// app.get('/channels', (req, res) => {
//     res.json(channels);
// });

// // Add a new channel
// app.post('/channels', (req, res) => {
//     const { name, url } = req.body;
//     if (!name || !url || !url.startsWith("http")) {
//         return res.status(400).json({ error: "Valid name and URL are required" });
//     }
//     const newChannel = { id: channels.length + 1, name, url };
//     channels.push(newChannel);
//     res.status(201).json(newChannel);
// });

// // Delete a channel
// app.delete('/channels/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     channels = channels.filter(channel => channel.id !== id);
//     res.json({ message: "Channel deleted" });
// });

// // Root API message (Optional)
// app.get('/', (req, res) => {
//     res.send("Welcome to the IPTV Backend API!");
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });






// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');

// const app = express();

// // CORS Configuration
// const corsOptions = {
//     origin: "*", // Allow all domains
//     methods: ["GET", "POST", "DELETE"], // Allowed methods
//     allowedHeaders: ["Content-Type"] // Allowed headers
// };

// // Apply CORS middleware before routes
// app.use(cors(corsOptions));
// app.use(express.json());

// let channels = [
//     {
//         id: 1,
//         name: "Outside TV",
//         url: "https://livetv-fa.tubi.video/outsidetv2/playlist.m3u8"
//     }
// ];

// // Get all channels
// app.get('/channels', (req, res) => {
//     res.json(channels);
// });

// // Add a new channel
// app.post('/channels', (req, res) => {
//     const { name, url } = req.body;
//     if (!name || !url || !url.startsWith("http")) {
//         return res.status(400).json({ error: "Valid name and URL are required" });
//     }
//     const newChannel = { id: channels.length + 1, name, url };
//     channels.push(newChannel);
//     res.status(201).json(newChannel);
// });

// // Delete a channel
// app.delete('/channels/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     channels = channels.filter(channel => channel.id !== id);
//     res.json({ message: "Channel deleted" });
// });

// // Root API message (Optional)
// app.get('/', (req, res) => {
//     res.send("Welcome to the IPTV Backend API!");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`Server is running on port ${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// CORS Configuration
const corsOptions = {
    origin: "*", // Allow all domains
    methods: ["GET", "POST", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type"] // Allowed headers
};

// Apply CORS middleware before routes
app.use(cors(corsOptions));
app.use(express.json());

// Custom Middleware to Handle CORS Preflight Requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    
    next();
});

// Sample IPTV Channels
let channels = [
    {
        id: 1,
        name: "Outside TV",
        url: "https://livetv-fa.tubi.video/outsidetv2/playlist.m3u8"
    }
];

// Get all channels
app.get('/channels', (req, res) => {
    res.json(channels);
});

// Add a new channel
app.post('/channels', (req, res) => {
    const { name, url } = req.body;
    if (!name || !url || !url.startsWith("http")) {
        return res.status(400).json({ error: "Valid name and URL are required" });
    }
    const newChannel = { id: channels.length + 1, name, url };
    channels.push(newChannel);
    res.status(201).json(newChannel);
});

// Delete a channel
app.delete('/channels/:id', (req, res) => {
    const id = parseInt(req.params.id);
    channels = channels.filter(channel => channel.id !== id);
    res.json({ message: "Channel deleted" });
});

// Root API message (Optional)
app.get('/', (req, res) => {
    res.send("Welcome to the IPTV Backend API!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
