import { Router } from 'express';
import Paths from '../../constants/Paths';
import platoRouter from '../routers/PlatoRouter';
import ingredientesRouter from '../routers/IngredienteRouter';
const apiRouter = Router()

apiRouter.use(Paths.Plato.Base, platoRouter);
apiRouter.use(Paths.Ingrediente.Base, ingredientesRouter);

export default apiRouter;