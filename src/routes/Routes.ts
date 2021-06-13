import { Router } from 'express';
import UserRoutes = require('./UserRoutes');
import TestRoutes = require('./TestRoutes');
const router = Router();


 router.use('/users', UserRoutes);
 router.use('/test', TestRoutes);
// router.use('/people', PeopleRoutes);

export = router;
