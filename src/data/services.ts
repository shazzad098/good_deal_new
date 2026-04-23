export interface ServiceCardData {
  num: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  icon: "electrical" | "fire" | "lightning" | "solar" | "construction";
}

export const services: ServiceCardData[] = [
  {
    num: "01",
    title: "Electrical & Power Distribution",
    description:
      "Comprehensive LV solutions utilizing 100% genuine components. Direct importer of MCB, MCCB, ACB, and VCB from ABB, Schneider Electric, and Siemens. Custom LV panel manufacturing in-house.",
    tags: ["Busbar Trunking", "MDB / SDB", "PFI Plants", "MCC & ATS"],
    image: "/images/electrical.jpg",
    icon: "electrical",
  },
  {
    num: "02",
    title: "Fire & Life Safety Solutions",
    description:
      "Authorized partner of PCJ Industries Co., Ltd. (Thailand) for Bangladesh. UL-Listed fire steel doors, intelligent detection systems, automatic sprinklers, and NFPA-compliant hydrant systems.",
    tags: ["UL-Listed Doors", "Sprinklers", "NFPA Hydrants", "Detection"],
    image: "/images/fire-safety.jpg",
    icon: "fire",
  },
  {
    num: "03",
    title: "Lightning Protection Systems",
    description:
      "High-tech Early Streamer Emission (ESE) lightning arresters for wide-area coverage. Surge Protection Devices (SPD) and precision earthing systems with certified resistance testing.",
    tags: ["ESE Arresters", "SPD", "Precision Grounding"],
    image: "/images/lightning.jpg",
    icon: "lightning",
  },
  {
    num: "04",
    title: "Sustainable Solar Solutions",
    description:
      "Full EPC (Engineering, Procurement & Construction) services for industrial-grade solar power plants. Specialized Operations & Maintenance including cleaning and routine maintenance to maximize ROI.",
    tags: ["Full EPC", "Industrial Grade", "O&M Services"],
    image: "/images/solar.jpg",
    icon: "solar",
  },
  {
    num: "05",
    title: "Civil & Industrial Construction",
    description:
      "Expert execution of heavy-duty factory sheds, warehouses, and specialized machinery foundations. Comprehensive project management from soil analysis and architectural planning to structural reinforcement.",
    tags: ["Factory Sheds", "Warehouses", "Foundations", "Project Mgmt"],
    image: "/images/construction.jpg",
    icon: "construction",
  },
];
