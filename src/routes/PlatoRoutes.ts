import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import PlatoService from '@src/services/PlatoService';
import { IPlato } from '@src/models/Plato';
import { IReq, IRes } from './types/express/misc';

async function getAllPlatos(_: IReq, res: IRes) {
  const platos = await PlatoService.getAllPlatos();
  return res.status(HttpStatusCodes.OK).json( platos );
}

async function getOnePlato(req: IReq, res: IRes) {
  const id = +req.params.id;
  const plato = await PlatoService.getOnePlato(id);
  if (!plato) {
    return res.status(HttpStatusCodes.NOT_FOUND).end();
  }
  return res.status(HttpStatusCodes.OK).json({ plato });
}

async function addPlato(req: IReq<{platos: IPlato}>, res: IRes) {
  const { platos } = req.body;
  console.log(platos);
  await PlatoService.addPlato(platos);
  return res.status(HttpStatusCodes.CREATED).end();
}

async function updatePlato(req: IReq<{ platos: IPlato }>, res: IRes) {
  const id =+req.params.id
  const { platos } = req.body;
  await PlatoService.updatePlato(id,platos);
  return res.status(HttpStatusCodes.OK).end();
}

async function deletePlato(req: IReq, res: IRes) {
  const id = +req.params.id;
  await PlatoService.deletePlato(id);
  return res.status(HttpStatusCodes.OK).end();
}

export default {
  getAllPlatos,
  getOnePlato,
  addPlato,
  updatePlato,
  deletePlato,
} as const;
