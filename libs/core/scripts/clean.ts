import fs from 'fs-extra';
import path from 'path';

const cleanDirs = [
  'dist',
  'css'
]

cleanDirs.forEach(dir => {
  const cleanDir = path.join(__dirname, '../', dir);
  fs.removeSync(cleanDir);
});
