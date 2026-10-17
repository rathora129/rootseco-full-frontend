import Link from "next/link";
import { categories, products, solutions, blogPosts } from "@/data/catalog";
import { ProductGrid, CategoryCard, SolutionCard, BlogCard, QuoteBanner, WhatsAppButton } from "@/components/Cards";
import { SectionHeading } from "@/components/Site";

export default function HomePage() {
  const featured = products.filter(p => p.featured).slice(0, 4);
  return <main>
    <section className="home-hero">
      <div className="hero-copy"><span className="eyebrow">CORPORATE GIFTING, THOUGHTFULLY DONE</span><h1>Make every gift<br/><em>mean something.</em></h1><p>Thoughtfully curated gifts for employees, clients and partners — shaped around your occasion, your people and your brand.</p><div className="hero-actions"><Link className="btn btn-primary" href="/products">Explore products ↗</Link><Link className="btn btn-outline" href="/quote">Plan a bulk order</Link></div><div className="hero-points"><span>✓ Custom branding</span><span>✓ Bulk order support</span><span>✓ Gifting for every occasion</span></div></div>
      <div className="hero-art"><img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1400&q=90" alt="Thoughtfully presented corporate gift box"/><div className="floating-note"><small>THE ROOTSECO APPROACH</small><strong>Thoughtful by design.<br/>Memorable by nature.</strong></div><div className="hero-stamp">GIFTS<br/>WITH<br/>PURPOSE</div></div>
    </section>
    <div className="benefit-strip"><div><span>✳</span><b>Curated gift ideas</b><small>For every business occasion</small></div><div><span>♧</span><b>Custom branding</b><small>Make it your own</small></div><div><span>▧</span><b>Bulk order support</b><small>From brief to delivery plan</small></div><div><span>♡</span><b>Personal touch</b><small>Gifts that build connection</small></div></div>
    <section className="section"><SectionHeading eyebrow="SHOP BY COLLECTION" title="Find the right gift" emphasis="for every team." description="Explore curated categories and discover gifting ideas for your next business moment." link="/categories"/><div className="category-grid">{categories.slice(0,4).map(c=><CategoryCard key={c.slug} category={c}/>)}</div></section>
    <section className="section section-soft"><SectionHeading eyebrow="FEATURED GIFT IDEAS" title="Considered gifts," emphasis="beautifully presented." description="A starting point for your gifting brief. Product details and customisation can be confirmed with our team." link="/products"/><ProductGrid items={featured}/></section>
    <section className="section"><SectionHeading eyebrow="MADE FOR YOUR MOMENTS" title="Gifting solutions" emphasis="for business." description="From onboarding to festive celebrations, build a gifting experience around the people who matter." link="/solutions"/><div className="solution-grid">{solutions.map(s=><SolutionCard key={s.slug} solution={s}/>)}</div></section>
    <section className="story-band"><div className="story-image"><img src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1100&q=85" alt="Gift packaging and hamper inspiration"/></div><div className="story-copy"><span className="eyebrow">A LITTLE MORE THOUGHT GOES A LONG WAY</span><h2>It’s not just a gift.<br/><em>It’s how you make people feel.</em></h2><p>Great corporate gifting starts with understanding the moment. We help you explore useful products, thoughtful combinations and brand details that make the experience feel considered.</p><Link className="text-link" href="/about">Get to know RootsEco ↗</Link></div></section>
    <section className="section section-soft"><SectionHeading eyebrow="FROM THE GIFTING DESK" title="Ideas to help you" emphasis="plan better." description="Practical starting points for your next gifting project." link="/blog"/><div className="blog-grid">{blogPosts.slice(0,3).map(p=><BlogCard key={p.slug} post={p}/>)}</div></section>
    <QuoteBanner/>
  </main>;
}
