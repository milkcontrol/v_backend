import crypto from 'crypto';

export function createSignature(rawSignature: string): string {
  const {MOMO_SECRET_KEY} = process.env;
  return crypto
    .createHmac('sha256', MOMO_SECRET_KEY || '')
    .update(rawSignature)
    .digest('hex');
}

export function generateRawSignature(data: object): string {
  return Object.entries(data)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

export function generateSignature(data: object): string {
  return createSignature(generateRawSignature(data));
}
