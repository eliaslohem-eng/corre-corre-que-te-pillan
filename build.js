import fs from 'fs';
import path from 'path';
fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist', { recursive: true });
function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) copy(path.join(src, item), path.join(dest, item));
  } else {
    fs.copyFileSync(src, dest);
  }
}
copy('public', 'dist');
console.log('Build listo en dist/');
