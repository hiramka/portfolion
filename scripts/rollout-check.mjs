import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredFiles = [
  '.env.example',
  'package.json',
  'vite.config.js',
  'vercel.json',
  'src/config/env.js',
];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length > 0) {
  console.error('Rollout check failed: missing required files');
  console.error(missing.join('\n'));
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const requiredScripts = ['test', 'build', 'lint', 'rollout:check'];
const missingScripts = requiredScripts.filter((script) => !pkg.scripts?.[script]);

if (missingScripts.length > 0) {
  console.error('Rollout check failed: missing required scripts');
  console.error(missingScripts.join('\n'));
  process.exit(1);
}

console.log('Rollout checks passed. Production contract and required tooling are in place.');
