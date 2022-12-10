import express from 'express';
import * as RolesSupplierCtrl from '../../controllers/RolesSupplier.controller';
import {resOK} from '../../lib/http.exception';

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await RolesSupplierCtrl.getAll();
  res.send(resOK(result, result?.length));
});

router.get('/:id', async (req, res) => {
  const id = req.params?.id;
  const result = await RolesSupplierCtrl.getById(id);
  res.send(resOK(result));
});

router.delete('/:id', async (req, res) => {
  const id = req.params?.id;
  const result = await RolesSupplierCtrl.deleteById(id);
  res.send(resOK(result));
});

router.post('/', async (req, res) => {
  const body = req.body;
  const result = await RolesSupplierCtrl.create(body);
  res.send(resOK(result));
});

router.patch('/:id', async (req, res) => {
  const body = req.body;
  const id = req.params?.id;
  const result = await RolesSupplierCtrl.update(body, id);
  res.send(resOK(result));
});

export default router;
