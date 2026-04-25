export interface ElectricalProduct {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  benefits: string[];
}

export const electricalProducts: ElectricalProduct[] = [
  {
    id: 1,
    title: "Lightning Protection Systems",
    description: "High-tech ESE lightning arresters and precision earthing systems.",
    longDescription: "Our comprehensive lightning protection systems utilize advanced Early Streamer Emission (ESE) technology for wide-area coverage, coupled with robust Surge Protection Devices (SPD) and precision grounding networks to ensure maximum safety for industrial and commercial structures.",
    image: "/images/lightning.jpg",
    features: [
      "Early Streamer Emission (ESE) Arresters",
      "Surge Protection Devices (SPD)",
      "Precision Earthing Systems",
      "Certified Resistance Testing"
    ],
    benefits: [
      "Wide-area coverage from single mast",
      "Protects sensitive electronic equipment",
      "Compliant with international safety standards",
      "Long-term structural protection"
    ]
  },
  {
    id: 2,
    title: "Low Voltage Distribution Panels",
    description: "Custom-built LV panels using 100% genuine components from leading global brands.",
    longDescription: "We design, assemble, and test comprehensive Low Voltage (LV) distribution panels. Our solutions incorporate direct-imported components including MCB, MCCB, ACB, and VCB from renowned manufacturers like ABB, Schneider Electric, and Siemens to guarantee uncompromising reliability.",
    image: "/images/electrical.jpg",
    features: [
      "Custom in-house panel manufacturing",
      "MDB, SDB, and MCC configurations",
      "PFI Plants integration",
      "Automatic Transfer Switches (ATS)"
    ],
    benefits: [
      "Enhanced power distribution efficiency",
      "Reduced electrical faults and downtime",
      "Scalable infrastructure for future growth",
      "Guaranteed genuine components"
    ]
  },
  {
    id: 3,
    title: "Busbar Trunking Systems",
    description: "Efficient and space-saving power distribution for modern industrial facilities.",
    longDescription: "Our Busbar Trunking Systems offer a highly flexible, safe, and compact alternative to traditional cabling. Designed for heavy-duty industrial applications, these systems provide reliable power transmission with minimal voltage drop and superior short-circuit withstand capacity.",
    image: "/images/electrical.jpg",
    features: [
      "Compact and modular design",
      "High short-circuit rating",
      "Low voltage drop characteristics",
      "Easy tap-off configurations"
    ],
    benefits: [
      "Significant space savings over cables",
      "Faster installation and commissioning",
      "Enhanced safety with enclosed conductors",
      "Lower lifecycle maintenance costs"
    ]
  }
];
