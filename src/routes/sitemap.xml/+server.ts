import { base } from '$app/paths';

// Written to build/sitemap.xml at build time. Submit it in Google Search Console.
export const prerender = true;
export const trailingSlash = 'never';

const origin = 'https://ndwu2.github.io';

// Every +page.svelte under src/routes, so new pages are picked up automatically.
const pages = Object.keys(import.meta.glob('/src/routes/**/+page.svelte')).map((file) =>
	file.replace('/src/routes', '').replace('+page.svelte', '')
);

export function GET() {
	const urls = pages.map((path) => `\t<url><loc>${origin}${base}${path}</loc></url>`).join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
