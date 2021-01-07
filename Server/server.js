// Models and packages
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const http = require('http').createServer(app);
const path = require('path');
const log = require('morgan');
require('dotenv').config();

// Services 
const { dbConnection } = require('./services/db.service');
const logger = require('./services/logger.service');
const SessionStoreConfig = require('./config/sessionStore.config');

// Routes
const userRoutes = require('./api/user/user.routes');
const authRoutes = require('./api/auth/auth.routes');
const projectRoutes = require('./api/project/project.routes');
const memberRoutes = require('./api/member/member.routes');
const taskRoutes = require('./api/task/task.routes');

// Session-storage
const sessionStore = new MongoStore(SessionStoreConfig);

// Express App Config
app.use(log('dev')) // Morgan
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'taskTeamSecretKey',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
    }
}));
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:4200', 'http://localhost:4200', 'http://localhost:3200'],
        credentials: true
    };
    app.use(cors(corsOptions));
}


// routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/member', memberRoutes);
app.use('/api/task', taskRoutes);


// Rendering 
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})


// Server creating
const port = process.env.PORT || 3030;
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
    // Connecting to database
    dbConnection();
});
