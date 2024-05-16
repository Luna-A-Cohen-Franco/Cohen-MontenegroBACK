import { IPlato } from "@src/models/Plato";
import mongoose from "mongoose";
import ingredienteSchema from "./IngredienteSchema";

const platoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    tipo: { type: String, required: true },
    ingredientes: { type: [Number], required: true },
    receta: { type: String, required: true },
    foto: { type: String, required: true }
});

export default platoSchema;