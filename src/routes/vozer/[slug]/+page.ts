/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
	const res = await fetch(`https://blackbook.cyclic.cloud/2/${params.slug}`);
	const chapter = await res.json();
	return { content: chapter.content, chapter: chapter.chapter_number };
}
