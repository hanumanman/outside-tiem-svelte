export async function load({ fetch, params }) {
	const { chapterNumber, storyId } = params;
	const res = await fetch(`https://blackbook.cyclic.cloud/${storyId}/${chapterNumber}`);
	const chapter = await res.json();
	return { content: chapter.content, chapter: chapter.chapter_number, storyId: parseInt(storyId) };
}
