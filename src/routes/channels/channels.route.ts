import express from 'express';
import * as ChannelsCtrl from '../../controllers/Channels.controller';
import {resOK} from '../../lib/http.exception';

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await ChannelsCtrl.getAll(req);
  res.send(resOK(result, result?.length));
});

router.get('/:id', async (req, res) => {
  const id = req.params?.id;
  const result = await ChannelsCtrl.getById(req, id);
  res.send(resOK(result));
});

router.delete('/:id', async (req, res) => {
  const id = req.params?.id;
  const result = await ChannelsCtrl.deleteById(req, id);
  res.send(resOK(result));
});

router.post('/', async (req, res) => {
  const body = req.body;
  const result = await ChannelsCtrl.create(req, body);
  res.send(resOK(result));
});

router.patch('/:id', async (req, res) => {
  const body = req.body;
  const id = req.params?.id;
  const result = await ChannelsCtrl.update(body, id);
  res.send(resOK(result));
});

export default router;
