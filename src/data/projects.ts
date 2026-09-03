export interface ShowcaseRoom {
  room: string;
  image: string;
  desc: string;
}

export interface BeforeAfterPair {
  before: string;
  after: string;
  title: string;
}

export interface Project {
  slug: string;
  title: string;
  type: string;
  location: string;
  image: string;
  images: string[];
  services: string[];
  overview: string;
  approach: string;
  showcaseRooms: ShowcaseRoom[];
  beforeAfter?: BeforeAfterPair;
}

export const projects: Project[] = [
  {
    slug: "modern-office-cuttack",
    title: "Corporate Workspace Hub",
    type: "Commercial Office",
    location: "Cuttack, Odisha",
    services: ["Office Interior", "Sliding Doors & Partitions", "False Ceiling"],
    image: "/images/office-interior-1.jpeg",
    images: [
      "/images/office-interior-1.jpeg",
      "/images/office-interior-2.jpeg",
      "/images/office-interior-3.jpeg",
    ],
    overview: "A modern tech office layout utilizing heavy-duty aluminium glass walls to keep the floor plan acoustic yet visually open and collaborative.",
    approach: "Designed around collaborative work zones, this layout maximizes natural light flow through top-hung sliding metal frames, matched with clean acoustic ceiling panels.",
    showcaseRooms: [
      {
        room: "Conference Hall",
        image: "/images/office-interior-1.jpeg",
        desc: "Equipped with custom multi-point wiring channels and glass boundaries for sound insulation."
      }
    ],
    beforeAfter: {
      before: "/images/wall-panelling-2.jpeg",
      after: "/images/office-interior-1.jpeg",
      title: "Unfinished Workspace to Premium Office Cabin"
    }
  },
  {
    slug: "luxury-apartment-bhubaneswar",
    title: "Premium 3BHK Apartment Interior",
    type: "Residential Apartment",
    location: "Bhubaneswar, Odisha",
    services: ["Modular Kitchen", "Bedroom Interior", "False Ceiling", "TV Unit"],
    image: "/images/Bedroom-1interior.jpeg",
    images: [
      "/images/Aluminium modular kitchen.jpeg",
      "/images/Bedroom-1interior.jpeg",
      "/images/Tv unit and console-1.jpeg",
    ],
    overview: "This residential project represents an executive family home focusing on space optimization and luxury detailing. It integrates high-gloss acrylic modular kitchens and warm wooden wall cladding in the living spaces.",
    approach: "We used a modern ivory and bronze color scheme to maximize light bounce inside the apartment. Glass sliding partitions were introduced to demarcate the kitchen area while maintaining visual flow.",
    showcaseRooms: [
      {
        room: "Bedroom",
        image: "/images/Bedroom-1interior.jpeg",
        desc: "A spacious bedroom layout with warm ambient cove lighting, custom wardrobe integration, and upholstered headboard panel."
      },
      {
        room: "Modular Kitchen",
        image: "/images/Aluminium modular kitchen.jpeg",
        desc: "An ergonomic parallel layout featuring aluminium cabinets and durable quartz kitchen countertops."
      }
    ],
    beforeAfter: {
      before: "/images/wall-panelling-2.jpeg",
      after: "/images/Aluminium modular kitchen.jpeg",
      title: "Kitchen Transformation"
    }
  },
  {
    slug: "guest-house-design-project",
    title: "Premium Guest House Interiors",
    type: "Hospitality",
    location: "Odisha",
    services: ["Guest House Design", "Bedroom Interior", "False Ceiling", "Cupboard & Storage"],
    image: "/images/Guest House design-.jpeg",
    images: [
      "/images/Guest House design-.jpeg",
      "/images/Guest House design.jpeg",
    ],
    overview: "A complete turnkey guest house interior with multiple rooms, each designed for comfort, hygiene, and premium guest experience.",
    approach: "Standardized layouts with durable, low-maintenance materials, warm lighting, and smart storage solutions throughout all rooms.",
    showcaseRooms: [
      {
        room: "Guest Room",
        image: "/images/Guest House design-.jpeg",
        desc: "Well-lit, cozy guest room with optimized storage, clean finishes, and comfortable furnishings."
      },
      {
        room: "Common Area",
        image: "/images/Guest House design.jpeg",
        desc: "Welcoming lounge and common area with modern seating and ambient lighting."
      }
    ]
  }
];
