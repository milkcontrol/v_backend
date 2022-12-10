import express from 'express';
import * as SuppliersStoresCtrl from '../../controllers/StoresSuppliers.controller';
import {resOK} from '../../lib/http.exception';

const router = express.Router();

router.get('/', async (req, res) => {
  const suppliers = await SuppliersStoresCtrl.getAll();
  res.send(resOK(suppliers));
});

router.get('/:id', async (req, res) => {
  const id = req.params?.id;
  const supp = await SuppliersStoresCtrl.getById(id);
  res.send(resOK(supp));
});

router.delete('/:id', async (req, res) => {
  const id = req.params?.id;
  const supp = await SuppliersStoresCtrl.deleteById(id);
  res.send(resOK(supp));
});

router.post('/', async (req, res) => {
  const body = req.body;
  const supp = await SuppliersStoresCtrl.create(body);
  res.send(resOK(supp));
});

router.patch('/:id', async (req, res) => {
  const body = req.body;
  const id = req.params?.id;
  const supp = await SuppliersStoresCtrl.update(body, id);
  res.send(resOK(supp));
});

export default router;
