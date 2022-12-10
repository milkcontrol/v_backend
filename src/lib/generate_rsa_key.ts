/* eslint-disable node/no-unsupported-features/node-builtins */
import {generateKeyPairSync} from 'crypto';
import fs from 'fs';

const generateKey = () => {
  if (fs.existsSync('private.pem') && fs.existsSync('public.pem')) {
    process.env.JWT_PRIVATE_KEY = fs.readFileSync('private.pem', {
      encoding: 'utf8',
    });
    process.env.JWT_PUBLIC_KEY = fs.readFileSync('public.pem', {
      encoding: 'utf8',
    });
    return;
  }
  const {privateKey, publicKey} = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });

  process.env.JWT_PRIVATE_KEY = privateKey;
  fs.writeFileSync('private.pem', privateKey, {encoding: 'utf8'});

  process.env.JWT_PUBLIC_KEY = publicKey;
  fs.writeFileSync('public.pem', publicKey, {encoding: 'utf8'});
  return;
};

export default generateKey;
