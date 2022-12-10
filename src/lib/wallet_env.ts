const envs = [
  'MOMO_API',
  'MOMO_ACCESS_KEY',
  'MOMO_SECRET_KEY',
  'MOMO_PARTNER_CODE',
  'MOMO_MAX_PAYMENT',
  'MOMO_MIN_PAYMENT',
  // 'MOMO_REDIRECT_URL',
  'MOMO_IPN_URL',
  'STRIPE_PUBLISH_KEY',
  'STRIPE_SECRET_KEY',
];
export default function checkWalletEnv() {
  for (const key of envs) {
    if (!process.env[key]) {
      throw new Error('invalid env key : ' + key);
    }
  }
  return true;
}
