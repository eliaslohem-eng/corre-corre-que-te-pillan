import fs from 'fs';
import path from 'path';

fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist', { recursive: true });

const archivos = [
  'index.html',
  'manifest.json',
  'sw.js',
  'icon-192.png',
  'icon-512.png',
  'icon-1024.png'
];

for (const archivo of archivos) {
  if (fs.existsSync(archivo)) {
    fs.copyFileSync(archivo, path.join('dist', archivo));
  }
}

console.log('Build listo en dist/');
