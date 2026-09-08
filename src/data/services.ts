export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  materials: string[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "aluminium-modular-kitchen",
    title: "Aluminium Modular Kitchen",
    shortDesc: "Waterproof, rust-free, and highly durable luxury kitchen spaces.",
    description: "Combining structural resilience with modern luxury, our Aluminium Modular Kitchens are the ultimate solution for Indian homes. They are completely waterproof, termite-proof, fire-resistant, and won't warp or swell. Designed with premium finishes including ACP (Aluminium Composite Panel) and glass styles.",
    image: "/images/Aluminium modular kitchen.jpeg",
    features: [
      "100% Waterproof & Moisture-proof",
      "Termite & Pest Resistant",
      "Fire-retardant aluminium structure",
      "Premium soft-close hinges & tandem drawers",
      "Easy-to-clean ACP panels in multiple shades"
    ],
    benefits: [
      "Zero warping or swelling",
      "Extremely long-lasting compared to wood",
      "Highly hygienic and easy to sanitize",
      "Customizable modular compartments"
    ],
    materials: [
      "Heavy-gauge extruded aluminium profiles",
      "Premium Aluminium Composite Panels (ACP)",
      "Toughened glass shutters",
      "Stainless steel basket pull-outs",
      "Branded soft-close hardware"
    ]
  },
  {
    id: "2",
    slug: "modular-kitchen",
    title: "Modular Kitchen",
    shortDesc: "Premium wooden and acrylic custom kitchens designed for ergonomics.",
    description: "Our classic Modular Kitchens focus on ergonomics, storage optimization, and aesthetics. Available in modern styles like L-shaped, U-shaped, Island, and Parallel layouts. Finished with premium acrylic, laminates, or veneers for a premium visual appeal.",
    image: "/images/Modular kitchen.jpeg",
    features: [
      "Ergonomic workflow layout (Golden Triangle)",
      "High-gloss acrylic or premium matte laminate options",
      "Smart pantry units and corner space utility",
      "Integrated appliance cavities",
      "Under-cabinet LED lighting systems"
    ],
    benefits: [
      "Maximizes kitchen storage space",
      "Tailored to cook's height and movement",
      "Premium aesthetics matching modern home themes",
      "Easily repairable and modular components"
    ],
    materials: [
      "BWP (Boiling Water Proof) Marine Plywood",
      "MDF or HDMR core for shutters",
      "High-gloss acrylic sheets",
      "Anti-scratch laminate liners",
      "Hafele or Hettich drawer runners"
    ]
  },
  {
    id: "3",
    slug: "aluminium-wardrobe",
    title: "Aluminium Wardrobe",
    shortDesc: "Sleek and sturdy wardrobes built with premium aluminium frames.",
    description: "A modern alternative to bulky wooden wardrobes. Built with sleek anodized or powder-coated aluminium frames combined with toughened glass or designer ACP inserts. They offer a minimalist, spacious appearance while providing high structural stability.",
    image: "/images/Aluminium wardrobe.jpeg",
    features: [
      "Ultra-slim metal profile framing",
      "Toughened color-back glass or mirrored shutters",
      "Integrated internal LED lighting strips",
      "Smooth sliding track mechanisms",
      "Custom drawer divisions and shoe racks"
    ],
    benefits: [
      "Lightweight yet structurally robust",
      "Will never catch termites, dampness, or mold",
      "Modern minimalist styling with visual depth",
      "Eco-friendly, recyclable base materials"
    ],
    materials: [
      "Powder-coated / Anodized Aluminium frames",
      "8mm toughened tinted glass or mirrors",
      "High-density ACP board shelves",
      "Soft-close slide runners",
      "Premium metal pull handles"
    ]
  },
  {
    id: "4",
    slug: "cupboard-storage",
    title: "Cupboard & Storage",
    shortDesc: "Luxury floor-to-ceiling cupboards, illuminated open shelving, and custom storage.",
    description: "De-clutter and elevate your home with bespoke floor-to-ceiling cupboards and designer storage solutions. Featuring sage green and gloss ivory doors, integrated vertical LED illuminated display shelves for accessories and shoes, and gold designer hardware.",
    image: "/images/cupboard-and-storage.jpg",
    features: [
      "Floor-to-ceiling built-in storage with overhead lofts",
      "Integrated vertical LED display tower with illuminated shelves",
      "Full-height brushed gold vertical designer handles",
      "Dedicated compartments for luxury accessories, handbags, and shoes",
      "Soft-close dampened hinges and silent drawer runners"
    ],
    benefits: [
      "Maximizes vertical space utilization from floor to ceiling",
      "Combines concealed dust-free storage with luxury open display",
      "Creates a clean, sophisticated, unified room aesthetic",
      "Tailor-made for specific items (handbags, footwear, perfumes)"
    ],
    materials: [
      "High-Density Moisture-Resistant (HDMR) boards",
      "High-gloss sage green and ivory acrylic panels",
      "Brushed gold anodized metal hardware",
      "Recessed warm LED accent profile strips",
      "Heavy-duty soft-close hinges"
    ]
  },
  {
    id: "5",
    slug: "tv-unit",
    title: "TV Unit & Console",
    shortDesc: "Minimalist and luxury entertainment centers with hidden cable routing.",
    description: "Transform your living area with media consoles that serve as a focal point. Combining wooden paneling, fluted patterns, marble-finish backdrops, and floating shelves with hidden wiring channels for a clean, wire-free look.",
    image: "/images/Tv unit and console-1.jpeg",
    features: [
      "Hidden channel routing for wires and media box cables",
      "Accent fluted panels or marble-textured backboards",
      "Floating drawer console with push-to-open mechanics",
      "Ambient backlight LED strips behind panels",
      "Glass display shelves for decorative items"
    ],
    benefits: [
      "Organized, clean media area without messy wires",
      "Enhances the luxurious feel of the living room",
      "Provides both storage and decor display space",
      "Designed to support large-screen TVs comfortably"
    ],
    materials: [
      "HDMR (High Density Moisture Resistant) board",
      "Charcoal panels or PVC fluted boards",
      "UV marble sheets or premium laminates",
      "LED diffuser channels",
      "Heavy-duty wall anchors"
    ]
  },
  {
    id: "6",
    slug: "bedroom-interior",
    title: "Bedroom Interior",
    shortDesc: "Cozy, luxurious, and highly personalized master & guest bedrooms.",
    description: "Your bedroom is your sanctuary. We design beautiful, cozy, and functional bedrooms that reflect your personality. Includes customized bed headboards, side tables, wall paneling, false ceilings, and wardrobe integration.",
    image: "/images/modern-bedroom-interior.jpg",
    features: [
      "Custom upholstered or wooden headboard panels",
      "Dual side tables with integrated lighting controls",
      "Space-saving dresser consoles with vanity mirrors",
      "Custom cove ceiling designs for warm ambient lighting",
      "Under-bed hydraulic storage options"
    ],
    benefits: [
      "Warm, calming environment optimized for deep sleep",
      "Seamless integration of wardrobe, dresser, and bed",
      "Hidden wiring and outlets near the bedside",
      "Tailored storage space for extra linens and clothing"
    ],
    materials: [
      "Premium foam and luxury velvet/leatherette fabrics",
      "BWP plywood with wooden veneer coatings",
      "Durable hydraulic lift pistons",
      "Low-VOC paints and wood polishes",
      "Warm-toned LED profile strips"
    ]
  },
  {
    id: "7",
    slug: "living-room-interior",
    title: "Living Room Interior",
    shortDesc: "Curved luxury seating, layered cove ceilings, and bespoke wall features.",
    description: "Welcome guests into a breathtaking living room designed to inspire. We blend curved modular seating, concentric ceiling cove lighting, fluted architectural wall panelling, and designer ambient sconces for a serene, high-end ambiance.",
    image: "/images/living-room-interior.jpg",
    features: [
      "Custom curved modular sectional sofas and round ottomans",
      "Layered concentric oval ceiling cove lighting layouts",
      "Minimalist fluted wall panelling with modern sconces",
      "Floor-to-ceiling mirror panels and sheer window treatments",
      "Bespoke marble & brushed brass center coffee tables"
    ],
    benefits: [
      "Spacious, inviting, and open layout for family and guests",
      "Warm, multi-tiered indirect lighting for relaxing evening scenes",
      "Refined aesthetic balance of soft curves and architectural lines",
      "Durable, stain-resistant premium fabrics and easy-care finishes"
    ],
    materials: [
      "Plush cream boucle and linen-blend upholstery",
      "Moisture-resistant HDMR fluted panels",
      "Concentric LED cove lighting channels",
      "Brushed brass and composite marble tabletops",
      "Low-VOC luxury emulsion wall coatings"
    ]
  },
  {
    id: "8",
    slug: "false-ceiling",
    title: "False Ceiling & Lighting",
    shortDesc: "Modern gypsum and wooden ceilings with customized ambient lighting.",
    description: "Perfect ceilings define the atmosphere of a room. We design elegant gypsum, grid, and wooden strip ceilings that conceal wiring, house air conditioning vents, and hold custom cove and spot lighting for a clean finish.",
    image: "/images/false-ceiling-1.jpeg",
    features: [
      "Clean gypsum board layouts with cove light pockets",
      "Accent wooden ceiling highlights or rafter beams",
      "Concealed wiring and junction points",
      "Magnetic track light installations",
      "Acoustic panel insertions where needed"
    ],
    benefits: [
      "Distributes light evenly across the room without glare",
      "Conceals ugly wiring, AC pipes, and beams",
      "Provides thermal and acoustic insulation",
      "Drastically elevates the overall room aesthetics"
    ],
    materials: [
      "Saint-Gobain Gypsum boards and metal channels",
      "WPC (Wood Plastic Composite) ceiling louvers",
      "High-quality LED strip and COB spotlights",
      "Fibre-cement sheets for moisture areas",
      "Powder-coated metal frames"
    ]
  },
  {
    id: "9",
    slug: "aluminium-doors-windows",
    title: "Aluminium Doors & Windows",
    shortDesc: "High-grade soundproof sliding windows, casements, and doors.",
    description: "Upgrade your space with durable, dust-proof, and soundproof aluminium doors and windows. Available in luxury system profiles with double glazing, offering weather resistance and modern slim-sightline views.",
    image: "/images/aluminium-doors-windows-1.jpeg",
    features: [
      "Heavy-duty powder-coated or anodized finish profiles",
      "Double-glazed glass (DGU) for sound and thermal insulation",
      "Multi-point locking systems for high security",
      "Integrated fly mesh screen panels",
      "Premium weather seals to block dust and rain water"
    ],
    benefits: [
      "Drastically reduces outside noise entry",
      "Highly resistant to storms, wind, and rain leakages",
      "Smooth, silent sliding and folding mechanisms",
      "Minimal maintenance required for decades"
    ],
    materials: [
      "T6-grade architectural aluminium alloy profiles",
      "Toughened DGU glass (5mm + 12A + 5mm or customized)",
      "EPDM rubber gaskets for airtight sealing",
      "German-design hardware locks and rollers",
      "Fiberglass mesh screens"
    ]
  },
  {
    id: "10",
    slug: "sliding-doors-partitions",
    title: "Sliding Doors & Partitions",
    shortDesc: "Sleek glass partitions for dynamic space zoning.",
    description: "Create visual openness while maintaining spatial divisions. Our slim-profile glass sliding doors and partitions are perfect for separating kitchens from living areas, or setting up premium walk-in wardrobes.",
    image: "/images/Sliding door and partition.jpeg",
    features: [
      "Slim-line aluminium framing for maximum glass visibility",
      "Top-hung sliding tracks without floor channels",
      "Soft-closing dampers to prevent glass slams",
      "Fluted, frosted, or clear glass insert panels",
      "Synchronized double-sliding opening styles"
    ],
    benefits: [
      "Allows natural light to flow across separated zones",
      "Separates kitchen smells or AC cooling dynamically",
      "Saves floor space compared to swinging doors",
      "Adds a highly modern, chic look to the house"
    ],
    materials: [
      "Precision-machined aluminium sliding frame rails",
      "10mm or 12mm Toughened glass panels (fluted/tinted)",
      "Heavy-duty top-hung tracks with nylon rollers",
      "Neoprene dust barriers",
      "Minimalist lock latches"
    ]
  },
  {
    id: "11",
    slug: "office-interior",
    title: "Office Interior",
    shortDesc: "Productive, stylish, and ergonomic commercial workspaces.",
    description: "Elevate your business environment with workspaces designed for productivity and brand identity. From ergonomic executive cabins and conference rooms to modern linear workstations and welcoming reception lounges.",
    image: "/images/corporate-workspace-hub.jpg",
    features: [
      "Modular wire-managed linear desks",
      "Acoustic paneling and glass-partitioned cabins",
      "Ergonomic layout for high collaborative work",
      "Branded reception backdrop with signage integration",
      "Server room storage and utility cabinetry"
    ],
    benefits: [
      "Boosts employee focus and morale",
      "Impresses clients with corporate sophistication",
      "Organized wire channels keep desks clutter-free",
      "Optimum lighting levels to reduce eye fatigue"
    ],
    materials: [
      "High-density particle boards with laminate surfaces",
      "Double-walled glass acoustic partitions",
      "Fabric-wrapped pinboards and acoustic felt",
      "Steel framing supports for heavy desk loads",
      "Eco-friendly commercial carpet tiles"
    ]
  },
  {
    id: "12",
    slug: "home-decoration-complete-interior",
    title: "Home Decoration & Complete Interior",
    shortDesc: "End-to-end turnkey residential transformation from design to handover.",
    description: "Get a hassle-free, turnkey interior design experience. We handle everything from space planning, electrical layouts, false ceilings, flooring, and paint to custom furniture and final home styling decor, delivering your dream home ready to move in.",
    image: "/images/premium-3bhk-apartment-interior.jpg",
    features: [
      "Complete turnkey execution (design, fabrication, site work, styling)",
      "Photorealistic 3D rendering designs before site startup",
      "Dedicated project managers for scheduling and quality control",
      "Coordinated civil, plumbing, electrical, and woodworking teams",
      "Post-handover maintenance warranty periods"
    ],
    benefits: [
      "Single-point responsibility - no dealing with multiple contractors",
      "100% accurate alignment to approved 3D design visuals",
      "On-time project delivery with detailed timelines",
      "Transparent material sheets and pricing itemization"
    ],
    materials: [
      "Premium materials tailored to client specifications",
      "Asian Paints luxury wall finishes",
      "Century or Greenply plywood products",
      "Premium marble, tile, or laminate flooring layers",
      "Custom branded electrical and lighting fixtures"
    ]
  },
  {
    id: "13",
    slug: "mosquito-net",
    title: "Mosquito Net",
    shortDesc: "Premium sliding and roller insect screens for doors and windows.",
    description: "Protect your family from insects while enjoying fresh air. Our high-durability mosquito nets feature sleek aluminium frames, premium mesh options (including fiberglass and stainless steel), and smooth sliding or roller mechanisms.",
    image: "/images/pleated-mosquito-net.webp",
    features: [
      "High-grade fiberglass or SS304 mesh",
      "Sleek powder-coated aluminium frames",
      "Smooth rollers & magnetic closure",
      "Durable and weather-resistant design"
    ],
    benefits: [
      "Keeps insects out while maintaining airflow",
      "Easily detachable for cleaning",
      "Matches window aesthetic",
      "Long lifespan without rust"
    ],
    materials: [
      "Powder-coated aluminium frame profiles",
      "Phifer fiberglass mesh / SS304 mesh",
      "Nylon corner connectors",
      "Magnetic seals"
    ]
  },
  {
    id: "14",
    slug: "invisible-grill",
    title: "Invisible Grill",
    shortDesc: "Modern, high-tensile safety grills for balconies and windows.",
    description: "Upgrade your balcony safety without compromising the view. Our invisible grills are made of high-tensile marine-grade stainless steel cables coated with nylon, offering strong security and a completely unobstructed view.",
    image: "/images/Invisible grill.jpeg",
    features: [
      "316 Marine-grade stainless steel wire",
      "Nylon protective coating to prevent scratches",
      "High tensile strength up to 400kg",
      "Unobstructed view of the outside"
    ],
    benefits: [
      "Enhances safety for children and pets",
      "Doesn't rust in humid coastal climates",
      "Sleek modern alternative to heavy iron grills",
      "Fire-escape friendly design"
    ],
    materials: [
      "316 Stainless Steel wire core",
      "Nylon/Teflon protective sleeve",
      "Heavy-duty aluminium mounting tracks",
      "Stainless steel tensioners"
    ]
  },
  {
    id: "15",
    slug: "bend-net",
    title: "Bend Net (Pleated Mosquito Net)",
    shortDesc: "Sleek, accordion-style foldable pleated insect screen barriers.",
    description: "Our Bend Net pleated screens feature an accordion-style folding design. They slide horizontally or vertically with ease and retract into a slim frame, making them perfect for large doors, balconies, and French windows.",
    image: "/images/pleated-mosquito-net.webp",
    features: [
      "Accordion pleated mesh design",
      "Low-profile bottom track for easy passage",
      "Space-saving folding mechanism",
      "Smooth tension-cord operation"
    ],
    benefits: [
      "Ideal for large openings and sliding doors",
      "Minimal storage footprint when open",
      "Highly elegant and modern appearance",
      "Provides perfect dust and insect barrier"
    ],
    materials: [
      "Premium polyester pleated mesh",
      "Extruded aluminium alloy track frames",
      "High-tensile tension cords",
      "Magnetic locking strips"
    ]
  },
  {
    id: "16",
    slug: "wpc-wood-plastic-composite",
    title: "WPC – Wood Plastic Composite",
    shortDesc: "Waterproof, termite-proof wall panelling and exterior cladding panels.",
    description: "Enjoy the luxury of wood without the maintenance. WPC panels are perfect for interior wall styling, ceiling panels, and exterior cladding. They are completely waterproof, flame retardant, termite proof, and highly durable.",
    image: "/images/wpc-panel-1.jpeg",
    features: [
      "Eco-friendly composite material",
      "Realistic wood grain textures & solid colors",
      "UV resistant cladding",
      "Flame retardant properties"
    ],
    benefits: [
      "100% termite and moisture proof",
      "Zero maintenance needed (no polishing)",
      "Excellent acoustic and thermal insulation",
      "Easy to install on any surface"
    ],
    materials: [
      "Wood plastic composite boards",
      "Heavy-duty mounting clips",
      "Silicone sealants",
      "Aluminium/WPC sub-frame support grid"
    ]
  },
  {
    id: "17",
    slug: "upvc-sliding-door",
    title: "UPVC Sliding Door",
    shortDesc: "Thermal-efficient, dust-proof, and sound-insulated sliding doors.",
    description: "Transform your balcony or patio access with modern UPVC sliding doors. Built with multi-chambered profiles and steel reinforcements, these doors offer outstanding thermal insulation, dust protection, and sound dampening.",
    image: "/images/UPVC sliding door.jpeg",
    features: [
      "Multi-chambered UPVC profiles",
      "Internal galvanized steel reinforcement",
      "Double-glazed soundproof glass options",
      "Multi-point safety locks"
    ],
    benefits: [
      "Saves AC energy bills with heat insulation",
      "Keeps out street noise and rainwater",
      "Maintenance-free finish (no painting)",
      "Extremely smooth slide track glide"
    ],
    materials: [
      "High-grade lead-free UPVC profiles",
      "Tempered double glass pane block",
      "EPDM rubber gaskets",
      "Heavy-duty steel rollers and locks"
    ]
  },
  {
    id: "18",
    slug: "plywood-modular-kitchen",
    title: "Plywood Modular Kitchen",
    shortDesc: "Premium BWP marine plywood kitchens with high-gloss finishes.",
    description: "Our Plywood Modular Kitchens combine classic craftsmanship with modern modular ergonomics. Built with Boiling Water Proof (BWP) marine plywood, lined with anti-scratch laminates, and completed with high-gloss acrylic or veneer shutters.",
    image: "/images/Modular kitchen.jpeg",
    features: [
      "IS:710 Marine Grade BWP Plywood",
      "High-gloss acrylic or premium laminate shutters",
      "Tandem drawer runners & corner storage units",
      "Modular carcass layout for quick repair"
    ],
    benefits: [
      "Highly resistant to water and heavy steam",
      "Excellent screw-holding capacity",
      "Classic, warm wooden aesthetic inside panels",
      "Tailored to Indian cooking habits"
    ],
    materials: [
      "BWP Marine Plywood core boards",
      "Hafele/Hettich soft-close hardware",
      "High-grade decorative laminate overlays",
      "Granite/Quartz stone countertop"
    ]
  },
  {
    id: "19",
    slug: "wall-panelling",
    title: "Wall Panelling",
    shortDesc: "Decorative MDF, PVC, charcoal, and wooden fluted panels for walls.",
    description: "Add texture and depth to your walls. We design and install high-quality wall panelling systems, including trendy fluted patterns, luxury charcoal panels, real wood veneer, and upholstered wall features for accent backdrops.",
    image: "/images/wall-panelling-1.jpeg",
    features: [
      "Trendy fluted louvers and panel grids",
      "Hidden joint locking installation",
      "Seamless integration of LED lights & switches",
      "Termite-treated backing board structure"
    ],
    benefits: [
      "Covers uneven or damp walls instantly",
      "Creates a stunning modern focal point",
      "Provides subtle room sound insulation",
      "Easy to wipe clean and maintain"
    ],
    materials: [
      "Charcoal PVC fluted panels",
      "MDF wood veneer boards",
      "Polyurethane base adhesive",
      "LED channel profiles"
    ]
  },
  {
    id: "20",
    slug: "wall-paper",
    title: "Wall Paper",
    shortDesc: "Luxury textured, metallic, and custom 3D printed wall coverings.",
    description: "Instantly elevate your room style with luxury wallpapers. We offer a wide collection of textured papers, metallic designs, custom 3D scenic prints, and damp-resistant vinyl wallpapers installed by professional technicians.",
    image: "/images/wall-panelling-2.jpeg",
    features: [
      "Damp-resistant vinyl coating layers",
      "Rich textures and embossed patterns",
      "Seamless joints and smooth finishing",
      "Non-toxic, eco-friendly adhesive glue"
    ],
    benefits: [
      "Very fast installation (completed in hours)",
      "Wide choice of patterns to match theme",
      "Highly cost-effective accent wall decor",
      "Durable and color-fast for years"
    ],
    materials: [
      "Heavy-duty non-woven backed paper",
      "Protective vinyl laminate seal",
      "Eco-friendly starch adhesive paste",
      "Seamless alignment borders"
    ]
  },
  {
    id: "21",
    slug: "hydraulic-bed",
    title: "Hydraulic Bed (Box Bed)",
    shortDesc: "Smart space-saving wooden beds with heavy-duty lift-up storage.",
    description: "Maximize your bedroom space with custom hydraulic lift-up beds. Built with heavy-duty structural frames and high-quality gas pistons, these beds allow you to easily lift the mattress and utilize the entire under-bed area for dust-free storage.",
    image: "/images/hydraulic-bed-1.jpeg",
    features: [
      "Heavy-duty hydraulic gas lift cylinders",
      "Spacious partitioned storage boxes",
      "Sturdy reinforced steel/plywood frame",
      "Premium upholstered headboard options"
    ],
    benefits: [
      "Effortless lift-up mechanism",
      "Generates massive hidden storage area",
      "Eliminates dust build-up under the bed",
      "Customizable dimensions and headboards"
    ],
    materials: [
      "BWP/MR grade plywood boards",
      "High-capacity gas spring pistons",
      "Steel frame mattress supports",
      "Luxury fabric/leatherette upholstery"
    ]
  },
  {
    id: "22",
    slug: "plumber-work",
    title: "Plumber Work",
    shortDesc: "Professional bathroom plumbing, pipe routing, and fixture installation.",
    description: "Ensure leak-free, long-lasting plumbing systems. We offer comprehensive plumbing services including concealed pipe routing, pressure testing, bathroom sanitaryware installation, drainage setup, and water pump systems.",
    image: "/images/plumber-work.webp",
    features: [
      "Concealed hot & cold water routing",
      "High-pressure leakage testing on lines",
      "Sanitary fixture installation (Jaquar, Kohler)",
      "Anti-clog drainage design grids"
    ],
    benefits: [
      "Prevents internal wall seepage and dampness",
      "Ensures consistent water pressure flow",
      "Clean, premium finish of external fixtures",
      "Uses premium-grade, non-rusting pipes"
    ],
    materials: [
      "CPVC / UPVC pipes (Astral/Supreme)",
      "Brass fittings and valves",
      "High-quality silicone and adhesives",
      "Premium branded sanitaryware"
    ]
  },
  {
    id: "23",
    slug: "house-colour-design-expert",
    title: "House Colour Design Expert",
    shortDesc: "Professional colour consultancy and premium texture painting services.",
    description: "Get the perfect color palette for your home. Our paint experts offer customized color consultations, digital previews, wall dampness checks, and professional application of luxury emulsions, metallic textures, and protective coatings.",
    image: "/images/living-room-2.jpeg",
    features: [
      "Digital 3D color combination previews",
      "Wall moisture inspection with sensors",
      "Luxury texture & velvet finishes",
      "Dust-free sanding machine application"
    ],
    benefits: [
      "Achieves perfect visual flow across rooms",
      "Addresses dampness before paint application",
      "Stunning luxury accent walls",
      "Long-lasting, washable paint finish"
    ],
    materials: [
      "Asian Paints Royale luxury emulsions",
      "Eco-friendly acrylic wall putties",
      "Anti-dampness primer coatings",
      "High-grade painters' masking tapes"
    ]
  },
  {
    id: "24",
    slug: "wiring",
    title: "Wiring & Electrical Work",
    shortDesc: "Safe, concealed electrical wiring, switchboards, and lighting panels.",
    description: "Ensure safety and smart convenience with expert electrical wiring. We handle concealed conduit routing, fire-resistant wiring, smart home automation integration, distribution board upgrades, and luxury light fixtures.",
    image: "/images/electrical-wiring.webp",
    features: [
      "Concealed fire-retardant conduit channels",
      "Accurate load calculation for ACs/appliances",
      "Smart home switchboards & panel installation",
      "Earth-leakage safety relay testing"
    ],
    benefits: [
      "Prevents short-circuits and electrical hazards",
      "Concealed look with no external hanging wires",
      "Conveniently placed sockets and switches",
      "Energy-efficient circuit organization"
    ],
    materials: [
      "Finolex / RR Kabel FR-LSH wires",
      "Modular switchboards (Legrand/Schneider)",
      "PVC heavy-duty conduits",
      "MCBs and ELCB safety distribution units"
    ]
  },
  {
    id: "25",
    slug: "tile-removal",
    title: "Tile Removal & Screeding",
    shortDesc: "Clean, professional floor/wall tile removal and cement level preparation.",
    description: "Preparing for a floor upgrade? We offer clean, rapid tile removal using pneumatic tools, floor debris clearing, and smooth cement screeding to prepare your floors and walls for new marble, vitrified tiles, or wooden flooring.",
    image: "/images/transformation-before-after.jpg",
    features: [
      "Pneumatic chiselling for clean removal",
      "Minimal dust containment protocols",
      "Debris bagging and quick site clearance",
      "Self-leveling screed cement application"
    ],
    benefits: [
      "Creates a perfectly flat base for new tiles",
      "Avoids damage to underlying structural slabs",
      "Fast execution with heavy-duty equipment",
      "Ensures new flooring sticks permanently"
    ],
    materials: [
      "High-strength structural cement",
      "Fine grading river sand mix",
      "Tile adhesive bonding agents",
      "Heavy-duty plastic protective sheets"
    ]
  },
  {
    id: "26",
    slug: "bed-room-design",
    title: "Bed Room Design",
    shortDesc: "Complete architectural space planning and styling for bedrooms.",
    description: "Create your ultimate personal retreat. We plan layout options, wardrobe configurations, lighting scenes, and custom furniture placement to design bedrooms that optimize comfort, space utility, and aesthetic warmth.",
    image: "/images/Bedroom interior-2.jpeg",
    features: [
      "Detailed 2D layout & 3D model renderings",
      "Wardrobe and dressing unit spatial planning",
      "Bed headboard wall design & lighting integration",
      "Color scheme and material selection sheets"
    ],
    benefits: [
      "Optimized bedroom layout for easy movement",
      "Warm, calming ambient lighting balance",
      "Maximized wardrobe and hidden storage options",
      "Accurate visual representation before starting"
    ],
    materials: [
      "High-resolution 3D rendering models",
      "Custom material sample boards",
      "Comprehensive lighting layout maps",
      "Plywood and laminate spec sheets"
    ]
  },
  {
    id: "27",
    slug: "drawing-design",
    title: "Drawing & Living Room Design",
    shortDesc: "Sophisticated drawing room layout and backdrop wall configurations.",
    description: "Your drawing room is the centerpiece of your home. We design elegant seating layouts, partition screens, custom media consoles, false ceilings, and ambient lighting panels that impress guests and foster warmth.",
    image: "/images/bedroom-design-2.jpeg",
    features: [
      "Seating layout options for optimal transit",
      "Statement backwall panelling and TV designs",
      "Concealed ambient and accent ceiling lighting",
      "Partition screens for zoning spaces"
    ],
    benefits: [
      "Creates a grand, spacious first impression",
      "Comfortable furniture and pathway alignments",
      "Flexible lighting options for day & night scenes",
      "Perfect balance of aesthetics and utility"
    ],
    materials: [
      "HDMR / Plywood backing frameworks",
      "Fluted PVC louvers and charcoal panels",
      "Designer wallpaper or texture paint boards",
      "Warm-toned LED profile channels"
    ]
  },
  {
    id: "28",
    slug: "restaurant-design",
    title: "Restaurant & Cafe Design",
    shortDesc: "Dynamic dining space planning, kitchen workflows, and themed decors.",
    description: "Attract diners with a stunning, themed atmosphere. We plan restaurant dining layouts, ergonomic kitchen workflows, billing/reception desks, lighting designs, acoustic installations, and eye-catching wall features.",
    image: "/images/restaurant-design-1.jpeg",
    features: [
      "Maximized table capacity with comfortable transit",
      "Industrial kitchen exhaust & pipeline routing",
      "Themed wall paneling and custom statement lighting",
      "Acoustic ceiling grids to reduce chatter echo"
    ],
    benefits: [
      "Enhances customer dining experience and reviews",
      "Optimized waiter pathways for fast service",
      "Complies with commercial safety regulations",
      "Strong, photogenic brand identity visual look"
    ],
    materials: [
      "Commercial-grade laminate surfaces",
      "Metal pipe lighting structures",
      "Acoustic felt panels and ceiling grids",
      "Heavy-traffic vitrified tiles / epoxy flooring"
    ]
  },
  {
    id: "29",
    slug: "guest-house-design",
    title: "Guest House Design",
    shortDesc: "Turnkey multi-room guest houses designed for comfort and efficiency.",
    description: "Design guest houses that look premium and feel like home. We specialize in planning multi-room guest house properties, including cozy lounge zones, compact functional bedrooms, attached baths, and smart storage.",
    image: "/images/Guest House design-.jpeg",
    features: [
      "Standardized space layouts across rooms",
      "Durable, low-maintenance material selection",
      "Modular storage wardrobes and dressers",
      "Comfortable common lounge seating plans"
    ],
    benefits: [
      "Highly cost-effective multi-room interior setup",
      "Extremely durable materials built for travelers",
      "Creates a welcoming, premium hospitality feel",
      "Easy to clean and maintain during guest rotations"
    ],
    materials: [
      "High-pressure laminate (HPL) boards",
      "Toughened glass partition screens",
      "Sturdy powder-coated metal framing",
      "Stain-resistant fabrics and wall finishes"
    ]
  },
  {
    id: "30",
    slug: "parlour-design",
    title: "Beauty Parlour & Salon Design",
    shortDesc: "Stylish salon spaces, product display shelves, and makeup vanity setups.",
    description: "Elevate your beauty salon or parlour with chic interiors. We design stunning product showcase shelves, custom lighted makeup mirrors, shampoo station plumbing, comfortable styling zones, and luxury reception counters.",
    image: "/images/Beauty parlour and salon design.jpeg",
    features: [
      "High-illumination LED mirrors (shadow-free)",
      "Waterproof routing for shampoo wash areas",
      "Sleek display cases with acrylic headers",
      "Cozy waiting area sofa layouts"
    ],
    benefits: [
      "Attracts premium clients with high-end look",
      "Proper utility planning for salon equipment",
      "Excellent brightness for precision styling work",
      "Clean, organized setup with hidden wires"
    ],
    materials: [
      "Boiling Water Resistant (BWR) plywood",
      "High-gloss gold/bronze steel trims",
      "High-CRI LED strip diffusers",
      "Scratch-resistant solid surface vanity tops"
    ]
  },
  {
    id: "31",
    slug: "shop-design",
    title: "Retail Shop & Showroom Design",
    shortDesc: "High-impact product display racks, cashier counters, and front signs.",
    description: "Maximize your retail sales with strategic shop layouts. We design attention-grabbing storefronts, modular product display racks, premium glass display cases, cash counters, and targeted spotlighting grids.",
    image: "/images/Retail shop design.jpeg",
    features: [
      "Modular wall shelving and pegboard systems",
      "High-visibility glass showcase counters",
      "Accent track spotlight layouts for products",
      "Secure cash desk with lockable storage drawer"
    ],
    benefits: [
      "Guides foot-traffic efficiently through shop",
      "Maximizes product visibility and accessibility",
      "Draws eye to premium items with track lights",
      "Durable structures withstand daily customer touch"
    ],
    materials: [
      "Heavy-duty metal framework racks",
      "Tempered glass panes and acrylic sliders",
      "MDF wood panels with durable laminates",
      "Branded LED track lights"
    ]
  },
  {
    id: "32",
    slug: "office-set-up",
    title: "Office Set Up & Workstations",
    shortDesc: "Professional office layouts, linear cubicles, and meeting rooms.",
    description: "Configure a productive and collaborative workspace. We design and install modular cubicles, executive desks, conference room tables, networking wire channels, reception desks, and files cabinet storage units.",
    image: "/images/corporate-workspace-hub.jpg",
    features: [
      "Concealed under-desk wiring trays & grommets",
      "Linear workstation clusters with fabric panels",
      "Soundproof glass partitions for cabins",
      "Integrated storage cabinets & locker drawers"
    ],
    benefits: [
      "Maximizes employee count per square foot",
      "Organized layout hides complex network wires",
      "Acoustic insulation ensures cabin privacy",
      "Professional appearance that builds corporate trust"
    ],
    materials: [
      "Pre-laminated particle boards (exterior grade)",
      "Powder-coated metal desk legs",
      "Frosted glass partition panels",
      "Acoustic foam wall coverings"
    ]
  }
];
