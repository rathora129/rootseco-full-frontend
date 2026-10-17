import { categories, products, blogPosts } from "@/data/catalog";
import { site } from "@/lib/site";
export default function sitemap(){
 const base=site.domain;
 return [
  {url:base,lastModified:new Date(),changeFrequency:"weekly",priority:1},
  ...["products","categories","about","solutions","contact","quote","blog"].map(p=>({url:`${base}/${p}`,lastModified:new Date(),changeFrequency:"weekly",priority:0.8})),
  ...categories.map(c=>({url:`${base}/categories/${c.slug}`,lastModified:new Date(),changeFrequency:"weekly",priority:0.7})),
  ...products.map(p=>({url:`${base}/products/${p.slug}`,lastModified:new Date(),changeFrequency:"weekly",priority:0.7})),
  ...blogPosts.map(p=>({url:`${base}/blog/${p.slug}`,lastModified:new Date(),changeFrequency:"monthly",priority:0.5}))
 ];
}
