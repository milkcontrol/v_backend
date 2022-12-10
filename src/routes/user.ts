import express from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import {UserController} from '../controllers/user.controller';
import {vChangePassword} from '../validators';
import {vUpdate, vUploadInfo, vUserCreate} from '../validators';
import multer from 'multer';
import {storageUser} from '../config/MulterImage';
import {resErr} from '../lib/http.exception';

const router = express.Router();

const upload = multer({
  storage: storageUser,
  limits: {fileSize: 5242880},
});
const listFields = [
  {
    name: 'identityImageOne',
    maxCount: 1,
  },
  {
    name: 'identityImageTwo',
    maxCount: 1,
  },
  {
    name: 'identityImageThree',
    maxCount: 1,
  },
];
const handleUpload = upload.fields(listFields);

router.post('/', upload.none(), vUserCreate, UserController.create);
router.post(
  '/upload-info',
  (req, res, next) => {
    handleUpload(req, res, err => {
      if (err) {
        req.body.message = err.message;
        if (err.message === 'Expired next token')
          req.body.error = 'E_EXP_NEXT_TOKEN';
        else if (err.message === 'Invalid next token')
          req.body.error = 'E_INVALID_NEXT_TOKEN';
      }
      next();
      if (err)
        return res
          .status(req.body.error ? 401 : 400)
          .send(resErr(err.message, req.body.error));
    });
  },
  vUploadInfo,
  UserController.uploadInfo
);
router.get('/approve-user', authMiddleware(), UserController.parentApprove)
router.get('/find', UserController.findUser);
router.get('/:id', authMiddleware(), UserController.getUser);

router.patch(
  '/change-password',
  upload.none(),
  authMiddleware(),
  vChangePassword,
  UserController.changePassWord
);
router.patch(
  '/reset-password/:uuid',
  authMiddleware(),
  UserController.resetPassword
);
router.patch(
  '/change-protector',
  authMiddleware(),
  UserController.changeProtector
);
router.patch('/:id', upload.none(), authMiddleware(), UserController.update);
router.put(
  '/:id',
  upload.none(),
  vUpdate,
  authMiddleware(),
  UserController.update
);
router.delete('/:id', authMiddleware(), UserController.destroy);

export default router;
