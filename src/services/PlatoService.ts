import PlatoRepo from '@src/repos/PlatoRepo';
import { IPlato } from '@src/models/Plato';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

function getAllPlatos(): Promise<IPlato[]> {
  return PlatoRepo.getAllPlatos();
}

async function getOnePlato(id: number): Promise<IPlato | null> {
  const persists = await PlatoRepo.persistsPlato(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      ""
    );
  }
  
  return PlatoRepo.getOnePlato(id);
}

function addPlato(plato: IPlato): Promise<void> {
  return PlatoRepo.addPlato(plato);
}
 
async function updatePlato(id: number, plato: IPlato): Promise<void> {
  const persists = await PlatoRepo.persistsPlato(id);
  if (!persists) {
    if (!persists) {
      throw new RouteError(
        HttpStatusCodes.NOT_FOUND,
        ""
      );
    }
  }
  return PlatoRepo.updatePlato(id, plato);
}
 
async function deletePlato(id: number): Promise<void> {
  const persists = await PlatoRepo.persistsPlato(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      ""
    );
  }
  
  return PlatoRepo.deletePlato(id);
}

export default {
  getAllPlatos,
  getOnePlato,
  addPlato,
  updatePlato,
  deletePlato,
} as const;