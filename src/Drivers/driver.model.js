import { sequelise } from "sequelize";
import { DataTypes, UUIDV4 } from "sequelize";

export const Driver = sequelize.define('Drivers', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
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
        tableName: 'Drivers',
        timestamps: true,
    }

);