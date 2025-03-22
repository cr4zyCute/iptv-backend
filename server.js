require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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
    if (!name || !url) {
        return res.status(400).json({ error: "Name and URL are required" });
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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
