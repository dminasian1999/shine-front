import exteriorImage from "./assets/exterior.webp";
import interiorImage from "./assets/interior.webp";
import fullDetailImage from "./assets/full-detail.webp";

export type Service = {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  description: string;
  includes: string[];
  startingPrice?: string;
  duration?: string;
  bookingUrl?: string;
};

export const services: Service[] = [
  {
    id: "exterior-wash",
    name: "Exterior Wash",
    image: exteriorImage,
    imageAlt: "Clean black alloy wheel and a freshly washed fender",
    description: "A fresh wash for the parts of your car that face the road.",
    includes: ["Body wash and rinse", "Wheel and tire cleaning", "Exterior glass"],
  },
  {
    id: "interior-detailing",
    name: "Interior Detailing",
    image: interiorImage,
    imageAlt: "Clean black leather seat and center console",
    description: "A deeper clean for the cabin, from the seats to the glass.",
    includes: ["Seats, carpets, and mats vacuumed", "Dash and console wiped down", "Interior glass"],
  },
  {
    id: "full-detail",
    name: "Full Detail",
    image: fullDetailImage,
    imageAlt: "Water beads and a studio light reflection on polished paint",
    description: "Exterior and interior care in one visit.",
    includes: ["Exterior wash and wheel cleaning", "Interior detailing", "Interior and exterior glass"],
  },
];

type BusinessDetails = {
  location: string;
  phone?: string;
  hours?: string;
  bookingUrl?: string;
  projectPhotos: Partial<Record<"Before" | "After", { src: string; alt: string }>>;
  reviews: { quote: string; name: string }[];
};

export const business: BusinessDetails = {
  location: "Tujunga, CA",
  projectPhotos: {},
  reviews: [],
};
