import express, { Router, Request, Response } from 'express';
// Import controller here

const testRouter: Router = express.Router();

testRouter.get('/', (req: Request, res: Response) => {
    console.log('test');
    return res.status(200).json({
        message: 'This route works!',
    });
});

export default testRouter;
