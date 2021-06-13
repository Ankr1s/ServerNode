import { Router } from 'express';
import UserRoutes = require('./UserRoutes');
import TestRoutes = require('./TestRoutes');
import SearchRoutes = require('./SearchRoutes');
const router = Router();


 router.use('/users', UserRoutes);
 router.use('/test', TestRoutes);
 router.use('/search', SearchRoutes);
// router.use('/people', PeopleRoutes);

export = router;
