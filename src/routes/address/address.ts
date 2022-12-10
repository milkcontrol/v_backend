import express from 'express';

import {CountryController, StateController, CityController} from "../../controllers/address.controller";
import {vAddress} from "../../validators";

const router = express.Router();

router.get('/countries', CountryController.list);
router.get('/states', vAddress, StateController.list);
router.get('/cities', vAddress, CityController.list);

export default router;

