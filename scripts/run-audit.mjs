import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const reportPath = path.join(root, 'audit-report.txt');

const checks = [
  'Accessibility: Verify contrast, focus states, semantic headings and keyboard navigation.',
  'Performance: Verify Lighthouse performance budgets and image/resource loading.',
  'Monitoring: Confirm Sentry or equivalent production error reporting is configured.',
  'Rollout: Confirm env contracts, staging/prod separation, and CI checks are enforced.',
];

fs.writeFileSync(reportPath, checks.join('\n'));
console.log(`Accessibility and performance audit checklist generated at ${reportPath}`);
console.log(checks.join('\n'));
