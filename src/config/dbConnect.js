import mongoose from "mongoose";

mongoose.connect('mongodb+srv://joadson:1234@alura.er1r1.mongodb.net/alura-node');

let db = mongoose.connection

export default db;