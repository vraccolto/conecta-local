const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'ConectaLocal API running'
    });
});

module.exports = app;