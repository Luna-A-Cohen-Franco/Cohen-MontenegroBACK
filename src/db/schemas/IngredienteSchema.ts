
import { IIngrediente } from "@src/models/Ingrediente";
import mongoose from "mongoose";

const ingredienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true }
});

export default ingredienteSchema