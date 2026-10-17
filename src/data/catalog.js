export const categories = [
  {
    slug: "employee-welcome-kits", name: "Employee Welcome Kits",
    short: "Thoughtful first-day kits for new team members.",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1000&q=85",
    subcategories: ["Joining Kits", "Work From Home Kits", "Employee Appreciation Kits", "Premium Executive Kits"]
  },
  {
    slug: "eco-friendly-gifts", name: "Eco-friendly Gifts",
    short: "Reusable, practical gifts for considered brand experiences.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85",
    subcategories: ["Tote Bags", "Reusable Bottles", "Bamboo Products", "Plantable & Green Gifts"]
  },
  {
    slug: "bags-accessories", name: "Bags & Accessories",
    short: "Useful carry goods for teams, events and clients.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
    subcategories: ["Backpacks", "Laptop Sleeves", "Travel Bags", "Office Pouches"]
  },
  {
    slug: "apparel", name: "Apparel",
    short: "Branded apparel for teams and corporate events.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
    subcategories: ["T-shirts", "Hoodies", "Caps", "Corporate Uniforms"]
  },
  {
    slug: "electronics", name: "Electronics & Tech",
    short: "Modern tech essentials for work and travel.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85",
    subcategories: ["Power Banks", "Audio Accessories", "Desk Accessories", "Tech Gift Sets"]
  },
  {
    slug: "festive-hampers", name: "Festive Hampers",
    short: "Curated gifting for festive seasons and celebrations.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85",
    subcategories: ["Diwali Hampers", "New Year Gifts", "Chocolate Hampers", "Premium Gift Boxes"]
  },
  {
    slug: "branding-essentials", name: "Branding Essentials",
    short: "Custom branded essentials for events and everyday use.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    subcategories: ["ID Cards & Lanyards", "Notebooks & Diaries", "Pens & Stationery", "Visiting Cards"]
  },
  {
    slug: "custom-gift-boxes", name: "Custom Gift Boxes",
    short: "Packaging and gift combinations designed around your brand.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1000&q=85",
    subcategories: ["Rigid Boxes", "Kraft Packaging", "Premium Hampers", "Custom Packaging"]
  }
];

