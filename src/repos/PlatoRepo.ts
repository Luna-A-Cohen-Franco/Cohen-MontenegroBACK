import { IPlato } from "@src/models/Plato";
import Plato from "@src/db/models/PlatoModel";
import PlatoMethods from "@src/models/Plato"
async function persistsPlato(id: string): Promise<boolean> {
    
    return new Promise((resolve, reject) => {
      resolve(true);
  });
}
  
async function getAllPlatos(): Promise<IPlato[]> {
    try {
      const platos = await Plato.find().exec();

      if (platos.length === 0){
        return []
      }
      return platos
        .filter(PlatoMethods.isPlato)
        .map(PlatoMethods.from);
    } catch (error) {
        console.error('Error retrieving plato:', error);
        throw error;
    }
}
  
async function getOnePlato(id: string): Promise<IPlato | null> {
    try {
        const fetchPlato: object | null = await Plato.findById(id).exec()
        if (fetchPlato === null){
          return null;
        }
        
        if (typeof fetchPlato == "object" && PlatoMethods.isPlato(fetchPlato as object)){
          return PlatoMethods.from(fetchPlato as object)
        }
        
        return null
    } catch (error) {
        console.error('Error retrieving plato:', error);
        throw error;
    }
}
  
async function addPlato(plato: IPlato): Promise<boolean> {
    try{
        const newPlato = new Plato(plato);
        await newPlato.save();
        return true
    } catch (err) {
        console.error('Error adding plato:', err);
        throw err;
    }
}
  
async function updatePlato(id: string, plato: IPlato): Promise<boolean> {
    try{
        //const plato = await Plato.findOneAndUpdate(
          //  { _id: id }, 
           // plato,
           // { new: true }
        //).exec();*/

        return true;
    } catch (err) {
        console.error('Error updating plato:', err);
        throw err;
    }
}
  
async function deletePlato(id: string): Promise<boolean> {
    try {
        const deletedPlato = await Plato.findOneAndDelete({ _id: id }).exec();
        return deletedPlato != null;
    } catch (error) {
        console.error('Error deleting plato:', error);
        throw error;
    }
}
  
export default {
    getAllPlatos,
    getOnePlato,
    persistsPlato,
    addPlato,
    updatePlato,
    deletePlato,
} as const;