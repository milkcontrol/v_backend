import Suppliers from '../models/Suppliers.model';

export const getAll = async () => {
  return await Suppliers.findAll({raw: true});
};

export const getById = async (id: string) => {
  const supp = await Suppliers.findOne({
    where: {id},
  });
  return supp;
};

export const deleteById = async (id: string) => {
  const supp = await Suppliers.destroy({
    where: {id},
  });
  return supp;
};

export const create = async (body: any) => {
  const supp = await Suppliers.create(body);
  return supp;
};

export const update = async (body: any, id: string) => {
  const supp = await Suppliers.update(body, {where: {id}});
  return supp;
};