export const products = [
  { id:"p1", slug:"employee-welcome-kit", name:"Employee Welcome Kit", category:"employee-welcome-kits", subcategory:"Joining Kits", tag:"POPULAR", priceLabel:"Request a quote", description:"A considered first-day set with everyday work essentials, curated to introduce your brand to new team members.", image:"https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=85", gallery:["https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85"], features:["Custom branded packaging","Product combinations tailored to budget","Bulk quantity options","Suitable for onboarding and milestones"], minimumOrder:"To be confirmed", leadTime:"Confirm based on product and quantity", featured:true },
  { id:"p2", slug:"custom-eco-tote-bag", name:"Custom Eco Tote Bag", category:"eco-friendly-gifts", subcategory:"Tote Bags", tag:"ECO OPTION", priceLabel:"Request a quote", description:"Reusable tote bags that can be considered for events, employee kits and brand activations.", image:"https://images.unsplash.com/photo-1590870458799-9d7a6b5c5b8c?auto=format&fit=crop&w=1200&q=85", gallery:["https://images.unsplash.com/photo-1590870458799-9d7a6b5c5b8c?auto=format&fit=crop&w=1200&q=85"], features:["Branding options depend on material","Multiple styles may be available","Bulk enquiry support"], minimumOrder:"To be confirmed", leadTime:"Confirm during enquiry", featured:true },
  { id:"p3", slug:"branded-bottle-mug-set", name:"Branded Bottle & Mug Set", category:"eco-friendly-gifts", subcategory:"Reusable Bottles", tag:"CUSTOMISABLE", priceLabel:"Request a quote", description:"Everyday drinkware ideas for employee gifting, conferences and client appreciation.", image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=85", gallery:["https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=85"], features:["Custom branding options","Can be combined into a gift set","Bulk order enquiry"], minimumOrder:"To be confirmed", leadTime:"Confirm during enquiry", featured:true },
  { id:"p4", slug:"corporate-laptop-backpack", name:"Corporate Laptop Backpack", category:"bags-accessories", subcategory:"Backpacks", tag:"BUSINESS ESSENTIAL", priceLabel:"Request a quote", description:"Practical carry solutions for employees, leadership teams and business travel.", image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85", gallery:["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85"], features:["Style and capacity options","Branding subject to product","Suitable for welcome kits"], minimumOrder:"To be confirmed", leadTime:"Confirm during enquiry", featured:true },
  { id:"p5", slug:"branded-team-apparel", name:"Branded Team Apparel", category:"apparel", subcategory:"T-shirts", tag:"BRAND READY", priceLabel:"Request a quote", description:"Apparel options for teams, company events, activations and internal campaigns.", image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85", gallery:["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85"], features:["Sizes and colours to be confirmed","Branding options depend on garment","Bulk order support"], minimumOrder:"To be confirmed", leadTime:"Confirm during enquiry", featured:false },
  { id:"p6", slug:"workday-tech-essentials", name:"Workday Tech Essentials", category:"electronics", subcategory:"Tech Gift Sets", tag:"TECH GIFTS", priceLabel:"Request a quote", description:"Modern tech accessory ideas for workdays, employee milestones and business travel.", image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85", gallery:["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85"], features:["Product combinations can be discussed","Suitable for team and client gifts","Bulk enquiry support"], minimumOrder:"To be confirmed", leadTime:"Confirm during enquiry", featured:false },
  { id:"p7", slug:"festive-celebration-hamper", name:"Festive Celebration Hamper", category:"festive-hampers", subcategory:"Premium Gift Boxes", tag:"SEASONAL", priceLabel:"Request a quote", description:"Gift-ready hamper concepts for festive celebrations, employee recognition and client relationships.", image:"https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85", gallery:["https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85"], features:["Contents can vary by budget","Branding and note options to be confirmed","Seasonal availability applies"], minimumOrder:"To be confirmed", leadTime:"Seasonal lead times apply; confirm before order", featured:true },
  { id:"p8", slug:"id-cards-lanyards", name:"ID Cards & Lanyards", category:"branding-essentials", subcategory:"ID Cards & Lanyards", tag:"EVENT ESSENTIAL", priceLabel:"Request a quote", description:"Workplace and event essentials that help bring company identity into daily use.", image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85", gallery:["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"], features:["Design and specifications to be confirmed","Useful for events and onboarding","Bulk enquiry support"], minimumOrder:"To be confirmed", leadTime:"Confirm during enquiry", featured:false },
  { id:"p9", slug:"custom-rigid-gift-box", name:"Custom Rigid Gift Box", category:"custom-gift-boxes", subcategory:"Rigid Boxes", tag:"CUSTOM PACKAGING", priceLabel:"Request a quote", description:"Presentation packaging concepts for curated gift sets and branded corporate hampers.", image:"https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1200&q=85", gallery:["https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1200&q=85"], features:["Finishes and sizes to be confirmed","Custom artwork subject to production","Designed around the chosen gift set"], minimumOrder:"To be confirmed", leadTime:"Confirm during enquiry", featured:false },
  { id:"p10", slug:"custom-notebook-pen-set", name:"Custom Notebook & Pen Set", category:"branding-essentials", subcategory:"Notebooks & Diaries", tag:"OFFICE FAVOURITE", priceLabel:"Request a quote", description:"Classic stationery gift ideas for conferences, onboarding and client meetings.", image:"https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85", gallery:["https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85"], features:["Multiple formats may be available","Branding options depend on item","Can be paired with other gifts"], minimumOrder:"To be confirmed", leadTime:"Confirm during enquiry", featured:true },
  { id:"p11", slug:"green-desk-plant-gift", name:"Green Desk Plant Gift", category:"eco-friendly-gifts", subcategory:"Plantable & Green Gifts", tag:"GREEN GIFT", priceLabel:"Request a quote", description:"A desk-friendly plant gift concept for office celebrations and employee milestones.", image:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=85", gallery:["https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=85"], features:["Plant varieties depend on availability","Packaging to be confirmed","Suitable for selected gifting occasions"], minimumOrder:"To be confirmed", leadTime:"Confirm based on delivery location", featured:false },
  { id:"p12", slug:"premium-client-appreciation-box", name:"Premium Client Appreciation Box", category:"custom-gift-boxes", subcategory:"Premium Hampers", tag:"PREMIUM", priceLabel:"Request a quote", description:"A premium gifting direction for key clients, partners and important business milestones.", image:"https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85", gallery:["https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85"], features:["Contents curated to brief and budget","Branding and inserts to be confirmed","Bulk corporate enquiries welcome"], minimumOrder:"To be confirmed", leadTime:"Confirm during enquiry", featured:true }
];

export const solutions = [
  { slug:"employee-onboarding", title:"Employee onboarding", intro:"Make the first day memorable with a useful, on-brand welcome kit.", image:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85", points:["Welcome kits for new joiners","Workplace essentials","Custom packaging and inserts","Multi-location requirements can be discussed"] },
  { slug:"festive-corporate-gifting", title:"Festive corporate gifting", intro:"Plan seasonal gifting for teams, clients and partners with one coordinated brief.", image:"https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1200&q=85", points:["Diwali and festive hampers","New Year gifting","Budget-led collections","Seasonal timelines confirmed before order"] },
  { slug:"client-appreciation", title:"Client appreciation", intro:"Recognise relationships with considered gifts that reflect your brand.", image:"https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85", points:["Executive gift ideas","Custom branded items","Premium presentation options","Quantity and budget planning"] },
  { slug:"events-brand-merchandise", title:"Events & brand merchandise", intro:"Bring your company identity into events, conferences and team moments.", image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85", points:["Event giveaways","Branded apparel and stationery","Lanyards and accessories","Bulk requirement coordination"] }
];

export const blogPosts = [
  { slug:"corporate-gifting-planning-guide", category:"GUIDES", date:"Planning resource", title:"A practical guide to planning corporate gifting", excerpt:"A simple framework for matching gifting goals, audience, quantity and budget.", image:"https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85", content:["Start with the purpose: employee onboarding, client appreciation, a company milestone or a seasonal celebration.","Define the audience and estimated quantity early. This helps narrow down useful products and packaging choices.","Set a per-recipient budget and keep branding, packing and delivery requirements in the same brief.","Confirm product availability, artwork, samples where applicable and delivery timelines before approving a bulk order."] },
  { slug:"employee-welcome-kit-ideas", category:"IDEAS", date:"Gifting ideas", title:"What to include in an employee welcome kit", excerpt:"Ideas for building a useful first-day experience around your team's culture.", image:"https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=85", content:["Start with practical items employees can use regularly, such as a notebook, bottle, bag or desk accessory.","Include a welcome note and company information where appropriate.","Choose a kit size and packaging that works with your budget and delivery needs.","Ask your gifting partner to confirm product options and custom branding before finalising the kit."] },
  { slug:"festive-gifting-checklist", category:"CHECKLIST", date:"Seasonal planning", title:"Your corporate festive gifting checklist", excerpt:"What to prepare before seasonal gifting requests and deliveries begin.", image:"https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1200&q=85", content:["Estimate recipient count and delivery locations.","Choose a budget range and product direction.","Confirm branding files, gift messages and packaging.","Build in time for approvals, availability checks and dispatch planning."] }
];
