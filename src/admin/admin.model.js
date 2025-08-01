import { DataTypes } from 'sequelize';
import { sequelize } from '../common/db.common.js';

export const Admin = sequelize.define('Admin', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        
            
        },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        
    },

    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    timestamps: true,
    tableName: 'admins',
});