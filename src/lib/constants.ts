export interface Branch {
  city: string;
  state: string;
  stateCode: string;
  contactPerson: string;
  phone: string;
  phoneRaw: string;
  address: string;
  pincode: string;
  email?: string;
  isHeadquarter?: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  features: string[];
}

export interface ClientItem {
  name: string;
  location: string;
  sector: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  location: string;
  cargo: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  stats: { label: string; value: string };
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const COMPANY = {
  name: "YES LOGISTICS SERVICE",
  shortName: "YLS",
  tagline: "AN ENTIRE LOGISTICS SOLUTION",
  businessType: "Fleet Owner & Transport Contractor",
  speciality: "ODC Consignment Specialist across India",
  established: "1 July 2021",
  establishedYear: 2021,
  primaryPhone: "+91 7021277197",
  additionalPhone: "+91 7020057149",
  email: "ylspune@gmail.com",
  registeredOffice: {
    address: "CTS 1937 S1 Nilratna Apt BLD 2F",
    area: "Chinchwad Gaon",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411033",
    full: "CTS 1937 S1 Nilratna Apt BLD 2F, Chinchwad, Pune 411033, Maharashtra",
  },
  registration: {
    firmType: "Fleet Owner & Transport Contractor",
    pan: "AYYPM*****",
    gst: "27AYYPM*****1ZH",
    udyam: "UDAM-MH-26-0145431",
    shopAct: "2131000315404073",
    bank: "HDFC Bank LTD",
  },
  colors: {
    darkNavy: "#06112E",
    navyBlue: "#07152F",
    orangeRed: "#F15A38",
    brandYellow: "#F8C62E",
    logoBlue: "#175A9D",
    white: "#FFFFFF",
    lightBg: "#F5F7FA",
    mutedText: "#6C7890",
  },
};

export const BRANCHES: Branch[] = [
  {
    city: "Pune",
    state: "Maharashtra",
    stateCode: "MH",
    contactPerson: "Mr. Sandeep Kumar",
    phone: "+91 7888190624",
    phoneRaw: "+917888190624",
    address: "CTS 1937 1S Nilratan Apt, Chinchwad Gaon",
    pincode: "411033",
    email: "ylspune@gmail.com",
    isHeadquarter: true,
  },
  {
    city: "Bangalore",
    state: "Karnataka",
    stateCode: "KA",
    contactPerson: "Mr. Dheeraj Shukla",
    phone: "+91 9415819488",
    phoneRaw: "+919415819488",
    address: "205 Block 2nd Floor Himalaya Plaza",
    pincode: "560053",
    email: "yls.bangalore@gmail.com",
  },
  {
    city: "Vadodara",
    state: "Gujarat",
    stateCode: "GJ",
    contactPerson: "Mr. Umesh Chandra",
    phone: "+91 8469001491",
    phoneRaw: "+918469001491",
    address: "B51 Kailash Pati Society, Ranoli",
    pincode: "391350",
    email: "yls.vadodara@gmail.com",
  },
  {
    city: "Jeypore",
    state: "Odisha",
    stateCode: "OD",
    contactPerson: "Mr. Vineet Mishra",
    phone: "+91 9337474004",
    phoneRaw: "+919337474004",
    address: "Near Prashad Rao Peta, Sombartota Koraput",
    pincode: "764001",
    email: "yls.jeypore@gmail.com",
  },
  {
    city: "Prayagraj",
    state: "Uttar Pradesh",
    stateCode: "UP",
    contactPerson: "Mr. Aniket Mishra",
    phone: "+91 8858899855",
    phoneRaw: "+918858899855",
    address: "C2/70 Awantika Avash, Naini",
    pincode: "211008",
    email: "yls.prayagraj@gmail.com",
  },
];

export const CLIENTS: ClientItem[] = [
  { name: "Belden India Private Limited", location: "Chakan, Pune", sector: "Industrial Cables" },
  { name: "DVB Design Engineering", location: "Hyderabad", sector: "Engineering Services" },
  { name: "Eagle Construction", location: "Aurangabad", sector: "Infrastructure" },
  { name: "Furnace & Foundry Equipment Co", location: "Chakan, Pune", sector: "Heavy Machinery" },
  { name: "Gujrat Copper Alloys Ltd", location: "Silvassa", sector: "Metals & Alloys" },
  { name: "Garden Reach Ship Builders & Engineers Ltd", location: "Kolkata", sector: "Marine & Defense" },
  { name: "Hari Om Tech", location: "Kolhapur", sector: "Precision Engineering" },
  { name: "Hindustan Earth Movers", location: "Aurangabad", sector: "Earthmoving Equipment" },
  { name: "Jai Hind Build Con", location: "Aurangabad", sector: "Civil Infrastructure" },
  { name: "KSH International Pvt. Ltd.", location: "Chakan, Pune", sector: "Electrical Components" },
  { name: "Kala Genset Pvt Ltd", location: "Chakan, Pune", sector: "Power Generation" },
  { name: "Laxmi Hydraulics Pvt. Ltd", location: "Solapur", sector: "Hydraulic Systems" },
  { name: "Magna Automotive India Pvt Ltd", location: "Pune", sector: "Automotive" },
  { name: "Muteseal Acoustics Private Limited", location: "Chakan, Pune", sector: "Acoustics" },
  { name: "Mithra Construction Equipment Company", location: "Hyderabad", sector: "Construction Fleet" },
  { name: "Megha Engineering and Infrastructures Limited", location: "Hyderabad", sector: "Mega Infra Projects" },
  { name: "Royal Earth Movers", location: "Aurangabad", sector: "Heavy Vehicles" },
  { name: "4 Squares Corporation", location: "Bangalore", sector: "Logistics & Supply" },
  { name: "Shalimar Construction", location: "Aurangabad", sector: "General Contracting" },
  { name: "Wilo Mather and Platt Pumps Pvt. Ltd.", location: "Chinchwad, Pune", sector: "Industrial Pumps" },
];

export const CLIENT_LOGOS: { name: string; logo: string }[] = [
  { name: "4 Squares Corporation", logo: "/images/clients/4-squares-corporation.jpeg" },
  { name: "ACE Coating India Pvt Ltd", logo: "/images/clients/ace-coating-india.jpg" },
  { name: "AIVA Engineering Pvt Ltd", logo: "/images/clients/aiva-engineering.jpeg" },
  { name: "Aqualinks", logo: "/images/clients/aqualinks.png" },
  { name: "Aryavarta Enterprises", logo: "/images/clients/aryavarta-enterprises.jpeg" },
  { name: "CEVA Logistics India", logo: "/images/clients/ceva-logistics-india.jpeg" },
  { name: "Cygnii Automation Pvt Ltd", logo: "/images/clients/cygnii-automation.avif" },
  { name: "DAIVA Engineering Pvt Ltd", logo: "/images/clients/daiva-engineering.jpeg" },
  { name: "DVB Design Engineering", logo: "/images/clients/dvb-design-engineering.jpeg" },
  { name: "Eagle Construction", logo: "/images/clients/eagle-construction.avif" },
  { name: "Hari Om Tech", logo: "/images/clients/hari-om-tech.png" },
  { name: "Indian Cables & Electricals", logo: "/images/clients/indian-cables-electricals.jpeg" },
  { name: "KSH International", logo: "/images/clients/ksh-international.jpg" },
  { name: "Leadec India Pvt Ltd", logo: "/images/clients/leadec-india.png" },
  { name: "Mahindra", logo: "/images/clients/mahindra.jpg" },
  { name: "Muteseal Acoustics Pvt Ltd", logo: "/images/clients/muteseal-acoustics.png" },
  { name: "NEEC Electrotech Pvt Ltd", logo: "/images/clients/neec-electrotech.png" },
  { name: "Pietro Fiorentini DB India", logo: "/images/clients/pietro-fiorentini-india.jpeg" },
  { name: "Push Engineering Pvt Ltd", logo: "/images/clients/push-engineering.jpeg" },
  { name: "Wilo Mather and Platt Pumps", logo: "/images/clients/wilo-mather-platt.jpg" },
];

export interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

// Real fleet & operations photos (YLS own fleet)
export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/work/work-01.jpeg", title: "ODC Loading at Warehouse Dock", category: "ODC Movement" },
  { src: "/images/work/work-02.jpeg", title: "Fleet Ready for Dispatch", category: "Fleet" },
  { src: "/images/work/work-03.jpeg", title: "Container Freight Movement", category: "Container Freight" },
  { src: "/images/work/work-04.jpeg", title: "Night ODC Dispatch", category: "ODC Movement" },
  { src: "/images/work/work-05.jpeg", title: "Covered Cargo on Highway", category: "Fleet" },
  { src: "/images/work/work-06.jpeg", title: "Cable Reels on Multi-Axle Trailer", category: "ODC Movement" },
  { src: "/images/work/work-07.jpeg", title: "Palletised Cargo Dispatch", category: "Fleet" },
  { src: "/images/work/work-08.jpeg", title: "Flatbed Trailer with Containers", category: "Container Freight" },
  { src: "/images/work/work-09.jpeg", title: "Trailer at Industrial Yard", category: "Fleet" },
  { src: "/images/work/work-10.jpeg", title: "Low-Bed Trailer with Machinery", category: "ODC Movement" },
  { src: "/images/work/work-11.jpeg", title: "Escort Vehicle Ready for Convoy", category: "Escort Service" },
  { src: "/images/work/work-12.jpeg", title: "Truck at Warehouse Dock", category: "Warehousing" },
  { src: "/images/work/work-13.jpeg", title: "Pipeline Cargo on Trailer", category: "ODC Movement" },
  { src: "/images/yls/yls-odc-trailer.jpg", title: "ODC Trailer at Client Site", category: "ODC Movement" },
  { src: "/images/yls/yls-heavy-loading.jpg", title: "Crane Loading Operations", category: "ODC Movement" },
  { src: "/images/yls/yls-warehouse-racks.jpg", title: "Warehouse Racking System", category: "Warehousing" },
];

