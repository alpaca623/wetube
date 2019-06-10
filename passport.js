import passport from 'passport';
import User from './models/User';

passport.use(User.createStrategy());

// what is mean?
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

