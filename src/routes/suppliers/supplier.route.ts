import express from 'express';
import * as SuppliersController from '../../controllers/Suppliers.controller';
import {resOK} from '../../lib/http.exception';

const router = express.Router();

router.get('/', async (req, res) => {
  const suppliers = await SuppliersController.getAll();
  return res.send(resOK(suppliers, suppliers?.length));
});

router.get('/:id', async (req, res) => {
  const id = req.params?.id;
  const supp = await SuppliersController.getById(id);
  res.send(resOK(supp));
});

router.delete('/:id', async (req, res) => {
  const id = req.params?.id;
  const supp = await SuppliersController.deleteById(id);
  res.send(resOK(supp));
});

router.post('/', async (req, res) => {
  const body = req.body;
  const supp = await SuppliersController.create(body);
  res.send(resOK(supp));
});

router.patch('/:id', async (req, res) => {
  const body = req.body;
  const id = req.params?.id;
  const supp = await SuppliersController.update(body, id);
  res.send(resOK(supp));
});

export default router;
