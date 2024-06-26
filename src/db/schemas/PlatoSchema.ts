import mongoose from "mongoose";

const platoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    tipo: { type: String, required: true },
    ingredientes: { type: Map, of: Number, required: true },
    receta: { type: String, required: true },
    foto: { type: String, required: true }
});

export default platoSchema;