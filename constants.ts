import { MonitorPlay, Lightbulb, BarChart3, Layers, Zap, Globe, Users, TrendingUp, Video, Share2, Image, Repeat } from "lucide-react";

export const NAVIGATION_LINKS = [
  { name: "The Struggle", href: "#why-us" },
  { name: "Approach", href: "#services" },
  { name: "Work", href: "#work" },
];

export const CLIENT_LOGOS = [
  { name: "Ali Abdaal", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/ali%20abdaal.jpg" },
  { name: "Chuff", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/chuff.jpg" },
  { name: "Futcrunch", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/futcrunch.jpg" },
  { name: "Harrison", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/harrison.jpg" },
  { name: "Jessers", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/jessers.webp" },
  { name: "Revolut", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/revolut%20circle.webp" },
  { name: "Seek Discomfort", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/seek%20discomfort.webp" },
  { name: "Surfshark", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/surfshark.webp" },
  { name: "The Marketing Friends", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/the%20marketing%20friends.jpeg" },
  { name: "Trip", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/trip.png" },
  { name: "V1", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/v1.png" },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Casey Neistat",
    category: "Viral Storytelling",
    views: "9M+ Subs",
    image: "https://picsum.photos/id/338/1080/1920", 
    client: "Creator",
    stat: "22M+ Views",
    link: "https://www.youtube.com/watch?v=jG7dSXcfVqE" // Example link
  },
  {
    id: 2,
    title: "MrBeast Gaming",
    category: "Retention Editing",
    views: "Viral Hit",
    image: "https://picsum.photos/id/1060/1080/1920", 
    client: "Entertainment",
    stat: "#1 Trending",
    link: "https://www.youtube.com/watch?v=0e3GPea1Tyg" // Example link
  },
  {
    id: 3,
    title: "Yes Theory",
    category: "Documentary",
    views: "9M+ Subs",
    image: "https://picsum.photos/id/870/1080/1920", 
    client: "Travel",
    stat: "Doc of the Year",
    link: "https://www.youtube.com/watch?v=okz5RIZq0tI" // Example link
  },
  {
    id: 4,
    title: "Nike x Skepta",
    category: "Commercial",
    views: "Ad Campaign",
    image: "https://picsum.photos/id/445/1080/1920", 
    client: "Brand",
    stat: "3.5% CTR",
    link: "https://www.youtube.com/watch?v=gAk7aX5hksU" 
  }
];

export const SERVICES_DATA = [
  {
    id: "01",
    title: "Creative Direction",
    description: "We shape content before it reaches the timeline. We refine structure, pacing, and flow for maximum performance.",
    tags: ["Structure", "Pacing"],
    icon: Lightbulb
  },
  {
    id: "02",
    title: "Consistency System",
    description: "We protect visual and editorial consistency across videos, formats, and brands, ensuring a cohesive identity.",
    tags: ["Identity", "Brand Safe"],
    icon: Repeat
  },
  {
    id: "03",
    title: "Retention Editing",
    description: "Engineered for watch time. We don't just edit; we engineer the viewer journey to keep them hooked.",
    tags: ["Editing", "Retention"],
    icon: Layers
  },
  {
    id: "04",
    title: "Short-Form Amp",
    description: "Turning one idea into multiple touchpoints. We extend core content into Shorts and Reels for maximum reach.",
    tags: ["Repurposing", "Vertical"],
    icon: Share2
  },
  {
    id: "05",
    title: "Thumbnail Strategy",
    description: "Click-worthy packaging that cuts through the noise and supports the broader distribution strategy.",
    tags: ["CTR", "Packaging"],
    icon: Image
  },
  {
    id: "06",
    title: "Strategic Consulting",
    description: "We advise on publishing consistency, formats, and performance-driven decisions grounded in platform data.",
    tags: ["Growth", "Advisory"],
    icon: Users
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Strategy",
    description: "Ideation & Roadmap"
  },
  {
    number: "02",
    title: "Execution",
    description: "Production & Direction"
  },
  {
    number: "03",
    title: "Amplification",
    description: "Distribution & Shorts"
  },
  {
    number: "04",
    title: "Growth",
    description: "Scale & Optimize"
  }
];