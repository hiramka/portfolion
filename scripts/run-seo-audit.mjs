import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const reportPath = path.join(root, 'seo-audit-report.txt');

const errors = [];
const passes = [];

function check(title, condition, detailIfError) {
  if (condition) {
    passes.push(`[PASS] ${title}`);
  } else {
    errors.push(`[FAIL] ${title}: ${detailIfError}`);
  }
}

// 1. Inspect index.html
const indexPath = path.join(root, 'index.html');
if (fs.existsSync(indexPath)) {
  const html = fs.readFileSync(indexPath, 'utf8');

  // Title tag
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const titleText = titleMatch ? titleMatch[1].trim() : '';
  check(
    'Page Title Tag',
    titleText.length >= 30 && titleText.length <= 80,
    `Title length is ${titleText.length} chars (expected 30-80). Found: "${titleText}"`
  );

  // Meta description
  const descMatch = html.match(/<meta\s+name="description"\s+content="(.*?)"/i);
  const descText = descMatch ? descMatch[1].trim() : '';
  check(
    'Meta Description',
    descText.length >= 70 && descText.length <= 200,
    `Description length is ${descText.length} chars (expected 70-200).`
  );

  // Canonical link
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="(.*?)"/i);
  check(
    'Canonical URL',
    Boolean(canonicalMatch && canonicalMatch[1]),
    'Missing canonical URL link tag'
  );

  // Robots meta tag
  const robotsMatch = html.match(/<meta\s+name="robots"\s+content="(.*?)"/i);
  check(
    'Robots Meta Tag',
    Boolean(robotsMatch && robotsMatch[1].includes('index')),
    'Missing or invalid robots meta tag'
  );

  // Open Graph meta tags
  check('Open Graph Title', html.includes('og:title'), 'Missing og:title tag');
  check('Open Graph Description', html.includes('og:description'), 'Missing og:description tag');
  check('Open Graph Image', html.includes('og:image'), 'Missing og:image tag');
  check('Open Graph URL', html.includes('og:url'), 'Missing og:url tag');

  // Twitter Card meta tags
  check('Twitter Card Type', html.includes('twitter:card'), 'Missing twitter:card tag');
  check('Twitter Card Title', html.includes('twitter:title'), 'Missing twitter:title tag');
  check('Twitter Card Image', html.includes('twitter:image'), 'Missing twitter:image tag');

  // Schema.org JSON-LD
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  if (jsonLdMatch && jsonLdMatch[1]) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      const hasGraph = Array.isArray(parsed['@graph']);
      check('Schema.org JSON-LD Structured Data', hasGraph, 'JSON-LD parsed but missing @graph array');
    } catch (err) {
      check('Schema.org JSON-LD Structured Data', false, `JSON-LD failed to parse: ${err.message}`);
    }
  } else {
    check('Schema.org JSON-LD Structured Data', false, 'Missing JSON-LD script tag');
  }
} else {
  errors.push('[FAIL] index.html missing');
}

// 2. Inspect sitemap.xml
const sitemapPath = path.join(root, 'public', 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  check('Sitemap XML Existence & Schema', sitemap.includes('<urlset') && sitemap.includes('https://ascendancysolutions.vercel.app/'), 'Invalid sitemap.xml format');
  check('Sitemap Image Extension Schema', sitemap.includes('sitemap-image'), 'Missing image extension schema in sitemap.xml');
} else {
  errors.push('[FAIL] sitemap.xml missing');
}

// 3. Inspect robots.txt
const robotsPath = path.join(root, 'public', 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  check('Robots.txt Crawl Directive', robots.includes('User-agent:') && robots.includes('Allow: /'), 'Missing basic crawling allowance in robots.txt');
  check('Robots.txt Sitemap Link', robots.includes('Sitemap:'), 'Missing Sitemap URL reference in robots.txt');
} else {
  errors.push('[FAIL] robots.txt missing');
}

// 4. Verify Single H1 across HeroSection.jsx
const heroPath = path.join(root, 'src', 'components', 'HeroSection.jsx');
if (fs.existsSync(heroPath)) {
  const heroCode = fs.readFileSync(heroPath, 'utf8');
  const h1Matches = heroCode.match(/<h1[\s>]/g) || [];
  check('Single H1 Tag in Hero', h1Matches.length === 1, `Found ${h1Matches.length} <h1> tags in HeroSection`);
}

// Generate Output Report
const reportContent = [
  '=== ASCENDANCY SOLUTIONS SEO AUDIT REPORT ===',
  `Generated at: ${new Date().toISOString()}`,
  '',
  '--- SUMMARY ---',
  `Passed Checks: ${passes.length}`,
  `Failed Checks: ${errors.length}`,
  '',
  '--- PASSES ---',
  ...passes,
  '',
  '--- FAILURES ---',
  ...(errors.length > 0 ? errors : ['None! All SEO checks passed successfully.'])
].join('\n');

fs.writeFileSync(reportPath, reportContent);
console.log(reportContent);

if (errors.length > 0) {
  process.exit(1);
} else {
  console.log('\n✅ SEO Audit Completed: All checks passed!');
}
