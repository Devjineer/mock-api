// api/users.js
import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  const filePath = join(process.cwd(), 'db.json');
  const data = JSON.parse(readFileSync(filePath, 'utf8'));

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data.users);
}
