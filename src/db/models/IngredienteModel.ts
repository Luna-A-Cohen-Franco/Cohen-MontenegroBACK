import mongoose from "mongoose";
import ingredienteSchema from "../schemas/IngredienteSchema";

const Ingrediente = mongoose.model('Ingrediente', ingredienteSchema);

export default Ingrediente
