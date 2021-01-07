import express from 'express';

const app = express();
const PORT = 5000;

// middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.json({msg: 'hello backend123'});
});

app.listen(PORT || process.env.PORT, () => console.log(`http://localhost:${PORT}`));