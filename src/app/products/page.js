"use client";
import { useMemo, useState } from "react";
import { products, categories } from "@/data/catalog";
import { ProductGrid } from "@/components/Cards";
import { PageHero, Breadcrumbs } from "@/components/Site";
import { QuoteBanner } from "@/components/Cards";

export default function ProductsPage() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    let list = products.filter(p => (category === "all" || p.category === category) && `${p.name} ${p.description} ${p.subcategory}`.toLowerCase().includes(query.toLowerCase()));
    if (sort === "name") list = [...list].sort((a,b)=>a.name.localeCompare(b.name));
    if (sort === "featured") list = [...list].sort((a,b)=>Number(b.featured)-Number(a.featured));
    return list;
  }, [category, query, sort]);
  return <main><PageHero eyebrow="THE ROOTSECO COLLECTION" title="Corporate gifts," emphasis="curated for you." description="Explore gifting ideas for employees, clients, events and seasonal moments. Share your brief for current availability, customisation and bulk pricing." image="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1300&q=85"/><div className="page-wrap"><Breadcrumbs items={[{label:"Products"}]}/><div className="catalog-toolbar"><div><span className="eyebrow">PRODUCT CATALOGUE</span><h2>Explore gift ideas <em>({filtered.length})</em></h2></div><input className="search-box" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products..."/><select className="sort-select" value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured first</option><option value="name">Name A–Z</option></select></div><div className="catalog-layout"><aside className="filter-panel"><h3>Categories</h3><button className={category==="all"?"filter-active":""} onClick={()=>setCategory("all")}>All products <span>{products.length}</span></button>{categories.map(c=><button key={c.slug} className={category===c.slug?"filter-active":""} onClick={()=>setCategory(c.slug)}>{c.name}<span>{products.filter(p=>p.category===c.slug).length}</span></button>)}<div className="filter-help"><b>Looking for something specific?</b><p>Tell us your budget, quantity and occasion.</p><a href="/quote">Request a quote ↗</a></div></aside><div className="catalog-results"><ProductGrid items={filtered}/></div></div></div><QuoteBanner/></main>;
}