export const PRIMARY_SERVICES: ServiceItem[] = [
  {
    id: "fleet-truck",
    slug: "fleet-truck-services",
    number: "01",
    title: "Fleet & Truck Services",
    shortDesc: "Comprehensive fleet of normal, open body, Taurus, and mini trucks provided at short notice for any destination across India.",
    fullDesc: "We provide all types of transport vehicles like mini trucks, standard trucks, open body trucks, Taurus, and high-capacity freight carriers covered under the Motor Vehicle Act. We arrange rapid material movement from any destination outside Pune with the help of our all-India network.",
    iconName: "Truck",
    image: "/images/work/work-02.jpeg",
    features: [
      "Open Body & Closed Body Trucks",
      "Multi-axle Taurus (16T to 25T)",
      "Mini Trucks for quick urban transit",
      "Full truckload (FTL) & part load options",
      "Experienced field staff and drivers",
    ],
  },
  {
    id: "odc-consignment",
    slug: "odc-consignment-specialist",
    number: "02",
    title: "ODC Consignment",
    shortDesc: "All-India specialist in Over Dimensional Cargo (ODC) movement using hydraulic axles, low-bed and multi-axle mechanical trailers.",
    fullDesc: "YES LOGISTICS SERVICE is recognized as an ODC consignment specialist across India. We manage complex heavy-lift cargo, structural steel, industrial boilers, turbines, transformers, and girder transport with route surveys and precision planning.",
    iconName: "ShieldAlert",
    image: "/images/work/work-06.jpeg",
    features: [
      "Hydraulic Multi-Axle Trailers",
      "Low Bed & Semi-Low Bed Trailers",
      "Turnkey Route Surveys & Permits",
      "Trained Heavy Haulage Engineers",
      "100% Safety Compliance Under M.V. Act",
    ],
  },
  {
    id: "warehousing",
    slug: "warehousing-storage",
    number: "03",
    title: "Warehousing & Storage",
    shortDesc: "Covered and open yard storage facilities in Pune for safe custody, inventory staging, and transit management.",
    fullDesc: "Modern covered warehouse and open yard facilities in Pune designed to store raw materials, finished machinery, and heavy equipment in safe, weather-protected conditions. We arrange storage and transit insurance under our open policy.",
    iconName: "Warehouse",
    image: "/images/yls/yls-warehouse-racks.jpg",
    features: [
      "Covered Warehousing in Pune industrial corridor",
      "Expansive Open Storage Yard",
      "Material Handling Equipment & Cranes",
      "Inventory staging & consignment consolidation",
      "Transit and storage insurance support",
    ],
  },
  {
    id: "escort-safety",
    slug: "escort-safety-services",
    number: "04",
    title: "Escort & Safety Services",
    shortDesc: "Dedicated pilot vehicles, escort personnel, and crane arrangements for loading and unloading at destination sites.",
    fullDesc: "We provide dedicated escort vehicles and field staff for sensitive and over-dimensional consignments across state highways. Furthermore, we arrange heavy mobile cranes at pickup and destination sites at competitive rates.",
    iconName: "ShieldCheck",
    image: "/images/work/work-11.jpeg",
    features: [
      "Pilot and escort vehicle deployment",
      "Hydraulic & mobile crane arrangements",
      "Loading & unloading supervision by specialists",
      "Civil and traffic coordination on route",
      "Round-the-clock emergency field assistance",
    ],
  },
];

