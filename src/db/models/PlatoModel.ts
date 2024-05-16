import mongoose from "mongoose";
import platoSchema from "../schemas/PlatoSchema";

const Plato = mongoose.model('Plato', platoSchema);

export default Plato
