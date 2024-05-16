import IngredienteRepo from '@src/repos/IngredienteRepo';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { IIngrediente } from '@src/models/Ingrediente';

function getAllIngredientes(): Promise<IIngrediente[]> {
  return IngredienteRepo.getAllIngredientes();
}
  
async function getOneIngrediente(id: number): Promise<IIngrediente | null> {
  const persists = await IngredienteRepo.persistsIngrediente(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      ""
    );
  }
  
  return IngredienteRepo.getOneIngrediente(id);
}
  
function addIngrediente(ingrediente: IIngrediente): Promise<void> {
  return IngredienteRepo.addIngrediente(ingrediente);
}
  
async function updateIngrediente(id: number, ingrediente: IIngrediente): Promise<void> {
  const persists = await IngredienteRepo.persistsIngrediente(id);
  if (!persists) {
    if (!persists) {
      throw new RouteError(
        HttpStatusCodes.NOT_FOUND,
        ""
      );
    }
  }
  return IngredienteRepo.updateIngrediente(id, ingrediente);
}
  
async function deleteIngrediente(id: number): Promise<void> {
  const persists = await IngredienteRepo.persistsIngrediente(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      ""
    );
  }
  
  return IngredienteRepo.deleteIngrediente(id);
}

export default {
  getAllIngredientes,
  getOneIngrediente,
  addIngrediente,
  updateIngrediente,
  deleteIngrediente,
} as const;