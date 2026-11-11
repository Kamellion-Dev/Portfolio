import { mkdir, writeFile, cp, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { homePage, projectPage } from '../site/render.mjs';
import { projects, owner } from '../site/content.mjs';

const root=resolve(import.meta.dirname,'..');
const output=resolve(root,'_site');
// Only this fixed build directory is replaced. Never remove arbitrary paths.
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
await writeFile(resolve(output,'index.html'),homePage());
for(const project of projects){
  const folder=resolve(output,'projects',project.slug);
  await mkdir(folder,{recursive:true});
  await writeFile(resolve(folder,'index.html'),projectPage(project));
}
for(const path of ['assets/css/portfolio.css','assets/js/portfolio.js','assets/images/portfolio/portrait.png','assets/images/portfolio/favicon.svg','assets/images/portfolio/social-preview.png',owner.resume,'sw.js']){
  const target=resolve(output,path);
  await mkdir(resolve(target,'..'),{recursive:true});
  await cp(resolve(root,path),target,{recursive:true});
}
await writeFile(resolve(output,'.nojekyll'),'');
await writeFile(resolve(output,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${owner.site}sitemap.xml\n`);
await writeFile(resolve(output,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['',...projects.map(p=>`projects/${p.slug}/`)].map(path=>`<url><loc>${owner.site}${path}</loc></url>`).join('')}</urlset>`);
// The root is a generated convenience preview; site/ is the editable source.
await writeFile(resolve(root,'index.html'),homePage());
console.log(`Built ${projects.length+1} static pages in _site. No runtime dependencies.`);
