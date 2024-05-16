import { IPlato } from '@src/models/Plato';

async function persistsPlato(id: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    resolve(true);
});
}

async function getAllPlatos(): Promise<IPlato[]> {
  return new Promise((resolve, reject) => {
    resolve([]);
});
}

async function getOnePlato(id: number): Promise<IPlato | null> {
  return new Promise((resolve, reject) => {
    resolve(null);
});
}

async function addPlato(plato: IPlato): Promise<void> {
  return new Promise((resolve, reject) => {
    resolve();
});
}


async function updatePlato(id: number, plato: IPlato): Promise<void> {
  return new Promise((resolve, reject) => {
    resolve();
});
}


async function deletePlato(id: number): Promise<void> {
  return new Promise((resolve, reject) => {
    resolve();
});
}


export default {
  getAllPlatos,
  getOnePlato,
  persistsPlato,
  addPlato,
  updatePlato,
  deletePlato,
} as const;