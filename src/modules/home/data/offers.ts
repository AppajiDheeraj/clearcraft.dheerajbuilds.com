export const offers = [
  {
    title: "Web Design",
    previousPrice: "$300",
    price: "$220",
    priceValue: 220,
    qualifier: "One-time",
    description:
      "Custom web design and responsive development for a landing page or focused web experience.",
    features: [
      "Custom Web Design",
      "Responsive Development",
      "Fast Delivery",
      "Secure Payments",
    ],
  },
  {
    title: "Product Design",
    previousPrice: "$500",
    price: "$400",
    priceValue: 400,
    qualifier: "Minimum",
    description:
      "Product design for apps and dashboards, including tailored interfaces and scalable design systems.",
    features: [
      "Apps & Dashboards",
      "Tailored Product Design",
      "Scalable Design Systems",
      "Page-based Project Scope",
    ],
  },
] as const;

export type Offer = (typeof offers)[number];
