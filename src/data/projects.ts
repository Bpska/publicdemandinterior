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
    image: "/images/corporate-workspace-hub.jpg",
    images: [
      "/images/corporate-workspace-hub.jpg",
      "/images/office-interior-2.jpeg",
      "/images/office-interior-3.jpeg",
    ],
    overview: "A prestigious executive cabin and commercial workspace featuring sculpted 3D acoustic wave panels, luxury curved executive seating, and integrated cable concealment.",
    approach: "Designed around ergonomic workflow and executive presence. Incorporates soft indirect lighting, horizontal daylight venetian blinds, and seamless concealed wire grids.",
    showcaseRooms: [
      {
        room: "Executive Cabin",
        image: "/images/corporate-workspace-hub.jpg",
        desc: "Equipped with sculpted wave acoustic wall relief, executive workstation with concealed channels, and designer velvet armchairs."
      }
    ],
    beforeAfter: {
      before: "/images/bedroom-design-4.jpeg",
      after: "/images/corporate-workspace-hub.jpg",
      title: "Workspace Transformation"
    }
  },
  {
    slug: "luxury-apartment-bhubaneswar",
    title: "Premium 3BHK Apartment Interior",
    type: "Residential Apartment",
    location: "Bhubaneswar, Odisha",
    services: ["Modular Kitchen", "Bedroom Interior", "Living Room Interior", "Cupboard & Storage"],
    image: "/images/premium-3bhk-apartment-interior.jpg",
    images: [
      "/images/premium-3bhk-apartment-interior.jpg",
      "/images/living-room-interior.jpg",
      "/images/cupboard-and-storage.jpg",
      "/images/Bedroom-1interior.jpeg",
      "/images/Aluminium modular kitchen.jpeg",
    ],
    overview: "A comprehensive turnkey 3BHK residential interior design featuring an open-concept living and dining hall, an island modular kitchen, a master bedroom with walk-in closet, and secondary bedrooms.",
    approach: "We implemented an optimized 3D architectural floor plan maximizing natural ventilation, seamless flow between culinary and living areas, and custom built-in cupboard storage solutions.",
    showcaseRooms: [
      {
        room: "3BHK Complete Spatial Layout Plan",
        image: "/images/premium-3bhk-apartment-interior.jpg",
        desc: "3D top-down isometric layout showcasing living room, 8-seater dining area, island kitchen, master bedroom with walk-in wardrobe, and guest rooms."
      },
      {
        room: "Living & Lounge Area",
        image: "/images/living-room-interior.jpg",
        desc: "Curved luxury sofa layout with layered circular ceiling cove lighting and minimalist fluted accents."
      },
      {
        room: "Master Bedroom & Storage",
        image: "/images/cupboard-and-storage.jpg",
        desc: "Floor-to-ceiling built-in cupboard with display shelving, gold handles, and illuminated organizers."
      },
      {
        room: "Modular Kitchen",
        image: "/images/Aluminium modular kitchen.jpeg",
        desc: "An ergonomic layout featuring moisture-proof aluminium cabinets and durable quartz kitchen countertops."
      }
    ],
    beforeAfter: {
      before: "/images/after-public-demand.jpg",
      after: "/images/premium-3bhk-apartment-interior.jpg",
      title: "3BHK Apartment Transformation"
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
