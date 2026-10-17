# RootsEco — Full Frontend Prototype

A multi-page corporate gifting website frontend built with Next.js App Router and JavaScript. Product/category content is data-driven so a backend/API can replace the local data layer later.

## Run locally
- Node.js 20+
- `npm install`
- `npm run dev`
- Open http://localhost:3000

## Frontend pages
- Home: `/`
- All products: `/products`
- Product detail: `/products/employee-welcome-kit`
- All categories: `/categories`
- Category/subcategory detail: `/categories/employee-welcome-kits`
- About: `/about`
- Solutions: `/solutions`
- Contact: `/contact`
- Request a quote: `/quote`
- Blog listing: `/blog`
- Blog detail: `/blog/corporate-gifting-planning-guide`

## Before production
1. Replace demo products and images with the client's approved product catalogue.
2. Confirm business address, phone, email, WhatsApp and delivery claims.
3. Replace `919999999999` in `src/lib/site.js` with the verified business WhatsApp number.
4. Connect quote/contact forms to a backend/CRM; current prototype opens a WhatsApp message.
5. Add admin authentication, database/API, validation, spam protection and consent-aware analytics.
6. Review metadata, canonical URLs, schema, sitemap and robots for the real domain.
7. Confirm which products/subcategories RootsEco actually supplies. Demo content is illustrative only.
