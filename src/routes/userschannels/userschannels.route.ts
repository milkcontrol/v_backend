import express from 'express';
import * as UsersChannelsCtrl from '../../controllers/UsersChannels.controller';
import {resOK} from '../../lib/http.exception';

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await UsersChannelsCtrl.getAll(req);
  res.send(resOK(result, result?.length));
});

router.get('/:id', async (req, res) => {
  const id = req.params?.id;
  const result = await UsersChannelsCtrl.getById(req, id);
  res.send(resOK(result));
});

router.delete('/:id', async (req, res) => {
  const id = req.params?.id;
  const result = await UsersChannelsCtrl.deleteById(req, id);
  res.send(resOK(result));
});

router.post('/', async (req, res) => {
  const body = req.body;
  const result = await UsersChannelsCtrl.create(req, body);
  res.send(resOK(result));
});

router.patch('/:id', async (req, res) => {
  const body = req.body;
  const id = req.params?.id;
  const result = await UsersChannelsCtrl.update(body, id);
  res.send(resOK(result));
});

export default router;
