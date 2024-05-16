import Paths from "@src/constants/Paths";
import { Router } from "express";
import PlatoRoutes from "../PlatoRoutes";

const platoRouter = Router();

// Get all platos
platoRouter.get(
    Paths.Plato.GetAllPlatos,
    PlatoRoutes.getAllPlatos,
);
  
// Get plato by ID
platoRouter.get(
    Paths.Plato.GetOnePlato,
    PlatoRoutes.getOnePlato,
);
  
// Add one plato
platoRouter.post(
    Paths.Plato.AddPlato,
    PlatoRoutes.addPlato,
);
  
// Update one plato
platoRouter.put(
    Paths.Plato.UpdatePlato,
    PlatoRoutes.updatePlato,
);
  
// Delete one plato
platoRouter.delete(
    Paths.Plato.DeletePlato,
    PlatoRoutes.deletePlato,
);

export default platoRouter;