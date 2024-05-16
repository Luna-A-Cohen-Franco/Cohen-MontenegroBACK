import Paths from "@src/constants/Paths";
import IngredienteRoutes from "../IngredienteRoutes";
import { Router } from "express";

const ingredienteRouter = Router();

// Get all ingredientes
ingredienteRouter.get(
    Paths.Ingrediente.GetAllIngredientes,
    IngredienteRoutes.getAllIngredientes,
);
  
// Get ingrediente by ID
ingredienteRouter.get(
    Paths.Ingrediente.GetOneIngrediente,
    IngredienteRoutes.getOneIngrediente,
);
  
// Add one ingrediente
ingredienteRouter.post(
    Paths.Ingrediente.AddIngrediente,
    IngredienteRoutes.addIngrediente,
);
  
// Update one ingrediente
ingredienteRouter.put(
    Paths.Ingrediente.UpdateIngrediente,
    IngredienteRoutes.updateIngrediente,
);
  
// Delete one ingrediente
ingredienteRouter.delete(
    Paths.Ingrediente.DeleteIngrediente,
    IngredienteRoutes.deleteIngrediente,
);


export default ingredienteRouter;  