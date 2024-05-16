export interface IIngrediente {
  nombre: string;
  descripcion: string;
  cantidad: number;
}

function new_( nombre: string, descripcion: string, cantidad: number): IIngrediente {
  return {
    nombre: nombre,
    descripcion: descripcion,
    cantidad: cantidad,
  };
}

function from(param: object): IIngrediente {
  if (!isIngrediente(param)) {
    throw new Error();
  }

  const p = param as IIngrediente;
  return new_(p.nombre, p.descripcion, p.cantidad);
}

function isIngrediente(obj: object): boolean {
  return (
    'nombre' in obj && typeof obj.nombre === 'string' &&
    'descripcion' in obj && typeof obj.descripcion === 'string' &&
    'cantidad' in obj && typeof obj.cantidad === 'number'
  );
}

export default {
  new: new_,
  from,
  isIngrediente,
} as const;