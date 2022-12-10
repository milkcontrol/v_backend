import express from 'express';
import * as MessagesCtrl from '../../controllers/Messages.controller';
import {resOK} from '../../lib/http.exception';

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await MessagesCtrl.getAll();
  res.send(resOK(result, result?.length));
});

router.get('/:id', async (req, res) => {
  const id = req.params?.id;
  const result = await MessagesCtrl.getById(id);
  res.send(resOK(result));
});

router.delete('/:id', async (req, res) => {
  const id = req.params?.id;
  const result = await MessagesCtrl.deleteById(id);
  res.send(resOK(result));
});

router.post('/', async (req, res) => {
  const body = req.body;
  const result = await MessagesCtrl.create(req, body);
  res.send(resOK(result));
});

router.patch('/:id', async (req, res) => {
  const body = req.body;
  const id = req.params?.id;
  const result = await MessagesCtrl.update(body, id);
  res.send(resOK(result));
});

export default router;
