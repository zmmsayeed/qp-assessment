import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import GroceryItem from './GroceryItem';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

const db: any = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.groceryItems = GroceryItem;

export default db;
