// Models and packages
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const http = require('http').createServer(app);
const path = require('path')
const log = require('morgan');
require('dotenv').config();
// Services 
const dbConnect = require('./services/db.service');
const logger = require('./services/logger.service');
// Routes
const userRoutes = require('./api/user/user.routes');
const authRoutes = require('./api/auth/auth.routes');

// Express App Config
app.use(log('dev')) // Morgan
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:4200', 'http://localhost:4200'],
        credentials: true
    };
    app.use(cors(corsOptions));
}


// routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


// const pageNotFound = require('./services/pageNotFound.service');
// const morgan = require('morgan')
// app.get('/404', pageNotFound);


const { loginValidator } = require('./middlewares/validities/authentication.validator');
const { requireAuth } = require('./middlewares/requireAuth.middleware');
app.get('/testLogin', requireAuth, (req, res) => {
    console.log('Test is working');
    res.status(200).json('You are logged in');
});

// Rendering 
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})




// Server creating
const port = process.env.PORT || 3030;
http.listen(port, requireAuth, () => {
    logger.info('Server is running on port: ' + port)
    // Connecting to database
    dbConnect();
});
