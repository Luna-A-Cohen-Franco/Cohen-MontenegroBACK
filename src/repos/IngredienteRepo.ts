import { IIngrediente } from "@src/models/Ingrediente";
import Ingrediente from "@src/db/models/IngredienteModel";
async function persistsIngrediente(id: number): Promise<boolean> {
    
    return new Promise((resolve, reject) => {
      resolve(true);
  });
}
  
async function getAllIngredientes(): Promise<IIngrediente[]> {
    try {
        const platos: IIngrediente[] = await Ingrediente.find().exec();
        return platos;
    } catch (error) {
        console.error('Error retrieving platos:', error);
        throw error;
    }
}
  
async function getOneIngrediente(id: number): Promise<IIngrediente | null> {
    return new Promise((resolve, reject) => {
      resolve(null);
  });
}
  
async function addIngrediente(ingrediente: IIngrediente): Promise<void> {
    try{
        const newIngrediente = new Ingrediente(ingrediente);
        await newIngrediente.save();
    } catch (err) {
        console.error('Error adding plato:', err);
        throw err;
    }
}
  
  
async function updateIngrediente(id: number, ingrediente: IIngrediente): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve();
  });
}
  
  
async function deleteIngrediente(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve();
  });
}
  
  
export default {
    getAllIngredientes,
    getOneIngrediente,
    persistsIngrediente,
    addIngrediente,
    updateIngrediente,
    deleteIngrediente,
} as const;