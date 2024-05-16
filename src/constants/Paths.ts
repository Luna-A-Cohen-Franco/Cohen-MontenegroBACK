/**
 * Express router paths go here.
 */


export default {

  Base: '/',
  Plato: {
    Base: '/plato',
    GetAllPlatos: '',
    GetOnePlato: '/:id',
    AddPlato: '',
    UpdatePlato: '/:id',
    DeletePlato: '/:id',
  },
  Ingrediente: {
    Base: '/ingrediente',
    GetAllIngredientes: '',
    GetOneIngrediente: '/:id',
    AddIngrediente: '',
    UpdateIngrediente: '/:id',
    DeleteIngrediente: '/:id',
  },
} as const;
