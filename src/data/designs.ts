export interface DesignItem {
  slug: string;
  title: string;
  image: string;
  images: string[];
  category: string; // e.g. "Kitchen", "Bedroom", "Living", "Wardrobe", "TV Unit", "Aluminium", "Office", "False Ceiling", "Doors & Windows", "Partitions"
  room: string; // e.g. "Kitchen", "Bedroom", "Living Room", "Office", "Bathroom", "Other"
  style: "Modern" | "Minimal" | "Contemporary" | "Luxury" | "Traditional" | "Industrial" | "Scandinavian";
  description: string;
  features: string[];
  materials: string[];
}

export const designs: DesignItem[] = [
  {
    slug: "aluminium-modular-kitchen-design",
    title: "Aluminium Modular Kitchen",
    image: "/images/Aluminium modular kitchen.jpeg",
    images: [
      "/images/Aluminium modular kitchen.jpeg",
      "/images/Modular kitchen.jpeg",
    ],
    category: "Kitchen",
    room: "Kitchen",
    style: "Luxury",
    description: "An elegant, moisture-resistant kitchen solution showcasing muted champagne-anodized aluminium frames and glossy composite panel doors.",
    features: [
      "Moisture-proof under-sink cabinets",
      "Soft-close tandem drawers with steel rails",
      "Integrated microwave and oven tall unit",
      "Ambient gold LED lighting strips"
    ],
    materials: [
      "Luxury anodized gold/bronze aluminium frames",
      "Metallic champagne ACP panels",
      "Calacatta gold quartz countertop"
    ]
  },
  {
    slug: "bedroom-interior-design",
    title: "Luxury Bedroom Interior",
    image: "/images/Bedroom-1interior.jpeg",
    images: [
      "/images/Bedroom-1interior.jpeg",
      "/images/Bedroom interior-2.jpeg",
      "/images/bedroom-design-1.jpeg",
      "/images/bedroom-design-2.jpeg",
      "/images/bedroom-design-3.jpeg",
    ],
    category: "Bedroom",
    room: "Bedroom",
    style: "Luxury",
    description: "A calming master bedroom layout mixing warm beige tones, a low-slung wooden platform bed, and clean sliding wardrobe panels.",
    features: [
      "Floating bed-side nightstands",
      "Textured linen-look wall panelling",
      "Warm recessed cove ceiling light",
      "Space-saving wall-mounted dresser vanity"
    ],
    materials: [
      "Premium white oak veneers",
      "Textured eco-friendly paints",
      "Linen fabric upholstered headboard"
    ]
  },
  {
    slug: "living-room-interior-design",
    title: "Living Room Interior",
    image: "/images/living-room-1.jpeg",
    images: [
      "/images/living-room-1.jpeg",
      "/images/living-room-2.jpeg",
    ],
    category: "Living",
    room: "Living Room",
    style: "Luxury",
    description: "High-end living space featuring a book-matched marble backdrop panel, matte black fluted accents, and low-profile warm beige lounge seating.",
    features: [
      "Backlit marble TV mounting console",
      "Slim profile metal louvers for zoning",
      "Designer recessed magnetic track lights",
      "Integrated wine cabinet with tinted glass"
    ],
    materials: [
      "Book-matched Italian marble slabs",
      "Matte black PVC fluted louvers",
      "Powder-coated slim aluminium glass framing"
    ]
  },
  {
    slug: "sliding-glass-partition-design",
    title: "Sleek Glass Sliding Partition",
    image: "/images/Sliding door and partition.jpeg",
    images: [
      "/images/Sliding door and partition.jpeg",
      "/images/aluminium-doors-windows-1.jpeg",
      "/images/aluminium-doors-windows-2.jpeg",
    ],
    category: "Partitions",
    room: "Living Room",
    style: "Modern",
    description: "Modern top-hung sliding glass doors with ultra-narrow black metal lines, separating the kitchen from the living area without blocking light.",
    features: [
      "Zero-threshold floor design (top-hung track)",
      "Hydraulic soft-close damping system",
      "Double-sided soundproof rubber gaskets",
      "Minimalist latch handles"
    ],
    materials: [
      "T6-grade architectural black anodized aluminium",
      "10mm clear toughened glass",
      "Heavy-duty steel roller rollers"
    ]
  },
  {
    slug: "office-interior-design",
    title: "Professional Office Workspace",
    image: "/images/office-interior-1.jpeg",
    images: [
      "/images/office-interior-1.jpeg",
      "/images/office-interior-2.jpeg",
      "/images/office-interior-3.jpeg",
    ],
    category: "Office",
    room: "Office",
    style: "Industrial",
    description: "An ergonomic executive cabin designed for productivity, mixing textured brick backdrops, metal shelves, and light oak desks.",
    features: [
      "Hidden cable-grid routing system under desk",
      "Magnetic pinboards and document shelving",
      "Acoustic paneling to reduce meeting echo",
      "Linear LED architectural hanging light"
    ],
    materials: [
      "Black powder-coated metal supports",
      "Textured brick wallpaper panels",
      "Natural finished light oak boards"
    ]
  },
  {
    slug: "tv-unit-console-design",
    title: "Modern TV Unit & Console",
    image: "/images/Tv unit and console-1.jpeg",
    images: [
      "/images/Tv unit and console-1.jpeg",
      "/images/Tv unit and console-2.jpeg",
    ],
    category: "TV Unit",
    room: "Living Room",
    style: "Contemporary",
    description: "A minimalist floating media console combined with wall panel textures and warm wood accents, designed for a modern uncluttered feel.",
    features: [
      "Push-to-open flush front drawers",
      "Concealed back-wire cable routing portals",
      "Floating shelves for soundbar and collectibles",
      "LED strip grooves for soft night illumination"
    ],
    materials: [
      "Moisture-proof HDMR board panels",
      "Micro-concrete wall coatings",
      "Premium walnut veneer borders"
    ]
  },
  {
    slug: "aluminium-wardrobe-design",
    title: "Aluminium Wardrobe",
    image: "/images/Aluminium wardrobe.jpeg",
    images: [
      "/images/Aluminium wardrobe.jpeg",
    ],
    category: "Wardrobe",
    room: "Bedroom",
    style: "Luxury",
    description: "Stunning bedroom wardrobe using bronze tinted glass doors and custom internal organizers, lit beautifully by vertical LED profiles.",
    features: [
      "Auto-switch internal sensor LED lights",
      "Dedicated velvet felt jewelry slots",
      "Sliding leather trouser racks",
      "Extra tall doors matching ceiling heights"
    ],
    materials: [
      "Extruded bronze-anodized aluminium frames",
      "8mm toughened bronze tinted glass",
      "Eco-leather drawers and partitions"
    ]
  },
  {
    slug: "guest-house-interior-design",
    title: "Guest House Interior",
    image: "/images/Guest House design-.jpeg",
    images: [
      "/images/Guest House design-.jpeg",
      "/images/Guest House design.jpeg",
    ],
    category: "Living",
    room: "Living Room",
    style: "Contemporary",
    description: "Multi-room guest house design with premium comfortable furnishings, standardized layouts, and low-maintenance materials for hospitality use.",
    features: [
      "Standardized space layouts across rooms",
      "Durable, low-maintenance material selection",
      "Modular storage wardrobes and dressers",
      "Comfortable common lounge seating plans"
    ],
    materials: [
      "High-pressure laminate (HPL) boards",
      "Toughened glass partition screens",
      "Sturdy powder-coated metal framing"
    ]
  }
];
