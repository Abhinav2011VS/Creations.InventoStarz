// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/issuesDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Schema definition
const issueSchema = new mongoose.Schema({
    content: String,
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply'
    }]
});

const replySchema = new mongoose.Schema({
    content: String,
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply'
    }]
});

const Issue = mongoose.model('Issue', issueSchema);
const Reply = mongoose.model('Reply', replySchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post('/api/issues', async (req, res) => {
    const { content } = req.body;
    try {
        const newIssue = await Issue.create({ content });
        res.status(201).json(newIssue);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/issues/:id/replies', async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
        const issue = await Issue.findById(id);
        if (!issue) {
            return res.status(404).json({ error: 'Issue not found' });
        }
        const newReply = await Reply.create({ content });
        issue.replies.push(newReply);
        await issue.save();
        res.status(201).json(newReply);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
