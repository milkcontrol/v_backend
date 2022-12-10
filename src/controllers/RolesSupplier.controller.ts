import RolesSupplierModel from '../models/RolesSupplier.model';

export const getAll = async () => {
  return await RolesSupplierModel.findAll({raw: true});
};

export const getById = async (id: string) => {
  const supp = await RolesSupplierModel.findOne({
    where: {id},
  });
  return supp;
};

export const deleteById = async (id: string) => {
  const supp = await RolesSupplierModel.destroy({
    where: {id},
  });
  return supp;
};

export const create = async (body: any) => {
  const supp = await RolesSupplierModel.create(body);
  return supp;
};

export const update = async (body: any, id: string) => {
  const supp = await RolesSupplierModel.update(body, {where: {id}});
  return supp;
};
