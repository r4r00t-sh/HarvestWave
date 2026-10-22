export const navLinks = [
  { href: "/#top", id: "top", label: "Home" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#products", id: "products", label: "Products" },
  { href: "/#principles", id: "principles", label: "Principles" },
  { href: "/#approach", id: "approach", label: "Approach" },
] as const;

export const aboutTabs = [
  {
    id: "company",
    label: "The company",
    body: "Harvest Wave is an agricultural products brand inspired by the natural richness of Kerala, India, and by the opportunity to connect agricultural products with markets around the world. The company is committed to quality-conscious business practices, professional relationships, and the movement of agricultural products toward new opportunities.",
  },
  {
    id: "name",
    label: "The name",
    body: "Harvest reflects agriculture, nature, cultivation, and the value of the land. Wave represents movement, connection, expansion, and the flow of opportunities across markets. Together, the name expresses a vision of bringing agricultural products and business opportunities closer together.",
  },
  {
    id: "heritage",
    label: "Heritage",
    body: "Kerala is widely associated with agricultural landscapes, tropical crops, and a long history of spice cultivation and trade. That heritage is the foundation for a brand that looks outward, seeking connections between agricultural products and broader business opportunities.",
  },
  {
    id: "outlook",
    label: "Outlook",
    body: "Agricultural products connect regions and markets. Harvest Wave’s vision is to build connections beyond local markets while keeping a clear appreciation for the origins and characteristics of the products involved. The long-term aim is a recognizable, trusted brand with a strong identity and professional business practices.",
  },
] as const;

export const products = [
  {
    src: "/images/spices.jpg",
    alt: "Whole and ground spices arranged on a light wooden surface",
    title: "Spices",
    body: "An important part of culinary traditions, valued for aroma, flavour, and versatility. Enquiries can concern a particular spice, a specification, or a market requirement.",
  },
  {
    src: "/images/rice.jpg",
    alt: "A close view of uncooked rice grains",
    title: "Grains",
    body: "A fundamental part of food systems and agricultural commerce. Grain enquiries are discussed according to the characteristics and application a business has in mind.",
  },
  {
    src: "/images/lentils.jpg",
    alt: "A bowl of chickpeas, one of the pulses used in food markets",
    title: "Pulses",
    body: "Pulses contribute to diverse food cultures and commodity markets. Harvest Wave welcomes discussion of pulse requirements and the context of each enquiry.",
  },
  {
    src: "/images/spices2.jpg",
    alt: "Metal bowls of dried spices and seeds at a spice stall",
    title: "Other produce",
    body: "Other agricultural products represent further ways to meet the varying requirements of businesses and customers. Each category is considered on its own terms.",
  },
] as const;

export const principles = [
  {
    title: "Quality",
    body: "Agricultural products vary by origin, character, handling, and intended use. Harvest Wave takes product requirements seriously and treats accurate communication as part of quality.",
  },
  {
    title: "Integrity",
    body: "Trust comes from honest communication, clear expectations, and professional conduct. Relationships depend on transparency and a shared commitment to responsible business.",
  },
  {
    title: "Reliability",
    body: "Reliability shows up in communication, coordination, and attention to detail: understanding what a partner needs and setting expectations before work proceeds.",
  },
  {
    title: "Partnership",
    body: "Trade brings together producers, suppliers, traders, distributors, and buyers. Harvest Wave looks for shared objectives and mutual value, not a one-sided transaction.",
  },
] as const;

export const steps = [
  {
    index: "01",
    title: "Understand the requirement",
    body: "Every enquiry has its own context: a product category, a market need, a commercial opportunity, or a possible partnership.",
  },
  {
    index: "02",
    title: "Communicate clearly",
    body: "Specifications, commercial terms, and other requirements are discussed according to the needs of that enquiry, without assumption.",
  },
  {
    index: "03",
    title: "Explore suitable opportunities",
    body: "Where there is a fit, Harvest Wave looks for a practical way to connect the product interest with the business opportunity.",
  },
  {
    index: "04",
    title: "Build the relationship",
    body: "Collaboration rests on trust, mutual understanding, and a professional approach to the work that follows.",
  },
] as const;

export const interests = [
  "Spices",
  "Grains",
  "Pulses",
  "Other agricultural produce",
  "Sourcing or distribution",
  "A potential partnership",
] as const;

export const companyLinks = [
  { href: "/#about", label: "About" },
  { href: "/#principles", label: "Principles" },
  { href: "/#approach", label: "Approach" },
  { href: "/#contact", label: "Enquiry" },
] as const;

export const productLinks = [
  { href: "/#products", label: "Spices" },
  { href: "/#products", label: "Grains" },
  { href: "/#products", label: "Pulses" },
  { href: "/#products", label: "Other produce" },
] as const;

export const visitLinks = [
  { href: "/#heritage", label: "Kerala inspiration" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;
