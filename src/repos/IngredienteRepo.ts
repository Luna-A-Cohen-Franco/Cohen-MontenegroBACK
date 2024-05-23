import { IIngrediente } from "@src/models/Ingrediente";
import Ingrediente from "@src/db/models/IngredienteModel";
async function persistsIngrediente(id: string): Promise<boolean> {
    try {
        const plato: IIngrediente | null = await Ingrediente.findById(id).exec()
        return plato != null;
    } catch (error) {
        console.error('Error retrieving ingrediente:', error);
        throw error;
    }
}
  
async function getAllIngredientes(): Promise<IIngrediente[]> {
    try {
        const platos: IIngrediente[] = await Ingrediente.find().exec();
        return platos;
    } catch (error) {
        console.error('Error retrieving ingrediente:', error);
        throw error;
    }
}
  
async function getOneIngrediente(id: string): Promise<IIngrediente | null> {
    try {
        const plato: IIngrediente | null = await Ingrediente.findById(id).exec()
        return plato;
    } catch (error) {
        console.error('Error retrieving ingrediente:', error);
        throw error;
    }
}
  
async function addIngrediente(ingrediente: IIngrediente): Promise<boolean> {
    try{
        const newIngrediente = new Ingrediente(ingrediente);
        await newIngrediente.save();
        return true
    } catch (err) {
        console.error('Error adding ingrediente:', err);
        throw err;
    }
}
  
async function updateIngrediente(id: string, ingrediente: IIngrediente): Promise<boolean> {
    try{
        const plato = await Ingrediente.findOneAndUpdate(
            { _id: id }, 
            ingrediente,
            { new: true }
        ).exec();

        return plato != null;
    } catch (err) {
        console.error('Error updating ingrediente:', err);
        throw err;
    }
}
  
async function deleteIngrediente(id: string): Promise<boolean> {
    try {
        const deletedPlato = await Ingrediente.findOneAndDelete({ _id: id }).exec();
        return deletedPlato != null;
    } catch (error) {
        console.error('Error deleting ingrediente:', error);
        throw error;
    }
}
  
export default {
    getAllIngredientes,
    getOneIngrediente,
    persistsIngrediente,
    addIngrediente,
    updateIngrediente,
    deleteIngrediente,
} as const;