import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://magnusbyrkjeland.no",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
	];
}
