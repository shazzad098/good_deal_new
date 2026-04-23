export interface FireSafetyProduct {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  benefits: string[];
}

export const fireSafetyProducts: FireSafetyProduct[] = [
  {
    id: 1,
    title: "Fire Protection System Design & Consultancy",
    description: "Expert engineering and design of comprehensive fire protection systems tailored to meet international safety standards and codes.",
    longDescription: "Our Fire Protection System Design & Consultancy service provides end-to-end engineering solutions for industrial and commercial facilities. We specialize in designing robust, compliant, and highly efficient fire safety infrastructures that meet NFPA, BNBC, and local regulatory standards.",
    image: "https://media.istockphoto.com/id/2213326978/photo/header-pipes-valve-zone-and-fire-alarm-control-system-at-industrial-plants.jpg?s=612x612&w=0&k=20&c=yhLTJ-4Nk25dNPxZr3mVdPxdBM4FN2w_0VbbmIPE5SA=",
    features: ["Hydraulic Calculations & 3D Modeling", "NFPA & BNBC Compliance Checks", "Risk Assessment & Mitigation Planning", "Integration with Building Management Systems (BMS)"],
    benefits: ["Optimized system performance", "Regulatory peace of mind", "Cost-effective resource allocation", "Future-proof safety infrastructure"]
  },
  {
    id: 2,
    title: "Fire Detection & Alarm System Installation",
    description: "State-of-the-art early warning systems including smoke detectors, heat sensors, and smart control panels for rapid response.",
    longDescription: "Early detection is critical in minimizing fire damage. We install intelligent addressable and conventional fire alarm systems equipped with advanced smoke, heat, and multi-sensor detectors. Our systems ensure rapid alerting and seamless integration with suppression mechanisms.",
    image: "https://images.unsplash.com/photo-1653353436174-a8e724190fd3?q=80&w=1199&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Intelligent Addressable Control Panels", "Multi-Sensor Detection Technology", "Manual Call Points & Sounders", "Remote Monitoring Capabilities"],
    benefits: ["Rapid incident identification", "Reduced false alarms", "Faster emergency response", "Enhanced life safety"]
  },
  {
    id: 3,
    title: "Fire Suppression & Extinguishing Systems",
    description: "Advanced automated suppression solutions including sprinklers, gas-based systems, and foam extinguishing technologies.",
    longDescription: "Protect critical assets and environments with our automated fire suppression solutions. From traditional wet-pipe sprinkler systems to specialized clean agent (FM-200, Novec 1230) and foam-based suppression systems, we deliver targeted extinguishing power.",
    image: "https://media.istockphoto.com/id/2268420229/photo/close-up-image-of-fire-sprinkler-fire-sprinklers-are-part-of-an-integrated-water-piping.jpg?s=612x612&w=0&k=20&c=qgZZgVdKZksnSs6sa3o7qfXgFaoPmq4zrcjV5ZkoirU=",
    features: ["Wet & Dry Pipe Sprinkler Systems", "Clean Agent Gas Suppression", "High-Expansion Foam Systems", "Pre-Action Systems for Data Centers"],
    benefits: ["Immediate fire knockdown", "Minimal water/collateral damage", "Protection of high-value assets", "Automated 24/7 defense"]
  },
  {
    id: 4,
    title: "Electrical & Lightning Safety",
    description: "High-tech Early Streamer Emission (ESE) lightning arresters and surge protection devices ensuring complete electrical safety.",
    longDescription: "Lightning and electrical surges pose severe risks to industrial facilities. We provide comprehensive protection using Early Streamer Emission (ESE) arresters, precision grounding/earthing systems, and Surge Protection Devices (SPDs) to safeguard electrical infrastructure.",
    image: "https://media.istockphoto.com/id/2263639062/photo/transmitter-tower.jpg?s=612x612&w=0&k=20&c=fxoAU8CJndRtHxkC78RfROOmSHbWtETq4dG1BgMsiOU=",
    features: ["ESE Lightning Protection Terminals", "Transient Voltage Surge Suppressors", "Low-Resistance Grounding Systems", "Lightning Strike Counters"],
    benefits: ["Prevention of electrical fires", "Protection of sensitive electronics", "Uninterrupted operations", "Comprehensive structural safety"]
  },
  {
    id: 5,
    title: "Fire Door & Emergency Exit Solutions",
    description: "UL-Listed, fire-rated steel doors and highly visible emergency exit pathways to secure safe evacuation routes.",
    longDescription: "Safe evacuation is the highest priority during a fire incident. Our UL-listed fire doors provide critical compartmentalization, preventing fire spread while securing escape routes. Paired with illuminated emergency exit signs and panic hardware, we guarantee safe egress.",
    image: "https://media.istockphoto.com/id/1691915673/photo/fire-exit-door-for-emergency-office-building-emergency-exit-with-exit-sign-and-fire.webp?a=1&b=1&s=612x612&w=0&k=20&c=9yrhJq5hL74c4JKUXwOsx9ORpP8jCdb1dqg71zWRv48=",
    features: ["UL-Listed Fire Rated Steel Doors", "Heavy-Duty Panic Bar Hardware", "Photo-Luminescent Exit Signs", "Automatic Door Closers & Seals"],
    benefits: ["Secured evacuation pathways", "Prevention of smoke and fire spread", "Extended escape time", "Full regulatory compliance"]
  },
  {
    id: 6,
    title: "Inspection, Testing & Commissioning",
    description: "Rigorous testing and commissioning protocols to ensure all fire safety equipment functions flawlessly under critical conditions.",
    longDescription: "A fire safety system is only as good as its reliability during an emergency. We offer independent inspection, rigorous pressure testing, and final commissioning of fire pumps, hydrants, and alarms to guarantee 100% operational readiness upon handover.",
    image: "https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg",
    features: ["Hydrostatic Pressure Testing", "Fire Pump Flow & Performance Tests", "Alarm Matrix Verification", "Third-Party Certification Support"],
    benefits: ["Guaranteed system readiness", "Identification of hidden flaws", "Smooth regulatory approvals", "Operational confidence"]
  },
  {
    id: 7,
    title: "Maintenance & Annual Service Contracts (AMC)",
    description: "Reliable round-the-clock maintenance services and AMCs to keep your life safety systems operational at all times.",
    longDescription: "Fire safety equipment requires consistent upkeep to remain effective. Our Annual Maintenance Contracts (AMC) provide proactive servicing, routine testing, and 24/7 emergency repair response to ensure your facility is never left unprotected.",
    image: "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg",
    features: ["Scheduled Preventive Maintenance", "24/7 Emergency Call-Out Support", "System Upgrades & Refilling", "Detailed Service Reporting"],
    benefits: ["Extended equipment lifespan", "Continuous system reliability", "Reduced emergency repair costs", "Compliance maintenance"]
  },
  {
    id: 8,
    title: "Fire Safety Equipment Supply",
    description: "Direct importer of genuine, globally certified fire safety equipment, guaranteeing authentic products and warranties.",
    longDescription: "As a direct importer and authorized distributor, Good Deal supplies a full range of premium fire safety equipment. From portable extinguishers to heavy-duty fire pumps and valves, we provide genuine, globally certified products directly from the manufacturers.",
    image: "https://images.unsplash.com/photo-1760139546356-0a90390364d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RmlyZSUyMFNhZmV0eSUyMEVxdWlwbWVudCUyMFN1cHBseXxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Portable & Trolley Extinguishers", "UL/FM Approved Fire Pumps", "Grooved Fittings & Valves", "Fire Hoses & Hydrant Accessories"],
    benefits: ["100% genuine components", "Direct manufacturer warranties", "Competitive pricing", "Reliable supply chain"]
  },
  {
    id: 9,
    title: "Fire Safety Quality Assurance",
    description: "Strict adherence to IEC, NFPA, and BNBC compliance standards to provide unparalleled quality assurance in every project.",
    longDescription: "Quality Assurance is embedded into every layer of our operations. We conduct rigorous quality control checks throughout the procurement, installation, and handover phases, ensuring every component meets stringent international and local safety standards.",
    image: "https://media.istockphoto.com/id/2260152685/photo/safety-first-warning-sign-in-hands-workplace-protection-and-occupational-health-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZgmOMeqB0kZU7g6qpVFBR5Zv40F6tGaeBEFINuxpgfU=",
    features: ["Material Verification & Tracking", "Installation Quality Audits", "Compliance Documentation", "Continuous Training Programs"],
    benefits: ["Zero-compromise on safety", "Long-term durability", "Audit-ready documentation", "Enhanced corporate reputation"]
  }
];
