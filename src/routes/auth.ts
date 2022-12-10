import express from 'express';
import {AuthController} from '../controllers/auth.controller';
import {vLogin, vVerifyCode, vForgetPassword, vResendCode, vGoogleFbAuth} from '../validators';
import multer from 'multer';
import authMiddleware from '../middlewares/auth.middleware';

const router = express.Router();
const upload = multer();

router.post('/login', upload.none(), vLogin, AuthController.login);
router.post('/refresh-token', upload.none(), AuthController.refreshToken);
router.post('/verify-codes', upload.none(), vVerifyCode, AuthController.verifyCode);
router.post('/resend-codes', upload.none(), vResendCode, AuthController.resendCode);
router.patch('/forget-password', upload.none(), vForgetPassword, AuthController.forgetPassword)
router.patch('/change-forget-password', upload.none(), vForgetPassword, AuthController.changeForgetPassword)
router.post('/google', upload.none(), vGoogleFbAuth, AuthController.googleAuth)
router.get('/google', AuthController.getGoogleAuthURL)

router.post('/facebook', upload.none(), vGoogleFbAuth,AuthController.facebookAuth)
router.get('/facebook', AuthController.getFacebookAuthURL)

router.post('/google-sign-out', authMiddleware(), upload.none(), AuthController.logOutGoogle)

export default router;
