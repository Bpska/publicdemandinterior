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
    title: "Luxury Aluminium Modular Kitchen",
    image: "/images/luxury-modular-kitchen-fluted.jpg",
    images: [
      "/images/luxury-modular-kitchen-fluted.jpg",
      "/images/Aluminium modular kitchen.jpeg",
    ],
    category: "Kitchen",
    room: "Kitchen",
    style: "Luxury",
    description: "An elegant, moisture-resistant kitchen solution showcasing fluted glass upper cabinets with warm interior illumination, gold hardware handles, built-in appliances, and sleek durable cabinetry.",
    features: [
      "Fluted glass upper display cabinets with integrated vertical LED warm lighting",
      "Full-height gold hardware pull handles and soft-close drawers",
      "Moisture-proof, termite-resistant base cabinetry structure",
      "Integrated cooktop and built-in microwave and refrigerator tall unit",
      "Calacatta quartz countertop and seamless backsplash"
    ],
    materials: [
      "Luxury champagne anodized aluminium frames & profiles",
      "Fluted tempered glass display doors",
      "High-density moisture-resistant composite panels",
      "Calacatta gold engineered quartz countertop"
    ]
  },
  {
    slug: "bedroom-interior-design",
    title: "Luxury Bedroom Interior",
    image: "/images/modern-bedroom-interior.jpg",
    images: [
      "/images/modern-bedroom-interior.jpg",
      "/images/luxury-master-bedroom-suite-1.jpg",
      "/images/luxury-master-bedroom-cove.jpg",
      "/images/Bedroom-1interior.jpeg",
      "/images/Bedroom interior-2.jpeg",
      "/images/bedroom-design-4.jpeg",
    ],
    category: "Bedroom",
    room: "Bedroom",
    style: "Luxury",
    description: "A calming contemporary master bedroom featuring an olive green channel-tufted headboard, arched backlit wall niche with circular geometric art, floating bedside nightstands, and vertical fluted acoustic wall paneling.",
    features: [
      "Channel-tufted olive green upholstered headboard with wooden platform base",
      "Arched recessed wall niche with indirect warm LED backlight and geometric art",
      "Dual floating bedside tables with integrated dual-drop pendant lights",
      "Vertical fluted acoustic wall paneling for texture and sound dampening",
      "Recessed ceiling cove lighting with modern wooden blade fan"
    ],
    materials: [
      "High-density olive green velvet and linen upholstery",
      "Warm natural finish oak wood veneer",
      "Textured matte acrylic wall coatings",
      "Warm 3000K silicone diffuser LED profile strips",
      "Brushed brass pendant lamp fixtures"
    ]
  },
  {
    slug: "living-room-interior-design",
    title: "Living Room Interior",
    image: "/images/living-room-interior.jpg",
    images: [
      "/images/living-room-interior.jpg",
      "/images/luxury-living-room-fireplace.jpg",
      "/images/luxury-living-room-wave.jpg",
    ],
    category: "Living",
    room: "Living Room",
    style: "Luxury",
    description: "Ultra-luxury living room featuring curved modular cream seating, sculpted swirl ceiling cove lighting, fluted wall panelling with brass sconces, and an elegant oval coffee table.",
    features: [
      "Curved bespoke modular sectional sofa",
      "Layered concentric oval ceiling cove lighting",
      "Minimalist fluted backdrop with designer wall sconces",
      "Floor-to-ceiling sheer drapery with soft natural illumination"
    ],
    materials: [
      "High-density cream boucle upholstery fabric",
      "Brushed brass and marble coffee table surfaces",
      "Premium matte architectural wall moldings"
    ]
  },
  {
    slug: "sliding-glass-partition-design",
    title: "Aesthetic Glass & Wood Partitions",
    image: "/images/Sliding door and partition.jpeg",
    images: [
      "/images/Sliding door and partition.jpeg",
      "/images/aesthetic-sliding-glass-partition.jpg",
      "/images/aesthetic-wood-glass-partition.jpg",
      "/images/aesthetic-metal-glass-partition.jpg",
    ],
    category: "Partitions",
    room: "Other",
    style: "Modern",
    description: "Modern architectural glass partitions, fluted acoustic room dividers, and black aluminium sliding panels creating elegant transitions between living, dining, and workspace zones.",
    features: [
      "Zero-threshold floor track for seamless transition",
      "Fluted privacy glass with soft light transmission",
      "Slim architectural black aluminium frame profiles",
      "Hydraulic soft-close damping system and acoustic edge seals"
    ],
    materials: [
      "T6-grade architectural anodized aluminium",
      "10mm fluted and clear toughened safety glass",
      "High-durability stainless steel roller system"
    ]
  },
  {
    slug: "office-interior-design",
    title: "Professional Office Workspace",
    image: "/images/corporate-workspace-hub.jpg",
    images: [
      "/images/corporate-workspace-hub.jpg",
      "/images/false-ceiling-1.jpeg",
      "/images/false-ceiling-2.jpeg",
      "/images/office-interior-2.jpeg",
      "/images/office-interior-3.jpeg",
    ],
    category: "Office",
    room: "Office",
    style: "Luxury",
    description: "An ergonomic executive cabin designed for productivity and prestige, featuring a sculpted wave-relief acoustic wall, curved executive swivel armchairs, and premium desk architecture.",
    features: [
      "Sculpted wave relief 3D backdrop paneling",
      "Ergonomic curved executive swivel armchairs",
      "Concealed wire-routing cable raceways in executive desk",
      "Linear daylight control with horizontal blinds"
    ],
    materials: [
      "Textured micro-cement 3D wall finish",
      "Brushed champagne desk trims and leatherette surface",
      "High-density ergonomic velvet-touch upholstery"
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
    category: "Hospitality",
    room: "Other",
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
  },
  {
    slug: "cupboard-and-storage-design",
    title: "Cupboard & Storage Design",
    image: "/images/cupboard-and-storage.jpg",
    images: [
      "/images/cupboard-and-storage.jpg",
    ],
    category: "Wardrobe",
    room: "Bedroom",
    style: "Luxury",
    description: "Floor-to-ceiling built-in cupboard with sage green and glossy white finish, illuminated display shelving for accessories and shoes, and full-length gold handles.",
    features: [
      "Integrated vertical LED illuminated open display shelves",
      "Floor-to-ceiling overhead storage loft compartments",
      "Full-height brushed gold vertical handles",
      "Dedicated luxury accessory, handbag, and footwear display slots"
    ],
    materials: [
      "High-gloss sage green and ivory moisture-proof composite panels",
      "Brushed gold anodized metal hardware",
      "Recessed warm LED accent profile strips",
      "Silent hydraulic soft-close hinges"
    ]
  },
  {
    slug: "designer-false-ceiling",
    title: "Designer False Ceiling & Ambient Lighting",
    image: "/images/false-ceiling-recessed-cove.jpg",
    images: [
      "/images/false-ceiling-recessed-cove.jpg",
      "/images/false-ceiling-lotus-pop.jpg",
      "/images/false-ceiling-wave-slats.jpg",
    ],
    category: "False Ceiling",
    room: "Living Room",
    style: "Luxury",
    description: "Architectural POP and gypsum false ceiling concepts featuring multi-tiered cove lighting, artistic floral POP medallions with chandelier accents, and parametric wave ceiling designs with acoustic vertical wooden louvers.",
    features: [
      "Concealed indirect 3000K warm LED cove lighting profiles",
      "Artistic handcrafted floral POP centerpiece with chandelier integration",
      "Parametric organic wave ceiling contours with vertical acoustic wooden slats",
      "Flush dual spotlight pods and low-glare architectural downlights",
      "Fire-retardant and moisture-resistant Saint-Gobain gypsum boards"
    ],
    materials: [
      "Saint-Gobain Gyproc false ceiling boards",
      "High-grade POP (Plaster of Paris) moldings",
      "Natural oak finish acoustic wooden slats",
      "Seamless aluminum LED profile channels with silicone diffusers"
    ]
  },
  {
    slug: "architectural-doors-and-windows",
    title: "Aesthetic Doors & Windows",
    image: "/images/luxury-carved-entrance-door.jpg",
    images: [
      "/images/luxury-carved-entrance-door.jpg",
      "/images/luxury-french-patio-doors.jpg",
      "/images/luxury-arched-pivot-window.jpg",
      "/images/aluminium-doors-windows-3.jpeg",
      "/images/UPVC sliding door.jpeg",
      "/images/aluminium-doors-windows-1.jpeg",
    ],
    category: "Doors & Windows",
    room: "Living Room",
    style: "Luxury",
    description: "Premium handcrafted entrance doors, slim-profile aluminium French casement doors, and panoramic arched pivot windows designed to flood interiors with natural light and timeless aesthetic elegance.",
    features: [
      "Handcrafted solid teakwood double entrance door with decorative brass lattice sidelights",
      "Ultra-slim thermal-break aluminium architectural French doors opening to patio/gardens",
      "Monumental arched pivot glass door with seamless Japanese garden views",
      "Multi-point secure locking hardware and precision damping soft-close systems",
      "Acoustic insulated double-glazed toughened safety glass"
    ],
    materials: [
      "Solid seasoned teakwood with brass hardware inlay",
      "T6-grade powder-coated matte black architectural aluminium profiles",
      "DGU double-glazed toughened clear glass panels",
      "Heavy-duty stainless steel pivot hinges and brass drop-seal threshold"
    ]
  }
];


