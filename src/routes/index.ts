import express, { Router } from 'express';
// Import other route files here
import testRouter from './test.routes';

const router: Router = express.Router();
// Define route here
router.use('/test', testRouter);

export default router;
