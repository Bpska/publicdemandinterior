export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    id: "1",
    question: "What services do you provide?",
    answer: "We offer end-to-end design and fabrication solutions including Aluminium Modular Kitchens, wooden modular kitchens, wardrobes, false ceilings, TV units, sliding glass doors & partition grids, office cabin interiors, and complete turnkey residential transformations.",
    category: "General"
  },
  {
    id: "2",
    question: "Why should I choose an Aluminium Modular Kitchen over wooden/particle board kitchens?",
    answer: "Aluminium modular kitchens are highly recommended for Indian cooking styles because they are 100% water-proof, rust-free, termite-resistant, and fire-retardant. They do not swell or warp in high moisture environments like wood or MDF, making them highly durable and hygienic.",
    category: "Aluminium"
  },
  {
    id: "3",
    question: "Can I customize the colors and materials of my wardrobe?",
    answer: "Yes, absolutely. We offer customizable wardrobes in wood (with premium laminates, veneers, or acrylics) and modern aluminium (with toughened clear/tinted glass, mirrors, or designer ACP inserts). The internal rack layouts are fully tailored to your specific needs.",
    category: "Wardrobes"
  },
  {
    id: "4",
    question: "What is your typical project execution process?",
    answer: "Our project follows 6 clear phases: 01. Initial discussion & consultation, 02. Site visits and detailed space measurements, 03. Layout design & planning, 04. Detailed material lists and cost estimates, 05. Site execution & manufacturing, and 06. Final inspection and handover.",
    category: "Process"
  },
  {
    id: "5",
    question: "Do you have a physical office address I can visit?",
    answer: "Currently, we operate as a direct-on-site fabrication and design service. We meet clients directly at their sites (homes, offices, or commercial properties) to take measurements and discuss requirements, saving you time and ensuring accurate, real-space consultation.",
    category: "General"
  },
  {
    id: "6",
    question: "How can I get a quotation for my project?",
    answer: "You can request a quote by clicking the 'Get Free Quote' button on our website and filling out your details. The form will generate a message which you can send directly to us on WhatsApp at 8144823652. Alternatively, you can call us directly.",
    category: "Quotes"
  }
];
