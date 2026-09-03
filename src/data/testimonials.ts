export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Subhendu Mohanty",
    role: "Homeowner",
    location: "Bhubaneswar",
    rating: 5,
    text: "The aluminium modular kitchen they designed has been a complete lifesaver. Unlike wood which swells in damp weather, the aluminium frame and ACP shutters are extremely easy to clean and look incredibly premium."
  },
  {
    id: "2",
    name: "Dr. Pragyan Senapati",
    role: "Apartment Owner",
    location: "Cuttack",
    rating: 5,
    text: "Public Demand Interior completed our bedroom wardrobes and false ceiling. The material sheets were clearly detailed in the estimate and the pricing was fully transparent. Highly professional team."
  },
  {
    id: "3",
    name: "Alok Ranjan Rout",
    role: "Office Admin Manager",
    location: "Bhubaneswar",
    rating: 5,
    text: "We hired them to build sliding glass partitions and false ceilings for our office. The visual openness they achieved with the slim black profiles is outstanding. Very happy with the execution."
  }
];
