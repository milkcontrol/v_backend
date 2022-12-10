const crypto = require('crypto');
const algorithmStr = 'aes-256-cbc';

const key = '0bba1db7d465947abb8271b64a1f8a73699359872c0ab8e873720a97fae09fbd'; //crypto.randomBytes(256/8).toString('hex')
const IV_LENGTH = 16;

interface DataEnCodeInterface {
  userId: string;
  role: number;
  exp: number;
  eat: number;
}

export const enCodeData = (data: DataEnCodeInterface) => {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(
    algorithmStr,
    Buffer.from(key, 'hex'),
    iv
  );
  let encrypted = cipher.update(JSON.stringify(data));
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
};

export const deCodeData = (text: string) => {
  const [iv, encryptedText] = text
    .split(':')
    .map(part => Buffer.from(part, 'hex'));
  const decipher = crypto.createDecipheriv(
    algorithmStr,
    Buffer.from(key, 'hex'),
    iv
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return JSON.parse(decrypted?.toString());
};

const main = () => {
  const data = {
    userId: 'string',
    role: 1,
    exp: 1,
    eat: 1,
  } as DataEnCodeInterface;
  const enCode = enCodeData(data);
  console.log({enCode});
  const deCode = deCodeData(enCode);
  console.log(deCode);
};

main();
