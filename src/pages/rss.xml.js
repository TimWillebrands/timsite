import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const writings = await getCollection('writing');
	const works = await getCollection('work');
	const posts = writings.map((writing) => ({
		...writing.data,
		link: `/writing/${writing.id}/`,
	})).concat(works.map((work) => ({
		...work.data,
		link: `/work/${work.id}/`,
	})));

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts,
	});
}
