// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const passport = require('passport');
// const session = require('express-session');
// const socketIo = require('socket.io');
// const http = require('http');
// require('dotenv').config();

// const authRoutes = require('./routes/auth');
// const stockRoutes = require('./routes/stocks');
// const portfolioRoutes = require('./routes/portfolio');
// const socketHandler = require('./socket');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// // Database connection
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // Middleware
// //app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:3000', // Allow this origin
//   methods: 'GET,POST,PUT,DELETE', // Specify allowed methods
//   allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
//   credentials: true // Allow credentials (cookies, authorization headers, etc.)
// }));
// app.use(express.json());
// app.use(session({ secret: process.env.SESSION_SECRET }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/stocks', stockRoutes);
// app.use('/api/portfolio', portfolioRoutes);

// // Socket.io
// io.on('connection', socket => socketHandler(socket, io));

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const stockRoutes = require('./Routes/stocks');
const portfolioRoutes = require('./routes/portfolio');
const { initWebSocket } = require('./utils/websocket');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/portfolio', portfolioRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

initWebSocket(server);
