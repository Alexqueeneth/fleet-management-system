import { User } from "../models/user.model.js";
import { Todo } from "../models/todo.model.js";

User.hasMany(Todo, {
    foreignKey: 'userId', as: 'todos',
}); 

Todo.belongsTo(User, {
    foreignKey: 'userId', as: 'user', })