import express from 'express';
import * as userController from '../controllers/userController';
import { authenticate } from '../middleware/authMiddleware';

// Not a class based routes file
const router = express.Router();

router.get('/list', authenticate('user'), userController.listAvailableItems);
router.post('/book', authenticate('user'), userController.bookItems);

export default router;
