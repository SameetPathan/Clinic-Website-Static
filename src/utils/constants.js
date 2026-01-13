// Clinic Information
export const CLINIC_NAME = "AdityaClinic";
export const CLINIC_TAGLINE = "Your Smile, Our Passion";

// Contact Information
export const CONTACT_INFO = {
  address: "123 Health Street, Medical District, City 12345",
  phone: "+1 (555) 123-4567",
  email: "info@adityaclinic.com",
  workingHours: {
    weekdays: "Mon - Fri: 9:00 AM - 6:00 PM",
    saturday: "Sat: 9:00 AM - 4:00 PM",
    sunday: "Sun: Closed"
  }
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/adityaclinic",
  instagram: "https://instagram.com/adityaclinic",
  twitter: "https://twitter.com/adityaclinic",
  linkedin: "https://linkedin.com/company/adityaclinic"
};

// Services Data
export const DENTAL_SERVICES = [
  {
    id: 1,
    name: "General Dentistry",
    slug: "general-dentistry",
    description: "Comprehensive dental care including routine checkups, cleanings, and preventive treatments.",
    services: ["Routine checkups", "Dental cleaning", "Cavity fillings", "Tooth extractions"],
    image: "https://images.unsplash.com/photo-1606811971618-4486c4e32d89?w=800"
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    description: "Transform your smile with our advanced cosmetic dental procedures.",
    services: ["Teeth whitening", "Veneers", "Dental bonding", "Smile makeovers"],
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800"
  },
  {
    id: 3,
    name: "Orthodontics",
    slug: "orthodontics",
    description: "Straighten your teeth with modern orthodontic solutions.",
    services: ["Braces (metal, ceramic)", "Invisalign/Clear aligners", "Retainers"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800"
  },
  {
    id: 4,
    name: "Restorative Dentistry",
    slug: "restorative-dentistry",
    description: "Restore function and aesthetics to damaged or missing teeth.",
    services: ["Dental crowns", "Bridges", "Dentures", "Dental implants"],
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800"
  },
  {
    id: 5,
    name: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    description: "Specialized dental care for children in a comfortable environment.",
    services: ["Children's dental care", "Preventive treatments", "Education programs"],
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800"
  }
];

export const COSMETOLOGY_SERVICES = [
  {
    id: 6,
    name: "Skin Care",
    slug: "skin-care",
    description: "Rejuvenate and maintain healthy, glowing skin with our advanced treatments.",
    services: ["Facials", "Chemical peels", "Microdermabrasion", "Anti-aging treatments"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800"
  },
  {
    id: 7,
    name: "Hair Care",
    slug: "hair-care",
    description: "Professional hair styling and treatment services.",
    services: ["Hair styling", "Hair treatments", "Hair coloring", "Keratin treatments"],
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800"
  },
  {
    id: 8,
    name: "Aesthetic Treatments",
    slug: "aesthetic-treatments",
    description: "Advanced aesthetic procedures for a youthful appearance.",
    services: ["Botox", "Dermal fillers", "Laser treatments", "Skin rejuvenation"],
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800"
  },
  {
    id: 9,
    name: "Body Treatments",
    slug: "body-treatments",
    description: "Relax and rejuvenate with our comprehensive body treatment services.",
    services: ["Massage therapy", "Body contouring", "Spa treatments"],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800"
  }
];

export const ALL_SERVICES = [...DENTAL_SERVICES, ...COSMETOLOGY_SERVICES];

// Team Members
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Dr. Aditya Sharma",
    designation: "Chief Dentist & Founder",
    specialization: "Cosmetic & General Dentistry",
    qualifications: "BDS, MDS (Cosmetic Dentistry)",
    experience: "15+ Years",
    bio: "Leading expert in cosmetic dentistry with over 15 years of experience.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
  },
  {
    id: 2,
    name: "Dr. Priya Patel",
    designation: "Senior Orthodontist",
    specialization: "Orthodontics & Invisalign",
    qualifications: "BDS, MDS (Orthodontics)",
    experience: "12+ Years",
    bio: "Specialized in modern orthodontic treatments and smile correction.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    designation: "Cosmetologist",
    specialization: "Aesthetic & Skin Treatments",
    qualifications: "MBBS, Diploma in Cosmetology",
    experience: "10+ Years",
    bio: "Expert in advanced aesthetic procedures and skin rejuvenation.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400"
  },
  {
    id: 4,
    name: "Dr. Anjali Verma",
    designation: "Pediatric Dentist",
    specialization: "Children's Dental Care",
    qualifications: "BDS, MDS (Pediatric Dentistry)",
    experience: "8+ Years",
    bio: "Dedicated to providing gentle and effective dental care for children.",
    image: "https://images.unsplash.com/photo-1594824476968-48df8a47c52f?w=400"
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    service: "Teeth Whitening",
    rating: 5,
    text: "Amazing experience! The staff was professional and the results exceeded my expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
  },
  {
    id: 2,
    name: "Michael Chen",
    service: "Dental Implants",
    rating: 5,
    text: "Best dental clinic in town. Dr. Aditya is highly skilled and caring.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
  },
  {
    id: 3,
    name: "Emily Davis",
    service: "Facial Treatment",
    rating: 5,
    text: "My skin has never looked better! The cosmetology team is fantastic.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
  },
  {
    id: 4,
    name: "James Wilson",
    service: "Invisalign",
    rating: 5,
    text: "Invisalign treatment was smooth and painless. Highly recommend!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    service: "Hair Treatment",
    rating: 5,
    text: "Professional service and excellent results. Will definitely come back!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200"
  }
];

// Statistics
export const STATISTICS = [
  { label: "Happy Patients", value: "500+", icon: "FaUsers" },
  { label: "Years Experience", value: "10+", icon: "FaAward" },
  { label: "Specialists", value: "15+", icon: "FaUserMd" },
  { label: "Services", value: "50+", icon: "FaStethoscope" }
];

// Why Choose Us Features
export const WHY_CHOOSE_US = [
  {
    title: "Expert Team",
    description: "Highly qualified and experienced professionals",
    icon: "FaUserMd"
  },
  {
    title: "Modern Technology",
    description: "State-of-the-art equipment and latest techniques",
    icon: "FaMicroscope"
  },
  {
    title: "Affordable Pricing",
    description: "Competitive prices with flexible payment options",
    icon: "FaDollarSign"
  },
  {
    title: "Comfortable Environment",
    description: "Relaxing atmosphere for your peace of mind",
    icon: "FaHeart"
  },
  {
    title: "Emergency Care",
    description: "Available for urgent dental and medical needs",
    icon: "FaClock"
  },
  {
    title: "Patient-Centered",
    description: "Personalized care tailored to your needs",
    icon: "FaHandHoldingHeart"
  }
];

