import crypto from 'crypto'

export const isEmpty = (value: unknown) => {
  return value === undefined || value === null || value === ""
}

function generateSaltedCode(input: string) {
  const salt = Math.random().toString(36).slice(2, 6); // random 4 chars
  const combined = input + salt;
  const hash = crypto.createHash('sha256').update(combined).digest('hex');
  return hash.slice(0, 8);
}
