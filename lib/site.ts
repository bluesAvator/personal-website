export const site = {
  name: "Mara Chen",
  tagline: "Documentary and portrait photography",
  email: "hello@marachen.studio",
} as const

/** Replace these URLs with your own image files (see README). */
export const placeholderImages = {
  hero: {
    src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=2400&q=80",
    alt: "Soft light on a camera lens — placeholder hero",
    note: "lib/site.ts → placeholderImages.hero",
  },
  portrait: {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    alt: "Portrait in natural light — placeholder",
    note: "lib/site.ts → placeholderImages.portrait",
  },
} as const

export const gallery = [
  {
    id: "01",
    title: "Morning commute",
    category: "Street",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80",
    note: "lib/site.ts → gallery[0]",
  },
  {
    id: "02",
    title: "Quiet room",
    category: "Interior",
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
    note: "lib/site.ts → gallery[1]",
  },
  {
    id: "03",
    title: "Coastline",
    category: "Landscape",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    note: "lib/site.ts → gallery[2]",
  },
  {
    id: "04",
    title: "Studio session",
    category: "Portrait",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
    note: "lib/site.ts → gallery[3]",
  },
  {
    id: "05",
    title: "City after rain",
    category: "Street",
    src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80",
    note: "lib/site.ts → gallery[4]",
  },
  {
    id: "06",
    title: "Golden hour",
    category: "Landscape",
    src: "https://picsum.photos/seed/mara-06/1600/1200",
    note: "lib/site.ts → gallery[5]",
  },
] as const

export const pricingTiers = [
  {
    name: "Portrait session",
    price: "$450",
    description: "Two hours on location or in studio, one subject.",
    includes: ["20 edited images", "Online gallery", "Print release"],
  },
  {
    name: "Half-day editorial",
    price: "$1,200",
    description: "Up to four hours for brands, events, or stories.",
    includes: ["Full usage license", "50+ edited images", "Shot list planning call"],
    featured: true,
  },
  {
    name: "Full-day documentary",
    price: "$2,400",
    description: "A full day following your project or celebration.",
    includes: ["Two photographers optional", "100+ edited images", "Priority delivery"],
  },
] as const

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const
