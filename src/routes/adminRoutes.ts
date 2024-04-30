import express, { Router } from 'express';
import * as adminController from '../controllers/adminController';
import { authenticate } from '../middleware/authMiddleware';

// Class based routes file
class AdminRouter {
    public router: Router;

    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post('/add', authenticate('admin'), adminController.addGroceryItem);
        this.router.get('/view', authenticate('admin'), adminController.viewGroceryItems);
        this.router.put('/update/:id', authenticate('admin'), adminController.updateGroceryItem);
        this.router.delete('/delete/:id', authenticate('admin'), adminController.deleteGroceryItem);
    }
}

export default new AdminRouter().router;