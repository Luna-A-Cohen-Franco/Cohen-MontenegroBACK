import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { IIngrediente } from "@src/models/Ingrediente";
import IngredienteService from "@src/services/IngredienteService";
import { IReq, IRes } from "./types/types";
import IngredienteMethods from "@src/models/Ingrediente";

async function getAllIngredientes(_: IReq, res: IRes) {
    const ingredientes = await IngredienteService.getAllIngredientes();
    return res.status(HttpStatusCodes.OK).json(ingredientes);
  }
  
async function getOneIngrediente(req: IReq, res: IRes) {
    const id = req.params.id;
    const ingrediente = await IngredienteService.getOneIngrediente(id);

    if (!ingrediente) {
      return res.status(HttpStatusCodes.NOT_FOUND).end();
    }

    return res.status(HttpStatusCodes.OK).json(ingrediente);
}
  
async function addIngrediente(req: IReq<{ingrediente: IIngrediente}>, res: IRes) {
    if (!IngredienteMethods.isIngrediente(req.body)){
        return res.status(HttpStatusCodes.BAD_REQUEST).end();
    }
    
    const ingrediente = IngredienteMethods.from(req.body);
    
    await IngredienteService.addIngrediente(ingrediente);
    return res.status(HttpStatusCodes.CREATED).end();
}
  
async function updateIngrediente(req: IReq<{ ingrediente: IIngrediente }>, res: IRes) {
    const id = req.params.id
    if (!IngredienteMethods.isIngrediente(req.body)){
        return res.status(HttpStatusCodes.BAD_REQUEST).end();
    }
    
    const ingrediente = IngredienteMethods.from(req.body);
    await IngredienteService.updateIngrediente(id, ingrediente);
    return res.status(HttpStatusCodes.OK).end();
}
  
async function deleteIngrediente(req: IReq, res: IRes) {
    const id = req.params.id;
    await IngredienteService.deleteIngrediente(id);
    return res.status(HttpStatusCodes.OK).end();
}
  
export default {
    getAllIngredientes,
    getOneIngrediente,
    addIngrediente,
    updateIngrediente,
    deleteIngrediente,
} as const;
  