import type { CollectionEntry } from "astro:content";

type BlogPost = CollectionEntry<"blog">;

export function isPublished(post: BlogPost): boolean {
  const data = post.data as {
    draft?: boolean;
  };

  return data.draft !== true;
}