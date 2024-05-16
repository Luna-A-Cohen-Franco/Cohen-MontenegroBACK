export interface IIngrediente {
  nombre: string;
  descripcion: string;
}

function new_( nombre: string, descripcion: string): IIngrediente {
  return {
    nombre: nombre,
    descripcion: descripcion,
  };
}

function from(param: object): IIngrediente {
  if (!isIngrediente(param)) {
    throw new Error();
  }

  const p = param as IIngrediente;
  return new_(p.nombre, p.descripcion);
}

function isIngrediente(obj: object): boolean {
  return (
    'nombre' in obj && typeof obj.nombre === 'string' &&
    'descripcion' in obj && typeof obj.descripcion === 'string'
  );
}

export default {
  new: new_,
  from,
  isIngrediente,
} as const;