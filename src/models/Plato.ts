export interface IPlato {
  nombre: string;
  descripcion: string;
  tipo: string;
  ingredientes: Map<string, number>;
  receta: string;
  foto: string;
}

function new_(
  nombre: string,
  descripcion: string,
  tipo: string,
  ingredientes: Map<string, number>,
  receta: string,
  foto: string,
): IPlato {
  return {
    nombre: nombre,
    descripcion: descripcion ,
    tipo: tipo,
    ingredientes: ingredientes,
    receta: receta,
    foto: foto,
  };
}


function from(param: object): IPlato {
  if (!isPlato(param)) {
    throw new Error();
  }

  const p = param as IPlato;
  return new_(p.nombre, p.descripcion, p.tipo, p.ingredientes, p.receta, p.foto);
}

function isPlato(obj: object): boolean {
  return (
    'nombre' in obj && typeof obj.nombre === 'string' &&
    'descripcion' in obj && typeof obj.descripcion === 'string' &&
    'tipo' in obj && typeof obj.tipo === 'string' &&
    'ingredientes' in obj &&
    typeof obj.ingredientes === 'object' && !Array.isArray(obj.ingredientes) &&
    'receta' in obj && typeof obj.receta === 'string' &&
    'foto' in obj && typeof obj.foto === 'string'
  );
}

export default {
  new: new_,
  from,
  isPlato,
} as const;
