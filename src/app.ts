import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import adminRoutes from './routes/adminRoutes';
import userRoutes from './routes/userRoutes';
import db from './models';

class Server {
    private app: Application;
    private port: string | number;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.initializeMiddlewares();
        this.initializeRoutes();
        this.testDatabaseConnection();
    }

    private initializeMiddlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private initializeRoutes(): void {
        this.app.use('/admin', adminRoutes);
        this.app.use('/user', userRoutes);
    }

    private testDatabaseConnection(): void {
        db.sequelize.authenticate()
            .then(() => {
                console.log('DB connection has been established successfully.');
                this.startServer();
            })
            .catch((error: any) => {
                console.error('Unable to connect to the database:', error);
            });
    }

    private startServer(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default new Server(); 
