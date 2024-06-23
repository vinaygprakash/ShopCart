const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config({ path: './.env' });

const app = express();
const port = process.env.PORT || 5000;
const mongoURL = process.env.URL;

if (!mongoURL) {
    console.error('MongoDB connection URL is not defined in the .env file');
    process.exit(1);
}

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error(`Failed to connect to MongoDB: ${err}`);
    process.exit(1);
});

app.use(cors(
    {
        origin: ['https://frontend-drab-seven.vercel.app', 'http://localhost:3001'],
        credentials: true,
    }
));
app.use(express.json());

// Available routes 
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/notes', require('./routes/notes'));
// app.use("/api/auth",authRouter)
// app.use("/api/cart",cartRouter)

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});