export interface ImageMeta {
	meta: {
		src: string;
		width: number;
		height: number;
	};
	alt: string;
}

export interface TermInfo {
	term_id: number;
	name: string;
	slug: string;
	term_group: number;
	term_taxonomy_id: number;
	taxonomy: string;
	description: string;
	parent: number;
	count: number;
	filter: string;
}

export interface Statistics {
	label: string;
	value: string;
	counter: number;
}
export interface PageProps<T extends object = any> {
	params?: Promise<SegmentParams<T>>;
	searchParams?: Promise<SegmentParams<T>>;
}
type SegmentParams<T extends object = any> = T extends Record<string, any>
	? {
			[K in keyof T]: T[K] extends string
				? string | string[] | undefined
				: never;
	  }
	: T;

export interface SEOData {
	base_url: string;
	// Meta Tags
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	meta_robots: string;
	canonical_url?: string;

	// Open Graph
	og_title: string;
	og_description: string;
	og_image: string;
	og_type: string;
	og_locale: string;

	// Twitter Card
	twitter_card_type: string;
	twitter_title: string;
	twitter_description: string;
	twitter_image: string;

	// Schema
	schema_type: string;
	schema_page_type: string;
	schema_article_type: string;

	// Additional SEO
	focus_keyword: string;
	secondary_keywords: string;
	breadcrumb_title: string;
	sitemap_priority: string;
	sitemap_changefreq: string;
}

export interface PageDetails {
	id: number;
	title: string;
	status: string;
	slug: string;
	excerpt: string;
	content: string;
	sub_title?: string;
	featured_image?: ImageMeta;
	seo: SEOData;
	created_at: string;
}

export interface PDFsInfo {
	file: string;
	title?: string;
	date: string;
}
