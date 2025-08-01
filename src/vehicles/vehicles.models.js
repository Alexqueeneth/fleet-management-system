import { DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "../common/db.common.js";

export const Vehicle = sequelize.define('Vehicles', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allownull: false,
    },
    plate_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    make: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    year:
    { type: DataTypes.INTEGER,
        allowNull: false},
    status:{
           type: DataTypes.STRING,
            allowNull: false,
        },

    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    } 
}, {
        tablename: 'vehicles',
        timestamps: true,
    }

);