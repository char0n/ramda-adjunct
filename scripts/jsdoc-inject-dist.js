'use strict';

const path = require('path');
const fs = require('fs');

const pkg = require(path.join(__dirname, '..', 'package.json')); // eslint-disable-line import/no-dynamic-require

const rootPath = path.join(__dirname, '..');
const raWebStandaloneName = 'RA.web.standalone.min.js';
const pkgVersion = pkg.version;
const docsPath = path.join(rootPath, 'docs', 'ramda-adjunct', pkgVersion);
const docsScriptsPath = path.join(docsPath, 'scripts');
const distPath = path.join(rootPath, 'dist');
const raWebStandaloneDistPath = path.join(distPath, raWebStandaloneName);
const raWebStandaloneDocsPath = path.join(docsScriptsPath, raWebStandaloneName);
const docsIndexFile = path.join(docsPath, 'index.html');

// Copy RA.web.standalone.js to docs/scripts.
fs.writeFileSync(raWebStandaloneDocsPath, fs.readFileSync(raWebStandaloneDistPath));

// Append RA into docs template.
const html = fs.readFileSync(docsIndexFile, 'utf-8');
const raHtmlFragment = `    <script src="scripts/${raWebStandaloneName}"></script>\n`;
const htmlWithRA = html.replace('</head>', `${raHtmlFragment}</head>`);
fs.writeFileSync(docsIndexFile, htmlWithRA);
