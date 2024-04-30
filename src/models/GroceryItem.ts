import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';

const GroceryItem = sequelize.define('groceryitem', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    inventoryCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'groceryitem',
    timestamps: true
});

GroceryItem.sync({ force: true }).then(() => {
    console.log('GroceryItem table created');
});

export default GroceryItem;