export const ALL_SERVICES: ServiceItem[] = [
  ...PRIMARY_SERVICES,
  {
    id: "trailer-services",
    slug: "mechanical-trailer-services",
    number: "05",
    title: "Trailer Services",
    shortDesc: "Mechanical trailers of various capacities registered under the Motor Vehicles Act for pan-India logistics.",
    fullDesc: "High capacity 40ft and 50ft mechanical flatbed and semi-bed trailers engineered for long-distance industrial logistics across all states in India.",
    iconName: "Container",
    image: "/images/work/work-10.jpeg",
    features: ["40ft & 50ft Flatbed Trailers", "Semi-low bed mechanical trailers", "Pan-India national permits"],
  },
  {
    id: "port-export",
    slug: "export-port-transportation",
    number: "06",
    title: "Export & Port Transportation",
    shortDesc: "Standard and non-standard cargo movement to all major ports in India under expert supervision.",
    fullDesc: "Specialized port carting and transport services to JNPT / Nhava Sheva, Mumbai Port, Kandla, Mundra, Kolkata, and Chennai ports with documentation support.",
    iconName: "Ship",
    image: "/images/work/work-08.jpeg",
    features: ["JNPT / Nhava Sheva Port Carting", "Standard & ODC Port Cargo", "Customs checkpoint coordination"],
  },
];

