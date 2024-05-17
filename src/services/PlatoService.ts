import PlatoRepo from '@src/repos/PlatoRepo';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { IPlato } from '@src/models/Plato';

function getAllPlatos(): Promise<IPlato[]> {
  return PlatoRepo.getAllPlatos();
}
  
async function getOnePlato(id: string): Promise<IPlato | null> {
  return PlatoRepo.getOnePlato(id);
}
  
function addPlato(plato: IPlato): Promise<boolean> {
  return PlatoRepo.addPlato(plato);
}
  
async function updatePlato(id: string, plato: IPlato): Promise<boolean> {
  return PlatoRepo.updatePlato(id, plato);
}
  
async function deletePlato(id: string): Promise<boolean> {
  return PlatoRepo.deletePlato(id);
}

export default {
  getAllPlatos,
  getOnePlato,
  addPlato,
  updatePlato,
  deletePlato,
} as const;