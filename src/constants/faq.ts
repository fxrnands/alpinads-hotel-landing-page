export const FAQ_COLUMN_GAP_PX = 80;
export const FAQ_ACCORDION_GAP_PX = 20;
export const FAQ_ACCORDION_GAP_MOBILE_PX = 12;

export const FAQ_MOBILE_IMAGE_WIDTH = 358;
export const FAQ_MOBILE_IMAGE_HEIGHT = 240;

export const FAQ_IMAGE_WIDTH = 648;
export const FAQ_IMAGE_HEIGHT = 330;

export const FAQ_COPY = {
  title: "Frequently Asked Questions",
  description:
    "Answers to the most common questions, so you can focus on enjoying your time with us.",
} as const;

export const FAQ_IMAGE = {
  src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1296&q=80",
  alt: "Elegant hotel suite with warm lighting",
  width: FAQ_IMAGE_WIDTH,
  height: FAQ_IMAGE_HEIGHT,
} as const;

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_DEFAULT_OPEN_ID = "check-in-check-out" as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "check-in-check-out",
    question: "What is the check-in and check-out time?",
    answer: "Check-in is from 3:00 PM, and check-out is until 11:00 AM.",
  },
  {
    id: "pet-friendly",
    question: "Is the hotel pet-friendly?",
    answer:
      "Yes, we welcome well-behaved pets in select rooms. Please contact us before arrival so we can prepare your stay.",
  },
  {
    id: "shuttle-services",
    question: "Do you offer shuttle services?",
    answer:
      "We offer scheduled shuttle service to nearby ski lifts and town center. Reservations can be made at the front desk.",
  },
  {
    id: "lift-passes",
    question: "Are lift passes included in the price?",
    answer:
      "Lift passes are not included in the room rate, but our concierge can arrange discounted passes and equipment rental.",
  },
  {
    id: "vegan-restaurant",
    question: "Is there a vegan option in the restaurant?",
    answer:
      "Yes, our restaurant offers vegan and vegetarian dishes daily, including plant-based tasting menus on request.",
  },
];
