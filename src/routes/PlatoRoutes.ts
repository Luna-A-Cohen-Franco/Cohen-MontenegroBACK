import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { IPlato } from "@src/models/Plato";
import PlatoService from "@src/services/PlatoService";
import { IReq, IRes } from "./types/types";
import PlatoMethods from "@src/models/Plato";

async function getAllPlatos(_: IReq, res: IRes) {
    const platos = await PlatoService.getAllPlatos();
    return res.status(HttpStatusCodes.OK).json(platos);
  }
  
async function getOnePlato(req: IReq, res: IRes) {
    const id = req.params.id;
    const plato = await PlatoService.getOnePlato(id);

    if (!plato) {
      return res.status(HttpStatusCodes.NOT_FOUND).end();
    }

    return res.status(HttpStatusCodes.OK).json(plato);
}
  
async function addPlato(req: IReq<{plato: IPlato}>, res: IRes) {
    if (!PlatoMethods.isPlato(req.body)){
        return res.status(HttpStatusCodes.BAD_REQUEST).end();
    }
    
    const plato = PlatoMethods.from(req.body);
    
    await PlatoService.addPlato(plato);
    return res.status(HttpStatusCodes.CREATED).end();
}
  
async function updatePlato(req: IReq<{ plato: IPlato }>, res: IRes) {
    const id = req.params.id
    if (!PlatoMethods.isPlato(req.body)){
        return res.status(HttpStatusCodes.BAD_REQUEST).end();
    }
    
    const plato = PlatoMethods.from(req.body);
    await PlatoService.updatePlato(id, plato);
    return res.status(HttpStatusCodes.OK).end();
}
  
async function deletePlato(req: IReq, res: IRes) {
    const id = req.params.id;
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
  