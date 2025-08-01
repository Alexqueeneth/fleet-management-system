import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';

export const Assignment = sequelize.define('Assignment', {
    id: { 
        type: DataTypes.UUID, 
        primaryKey: true, 
        defaultValue: DataTypes.UUIDV4, 
        allowNull: false 
    },
    vehicleId: {
        type: DataTypes.UUID,
        references: {
            model: 'Vehicles',
            key: 'id'
        }
    },
    driverId: {
        type: DataTypes.UUID,
        references: {
            model: 'Drivers',
            key: 'id'
        }
    },
    assignedAt: {
        type: DataTypes.DATE,       
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'assignments',
    timestamps: true,
});
