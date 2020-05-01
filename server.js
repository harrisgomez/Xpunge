const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');

const signIn = require('./routes/signIn');
const register = require('./routes/register');
const profile = require('./routes/profile');
// const album = require('./routes/album');

// * MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// * DB CONFIG
const db = knex({
    client: 'pg',
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

// * ROUTES
app.get('/', (_req, res) => res.send('Working'));
app.post('/signin', signIn.handleSignInRoute(db, bcrypt));
app.post('/register', register.handleRegisterRoute(db, bcrypt));
// app.put('/album', album.handleAlbumRoute(db));
app.get('/profile/:id', profile.handleProfileRoute(db));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

