import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database/database.js';



const Order = sequelize.define('orders', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field:'total_price' 
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    mealId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:'meal_id'
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
        
    },
    
    status: {
        type: DataTypes.ENUM('active','cancelled','completed'),
        allowNull: false,
        defaultValue: 'active'
    }
});

export default Order;