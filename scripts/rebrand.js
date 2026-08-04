const fs = require('fs');
const path = require('path');

const replacements = [
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ["SS Ruma International Ltd", 'SS Ruma International Ltd'],
  ['SSRumaInternationalLtd', 'SSRumaInternationalLtd'],
  ['ssrumaintltd.com', 'ssrumaintltd.com'],
  ['ssrumaintltd', 'ssrumaintltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SS Ruma International Ltd', 'SS Ruma International Ltd'],
  ['SSRumaInternationalLtd', 'SSRumaInternationalLtd'],
  ['ssrumaintltd.com', 'ssrumaintltd.com'],
  ['ssrumaintltd', 'ssrumaintltd'],
];

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html'];
const ignoredDirs = ['node_modules', '.next', '.git'];

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!ignoredDirs.includes(file)) {
        walkDir(fullPath);
      }
    } else if (stat.isFile() && extensions.includes(path.extname(file))) {
      let content;
      try {
        content = fs.readFileSync(fullPath, 'utf8');
      } catch (e) {
        return; // skip binary/locked files
      }
      let original = content;
      for (const [from, to] of replacements) {
        content = content.split(from).join(to);
      }
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Rebranded:', fullPath.replace(process.cwd() + path.sep, ''));
      }
    }
  });
}

console.log('Starting rebranding to SS Ruma International Ltd...');
walkDir(process.cwd());
console.log('Rebranding finished successfully.');
