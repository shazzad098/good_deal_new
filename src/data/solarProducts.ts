export interface SolarProduct {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  benefits: string[];
}

export const solarProducts: SolarProduct[] = [
  {
    id: 1,
    title: "Utility Scale Solar Power Plant",
    description: "Large-scale solar installations designed to generate bulk power for the grid, maximizing energy output and land utilization.",
    longDescription: "Our Utility-Scale Solar Power Plant solutions are engineered for maximum energy generation and seamless grid integration. We provide end-to-end EPC services including site assessment, custom engineering, high-voltage substations, and long-term O&M to ensure high yield and consistent performance over the plant's lifetime.",
    image: "https://images.unsplash.com/photo-1629726797843-618688139f5a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["High-Efficiency Photovoltaic Modules", "Centralized and String Inverter Options", "SCADA Integration & Real-time Monitoring", "Automated Panel Cleaning Systems"],
    benefits: ["Massive reduction in carbon footprint", "Utility-grade reliability and uptime", "Optimized Levelized Cost of Energy (LCOE)", "Turnkey project execution"]
  },
  {
    id: 2,
    title: "Industrial Rooftop PV System",
    description: "Optimized solar systems for industrial facilities, reducing operational costs and carbon footprint efficiently.",
    longDescription: "Transform your industrial facility's idle roof space into a powerful energy-generating asset. Our Industrial Rooftop PV Systems are custom-designed to match your load profile, significantly reducing grid dependence, lowering operational expenses, and aiding in 'Green Factory' certifications.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1200",
    features: ["Non-penetrative Roof Mounting Structures", "Net-Metering Ready Infrastructure", "Smart Inverters with Grid-Tie Capability", "Zero-Export Device Integration"],
    benefits: ["Drastic reduction in electricity bills", "Hedge against rising energy costs", "Enhanced corporate sustainability profile", "Minimal disruption during installation"]
  },
  {
    id: 3,
    title: "Battery Energy Storage System",
    description: "Advanced energy storage solutions ensuring reliable power supply and grid stability around the clock.",
    longDescription: "Mitigate intermittency and ensure uninterrupted power supply with our advanced Battery Energy Storage Systems (BESS). Designed to store excess solar energy for use during peak demand or grid outages, our BESS solutions offer peak shaving, load leveling, and essential backup power.",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1200",
    features: ["Lithium-Ion & Advanced Flow Batteries", "Intelligent Battery Management System (BMS)", "Seamless Off-Grid Transitioning", "Scalable Containerized Solutions"],
    benefits: ["Energy independence during grid failures", "Avoidance of peak demand charges", "Maximized solar self-consumption", "Extended equipment lifespan via stable voltage"]
  },
  {
    id: 4,
    title: "Residential PV Solution",
    description: "Tailored solar power systems for homes, bringing sustainable and independent energy to your household.",
    longDescription: "Empower your home with clean, renewable energy. Our Residential PV Solutions are aesthetically designed, highly efficient, and integrated with smart home technologies. Enjoy significant savings on your utility bills while contributing to a sustainable future.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200",
    features: ["Aesthetic & Low-Profile Solar Panels", "Hybrid Inverters with Battery Compatibility", "Mobile App for Energy Monitoring", "Weather-Resistant Mounting Hardware"],
    benefits: ["Lower monthly electricity bills", "Increased property value", "Protection against power outages", "Simple, hassle-free maintenance"]
  },
  {
    id: 5,
    title: "Solar Irrigation System",
    description: "Eco-friendly solar-powered pumps and irrigation setups to support sustainable agricultural practices.",
    longDescription: "Revolutionize agricultural water management with our Solar Irrigation Systems. Designed to replace expensive diesel pumps, these systems provide a reliable, maintenance-free, and zero-emission water supply for crops, ensuring food security and higher profit margins for farmers.",
    image: "https://media.istockphoto.com/id/1322433940/photo/solar-panels-which-can-run-submerge-water-pump-for-irrigation-and-distribution-of-water-in.jpg?s=612x612&w=0&k=20&c=ARL_MdUeMQ06smgbYUnlDDRa3mq3txPxvrX6JFp7ov4=",
    features: ["High-Efficiency Submersible & Surface Pumps", "Variable Frequency Drive (VFD) Controllers", "Dry-Run Protection Sensors", "Durable, Rust-Proof Mounting Structures"],
    benefits: ["Elimination of fuel costs", "Quiet and clean operation", "Low maintenance requirements", "Consistent water delivery during sunlight hours"]
  },
  {
    id: 6,
    title: "Floating Solar PV System",
    description: "Innovative solar installations on water bodies, saving land space and increasing panel efficiency through natural cooling.",
    longDescription: "Maximize energy generation without utilizing valuable land. Our Floating Solar PV Systems are installed on lakes, reservoirs, and industrial ponds. The natural cooling effect of the water increases panel efficiency, while the panels reduce water evaporation—a perfect synergy of resource conservation.",
    image: "https://media.istockphoto.com/id/2244092029/photo/drone-view-of-floating-solar-panel-solar-photovoltaic-panel-pv-system-in-industry-lake-water.jpg?s=612x612&w=0&k=20&c=H3hF5HaAGXnub8SPTKCrIEW3YSIaZ_qP54FAOvmPxu8=",
    features: ["High-Density Polyethylene (HDPE) Floats", "Mooring & Anchoring Engineering", "Marine-Grade Cable Management", "Enhanced Yield via Water Cooling"],
    benefits: ["Preservation of terrestrial land", "Increased energy output by up to 10%", "Reduction of algae growth in water bodies", "Environmentally symbiotic design"]
  },
  {
    id: 7,
    title: "Building Integrated PV solution",
    description: "Seamlessly integrated solar panels into building architecture, combining aesthetic design with energy generation.",
    longDescription: "Building Integrated Photovoltaics (BIPV) blend solar technology directly into building materials like facades, canopies, and skylights. This innovative solution replaces conventional building materials with energy-generating glass, delivering architectural elegance alongside renewable power.",
    image: "https://media.istockphoto.com/id/2159449289/photo/office-building-rooftop-solar-power-generation.jpg?s=612x612&w=0&k=20&c=i79dSNpDecCtn_OJ69Y8PCMTtdqwqOwHbP9fN-Oz9zc=",
    features: ["Semi-Transparent Solar Glass", "Customizable Shapes and Colors", "Thermal and Acoustic Insulation Properties", "Seamless Architectural Integration"],
    benefits: ["Dual-purpose material cost savings", "Striking, modern aesthetics", "Compliance with green building standards", "Maximized use of building envelope"]
  },
  {
    id: 8,
    title: "Solar Carport & EV Solution",
    description: "Dual-purpose solar structures that provide shade for vehicles while generating clean energy for EV charging.",
    longDescription: "Transform parking lots into green energy hubs. Our Solar Carports provide protective shade for vehicles while simultaneously generating electricity. Paired with our integrated EV charging stations, this solution creates a closed-loop, sustainable ecosystem for modern mobility.",
    image: "https://media.istockphoto.com/id/2220975356/photo/aaerial-view-of-solar-panels-installed-as-shade-roof-over-parking-lot-for-parked-cars.jpg?s=612x612&w=0&k=20&c=d-Qt0MI-ZZAoKpq4cAQobnlY9CxKrqzjE-vPWtlnP88=",
    features: ["Robust Steel Canopy Structures", "Integrated Level 2 or DC Fast Chargers", "Smart Load Balancing Technology", "Weatherproof & Water-tight Designs"],
    benefits: ["Protection of vehicles from elements", "Visible commitment to sustainability", "Revenue generation via EV charging", "Efficient use of existing parking space"]
  },
  {
    id: 9,
    title: "Energy Monitoring System",
    description: "Real-time tracking and analytics platforms to optimize energy consumption and system performance.",
    longDescription: "Knowledge is power. Our Energy Monitoring Systems provide granular, real-time insights into your energy generation and consumption. Using advanced IoT sensors and cloud-based analytics, we help you identify inefficiencies, predict maintenance needs, and optimize your overall energy profile.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    features: ["Cloud-Based Analytics Dashboard", "IoT Enabled Smart Meters", "Automated Alerts & Reporting", "Multi-site Aggregation"],
    benefits: ["Identification of energy waste", "Proactive system maintenance", "Data-driven operational decisions", "Easy compliance reporting"]
  },
  {
    id: 10,
    title: "SCADA Solution",
    description: "Supervisory Control and Data Acquisition systems for precise management and control of solar infrastructure.",
    longDescription: "For utility-scale and complex industrial setups, precision control is mandatory. Our SCADA (Supervisory Control and Data Acquisition) solutions offer centralized monitoring and remote command execution, ensuring grid compliance, maximizing plant availability, and securing energy assets.",
    image: "https://media.istockphoto.com/id/2270785686/photo/workers-checking-steel-material-at-power-transmission-tower-construction-site.jpg?s=612x612&w=0&k=20&c=TRSdmHc_PKkv0YrCSG5JD5yDZ08cKdqfPwMJWm-hxSE=",
    features: ["High-Speed Data Acquisition", "Grid Code Compliance Control (P/Q Control)", "Custom HMI (Human-Machine Interface)", "Redundant Network Architectures"],
    benefits: ["Complete remote operability", "Maximized plant yield", "Rapid fault localization", "High-level cyber security protocols"]
  }
];