export const STATS = [
  { value: "05", label: "Branch Locations", sub: "Pune, BLR, Vadodara, Jeypore, Prayagraj", highlight: "5 States" },
  { value: "24/7", label: "Response Support", sub: "Dedicated Field Coordination", highlight: "Always On" },
  { value: "100%", label: "Safety Focus", sub: "Under Motor Vehicles Act", highlight: "Zero Defect" },
  { value: "All India", label: "Transport Network", sub: "Fleet Operations Since 2021", highlight: "Pan-India" },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Select Services",
    desc: "Choose from our fleet, trailer, ODC consignment, or warehousing solutions suited for your cargo.",
    icon: "ClipboardList",
  },
  {
    step: "02",
    title: "Parcel Information",
    desc: "Provide consignment dimensions, weight, pickup location, destination, and delivery timeline.",
    icon: "PackageCheck",
  },
  {
    step: "03",
    title: "Transportation",
    desc: "Our experienced staff coordinates safe loading, pilot escorts, and timely delivery across India.",
    icon: "Truck",
  },
];

export const WHY_CHOOSE_US_POINTS = [
  "India-wide transport coverage with verified fleet network",
  "Experienced transport coordination and dedicated field staff",
  "Safe loading, unloading, and mobile crane arrangement",
  "Trailer and ODC heavy consignment specialist expertise",
  "Transparent communication with direct phone numbers for branch heads",
  "Reliable branch support in Pune, Bangalore, Vadodara, Jeypore, and Prayagraj",
];

