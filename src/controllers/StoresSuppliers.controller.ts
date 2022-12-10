import StoresSuppliersModel from '../models/StoresSuppliers.model';

export const getAll = async () => {
  return await StoresSuppliersModel.findAll({raw: true});
};

export const getById = async (id: string) => {
  const supp = await StoresSuppliersModel.findOne({
    where: {id},
  });
  return supp;
};

export const deleteById = async (id: string) => {
  const supp = await StoresSuppliersModel.destroy({
    where: {id},
  });
  return supp;
};

export const create = async (body: any) => {
  const supp = await StoresSuppliersModel.create(body);
  return supp;
};

export const update = async (body: any, id: string) => {
  const supp = await StoresSuppliersModel.update(body, {where: {id}});
  return supp;
};
