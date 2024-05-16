import IngredienteRepo from '@src/repos/IngredienteRepo';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { IIngrediente } from '@src/models/Ingrediente';

function getAllIngredientes(): Promise<IIngrediente[]> {
  return IngredienteRepo.getAllIngredientes();
}
  
async function getOneIngrediente(id: string): Promise<IIngrediente | null> {
  return IngredienteRepo.getOneIngrediente(id);
}
  
function addIngrediente(ingrediente: IIngrediente): Promise<boolean> {
  return IngredienteRepo.addIngrediente(ingrediente);
}
  
async function updateIngrediente(id: string, ingrediente: IIngrediente): Promise<boolean> {
  return IngredienteRepo.updateIngrediente(id, ingrediente);
}
  
async function deleteIngrediente(id: string): Promise<boolean> {
  return IngredienteRepo.deleteIngrediente(id);
}

export default {
  getAllIngredientes,
  getOneIngrediente,
  addIngrediente,
  updateIngrediente,
  deleteIngrediente,
} as const;