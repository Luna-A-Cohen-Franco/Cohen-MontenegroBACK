import { IPlato } from "@src/models/Plato";

export interface IPlatoIdV extends IPlato{
    _id: string;
    __v: number;
}

function new_(
    _id: string,
    __v: number,
    nombre: string,
    descripcion: string,
    tipo: string,
    ingredientes: Map<string, number>,
    receta: string,
    foto: string,
): IPlatoIdV {
    return {
        _id: _id,
        __v: __v,
        nombre: nombre,
        descripcion: descripcion ,
        tipo: tipo,
        ingredientes: ingredientes,
        receta: receta,
        foto: foto,
    };
}

function from(param: object): IPlatoIdV {
    const p = param as IPlatoIdV;
    return new_(p._id, p.__v, p.nombre, p.descripcion, p.tipo, p.ingredientes, p.receta, p.foto);
}

export default {
    new: new_,
    from,
} as const;