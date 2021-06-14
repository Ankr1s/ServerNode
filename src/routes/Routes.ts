import { Router } from 'express';
import UserRoutes = require('./UserRoutes');
import TestRoutes = require('./TestRoutes');
import SearchRoutes = require('./SearchRoutes');
import DataRouter = require('./DataRoutes');
const router = Router();


 router.use('/users', UserRoutes);
 router.use('/test', TestRoutes);
 router.use('/search', SearchRoutes);
 router.use('/games', DataRouter);
// router.use('/people', PeopleRoutes);

export = router;