export const TESTIMONIALS = [
  {
    quote:
      "YES Logistics Service has helped us coordinate dependable transportation, safe loading and timely delivery across multiple project locations. Their ODC trailer handling is second to none.",
    author: "Operations Head",
    company: "Industrial Engineering Client, Chakan MIDC",
    rating: 5,
    location: "Pune, Maharashtra",
  },
  {
    quote:
      "Moving heavy machinery interstate from Pune to Odisha was executed without a single hitch. Route surveys, escorts, and crane loading were all handled smoothly by their team.",
    author: "Project Logistics Manager",
    company: "Heavy Infrastructure Partner",
    rating: 5,
    location: "Jeypore & Kolkata Route",
  },
  {
    quote:
      "Extremely responsive fleet owner. Whenever we require mechanical trailers on short notice for plant consignments, YES Logistics Service delivers with total safety compliance.",
    author: "Supply Chain Director",
    company: "Capital Equipment Manufacturer",
    rating: 5,
    location: "Bangalore & Solapur Network",
  },
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: "odc-movements",
    slug: "planning-safer-odc-movements-across-india",
    title: "Planning Safer ODC Movements Across India",
    category: "ODC Transportation",
    date: "18 Sep 2026",
    author: "YLS Engineering Team",
    readTime: "5 min read",
    excerpt: "Over Dimensional Cargo requires technical route surveys, bridge load assessments, pilot escort planning, and multi-axle hydraulic trailer precision.",
    content: [
      "Transporting over-dimensional consignments (ODC) across Indian national and state highways requires technical foresight far beyond standard freight transport.",
      "Key factors include route survey audits, clearance under low-hanging overhead electrical cables, toll plaza lane widths, and bridge weight-bearing capabilities.",
      "YES LOGISTICS SERVICE provides end-to-end escort support and hydraulic axle configurations to guarantee consignments arrive securely.",
    ],
    image: "/images/yls/yls-odc-trailer.jpg",
  },
  {
    id: "reduce-transport-delays",
    slug: "how-to-reduce-transport-delays",
    title: "How to Reduce Transport Delays",
    category: "Fleet Optimization",
    date: "28 Aug 2026",
    author: "YLS Operations Desk",
    readTime: "4 min read",
    excerpt: "Proactive route dispatch, e-way bill pre-clearance, dedicated driver handovers, and reliable branch coordination eliminate transit bottlenecks.",
    content: [
      "In long-haul transportation across India, transit delays often stem from paperwork discrepancies, mechanical breakdowns, or inadequate loading preparation.",
      "By establishing direct branch managers in major transit states (Maharashtra, Karnataka, Gujarat, Odisha, Uttar Pradesh), YLS ensures immediate ground assistance.",
      "Proper crane mobilization at pickup and delivery ensures loading turnaround is kept to minimum hours.",
    ],
    image: "/images/yls/yls-heavy-loading.jpg",
  },
  {
    id: "why-warehousing-belongs",
    slug: "why-warehousing-belongs-in-your-logistics-plan",
    title: "Why Warehousing Belongs in Your Logistics Plan",
    category: "Supply Chain",
    date: "12 Aug 2026",
    author: "Pune Warehouse Facility",
    readTime: "6 min read",
    excerpt: "Combining strategic covered warehousing with flexible open storage yards optimizes inventory flow and prevents weather damage for industrial consignments.",
    content: [
      "A resilient logistics pipeline requires strategic staging hubs. Warehouses serve as consolidation centers where consignments are batched and checked prior to long journeys.",
      "Our Pune facility offers both covered high-rack storage and open yard space suitable for structural machinery, finished fabrications, and transit insurance protection.",
    ],
    image: "/images/yls/yls-warehouse-racks.jpg",
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "odc-girder",
    slug: "odc-movement-planning",
    category: "ODC Heavy Haulage",
    title: "ODC Girder & Heavy Structure Movement",
    location: "Chakan to Western Industrial Corridor",
    cargo: "52-Meter Industrial Crane Girder",
    challenge: "Navigating sharp turns, urban flyovers, and uneven industrial access roads with a 52m rigid structure.",
    solution: "Deployed specialized multi-axle steerable trailer with front and rear pilot escort vehicles and prior route audit.",
    result: "Delivered 12 hours ahead of schedule with zero transit disruption and flawless client site offloading.",
    image: "/images/work/work-04.jpeg",
    stats: { label: "Consignment Length", value: "52 Meters" },
  },
  {
    id: "warehouse-inventory",
    slug: "warehouse-inventory",
    category: "Warehousing & Staging",
    title: "Covered Warehouse Inventory Staging",
    location: "Chinchwad & Pune Yard",
    cargo: "High-value Precision Pump Assemblies",
    challenge: "Client required 45-day phased dispatch with weather-tight storage and daily inventory tracking.",
    solution: "Consolidated stock in YLS covered warehouse with open storage crane access for immediate truck carting.",
    result: "100% stock integrity maintained with zero weather exposure and just-in-time dispatch to project sites.",
    image: "/images/yls/yls-warehouse-racks.jpg",
    stats: { label: "Safe Storage Area", value: "25,000+ Sq Ft" },
  },
  {
    id: "fleet-delivery",
    slug: "fleet-delivery-network",
    category: "Pan-India Freight",
    title: "Multi-State Fleet Delivery Network",
    location: "Pune to Bangalore, Vadodara, Jeypore, Prayagraj",
    cargo: "Industrial Castings & Machinery",
    challenge: "Simultaneous dispatches to 5 states requiring synchronized delivery windows.",
    solution: "Mobilized company-owned fleet and Taurus vehicles backed by local branch coordinators in each state.",
    result: "Full consignment delivered with transparent milestone tracking and signed delivery dockets.",
    image: "/images/work/work-08.jpeg",
    stats: { label: "On-Time Ratio", value: "99.4%" },
  },
  {
    id: "safe-cargo-handover",
    slug: "safe-cargo-handover",
    category: "Crane & Loading",
    title: "Safe Cargo Handover & Heavy Crane Deployment",
    location: "Industrial Docks to Project Plant",
    cargo: "Pressurized Reaction Vessels & Transformers",
    challenge: "Lack of overhead crane infrastructure at recipient rural unloading site.",
    solution: "YES Logistics Service pre-arranged a 50-ton hydraulic mobile crane at the site prior to trailer arrival.",
    result: "Smooth tandem offloading completed in 3 hours with certified riggers and safety engineers.",
    image: "/images/work/work-10.jpeg",
    stats: { label: "Crane Capacity", value: "50-Ton Hydra" },
  },
];
