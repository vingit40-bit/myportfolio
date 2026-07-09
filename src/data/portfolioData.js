import inventoryImage from '../assets/inventory.png';
import ecommerceImage from '../assets/ecommerce.png';
import sfcImage from '../assets/sfc.png';
import carrentalImage from '../assets/carrental.png';
import heroPhoto from '../assets/pic.jpg';
import aiCertificate from '../certificates/AI_Fundamentals_with_IBM_SkillsBuild_certificate_.pdf';
import dataAnalyticsCertificate from '../certificates/Data_Analytics_Essentials.pdf';
import databasesCertificate from '../certificates/Databases.pdf';
import englishIT1Certificate from '../certificates/English_for_IT_1.pdf';
import englishIT2Certificate from '../certificates/English_for_IT_2.pdf';
import packetTracerCertificate from '../certificates/Introduction_to_Packet_Tracer.pdf';

export const portfolioData = {
  hero: {
    name: "Alvin Panganiban",
    firstName: "Alvin",
    lastName: "Panganiban",
    photo: heroPhoto,
    title: "Web Developer",
    subtitle: "An Information Technology graduate specializing in Web Development",
    description: "I build responsive websites, practical business systems, and clean digital experiences using modern frontend and backend tools.",
    resume: "/assets/PANGANIBAN ALVIN - Resume.pdf",
    cta: {
      resume: "View Resume",
      contact: "Contact Me"
    },
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      email: "panganibanalvin4@gmail.com"
    }
  },

  about: {
    summary: "I am an Information Technology graduate with hands-on experience in website development, backend support, database work, and responsive interface design. I enjoy turning practical ideas into reliable systems that are easy to use.",
    objective: "My goal is to contribute to meaningful software projects where I can keep sharpening my skills in React, PHP, MySQL, and mobile development while helping teams deliver useful digital products.",
    details: [
      { label: "Name", value: "Alvin Panganiban" },
      { label: "Date of Birth", value: "March 4, 2004" },
      { label: "Address", value: "Pantalan, Nasugbu, Batangas" },
      { label: "Email", value: "panganibanalvin4@gmail.com" },
      { label: "Phone", value: "+63 993 478 1508" }
    ],
    funFacts: [
      "BS in Information Technology graduate",
      "Experience with PayMongo API integration",
      "Developed POS and e-commerce systems",
      "Knowledge in Python and face recognition"
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "PHP", "React.js", "React Native", "Tailwind CSS", "MySQL"
    ]
  },

  skills: {
    featured: [
      { name: "Web Design", icon: "LayoutTemplate" },
      { name: "Web Development", icon: "Code2" },
      { name: "Database Management", icon: "Database" },
      { name: "Mobile Development", icon: "Smartphone" },
      { name: "API Integration", icon: "Plug" },
      { name: "Backend Support", icon: "ServerCog" },
      { name: "Goal Setting", icon: "Goal" },
      { name: "Team Collaboration", icon: "Users" },
      { name: "Data Entry", icon: "FileText" }
    ],
    frontend: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React.js", level: 65 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 75 }
    ],
    backend: [
      { name: "PHP", level: 85 },
      { name: "Node.js", level: 60 },
      { name: "Express", level: 60 }
    ],
    database: [
      { name: "MySQL", level: 85 },
      { name: "SQLite", level: 70 }
    ],
    mobile: [
      { name: "React Native", level: 60 }
    ],
    tools: [
      { name: "Git", level: 75 },
      { name: "GitHub", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "XAMPP", level: 85 },
      { name: "Python", level: 65 }
    ]
  },

  experience: [
    {
      id: 1,
      title: "Web Developer Intern",
      company: "ProvideTech Brandwave Advertising Services",
      period: "2026",
      description: "Assisted in web development and backend support for responsive web applications.",
      achievements: [
        "Supported responsive web application development and backend maintenance.",
        "Integrated PayMongo API workflows for online payment functionality.",
        "Participated in debugging, testing, troubleshooting, and daily team development tasks.",
        "Worked with React, PHP, MySQL, and related web technologies."
      ]
    },
    {
      id: 2,
      title: "Capstone Developer",
      company: "EduSphere School Management System",
      period: "2025-2026",
      description: "Built school management features for private basic education workflows.",
      achievements: [
        "Developed modules for grading, guidance, discipline, and student record handling.",
        "Implemented Python-based face recognition for recording student violations.",
        "Created database-backed workflows for organized administrative records.",
        "Collaborated with teammates to refine functionality and presentation."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Inventory Management System",
      category: "Inventory System",
      description: "A comprehensive inventory system with employee management featuring payroll, cashier attendance tracking, and transaction handling.",
      features: ["Employee management", "Payroll system", "Cashier attendance", "Transaction handling"],
      techStack: [ "PHP", "MySQL"],
      image: inventoryImage,
      github: "https://github.com",
      demo: "https://miginventory.is-great.net"
    },
    {
      id: 2,
      title: "Beauty & Skincare E-Commerce Website",
      category: "E-Commerce",
      description: "A full e-commerce platform with product browsing, cart workflows, order handling, and PayMongo payment integration.",
      features: ["Product catalog", "PayMongo payments", "Shopping cart", "Order tracking"],
      techStack: ["PHP", "MySQL", "PayMongo API"],
      image: ecommerceImage,
      github: "https://github.com",
      demo: "https://jmshopee.is-great.net/"
    },
    {
      id: 3,
      title: "SFC Custom Landing Page",
      category: "Landing Page",
      description: "A customizable landing page with dynamic content management and responsive design.",
      features: ["Custom content", "Responsive design", "Dynamic sections", "Modern UI"],
      techStack: ["React", "Tailwind CSS"],
      image: sfcImage,
      github: "https://github.com",
      demo: "https://sfcfranchise.ph/"
    },
    {
      id: 5,
      title: "Car Rental Management System",
      category: "Booking system",
      description: "A comprehensive car rental management system with vehicle tracking, customer management, reservation handling, and payment processing.",
      features: ["Vehicle management", "Customer verification", "Reservation system", "Payment tracking"],
      techStack: ["PHP", "MySQL", "JavaScript"],
      image: carrentalImage,
      github: "https://github.com/vingit40-bit/carrental.git",
      demo: "Live preview not available"
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Information Technology",
      major: "Major in Business Analytics",
      institution: "Batangas State University - ARASOF Nasugbu Campus",
      period: "2022-2026",
      description: "Specialized in web development, database management, and business analytics.",
      location: "R. Martinez St., Brgy. Bucana, Nasugbu, Batangas"
    },
    {
      id: 2,
      degree: "Information and Communication Technology",
      major: "Senior High School",
      institution: "Pantalan Senior High School",
      period: "2021-2022",
      description: "Focused on ICT fundamentals and computer systems.",
      location: "Pantalan, Nasugbu, Batangas"
    }
  ],

  services: [],
  testimonials: [],
  certificates: [
    {
      id: 1,
      title: "AI Fundamentals with IBM SkillsBuild",
      issuer: "IBM",
      date: "2024",
      description: "Introduction to artificial intelligence concepts and IBM AI technologies.",
      file: aiCertificate
    },
    {
      id: 2,
      title: "Data Analytics Essentials",
      issuer: "Coursera",
      date: "2024",
      description: "Learned Excel, SQL, and Tableau for data transformation, organization, and visualization.",
      file: dataAnalyticsCertificate
    },
    {
      id: 3,
      title: "Information Technology Specialist in Databases",
      issuer: "Certiport",
      date: "2024",
      description: "Certified expertise in database management and SQL fundamentals.",
      file: databasesCertificate,
      blur: true
    },
    {
      id: 4,
      title: "English for IT 1",
      issuer: "Coursera",
      date: "2024",
      description: "B2 level English proficiency for IT professionals and workplace communication.",
      file: englishIT1Certificate
    },
    {
      id: 5,
      title: "English for IT 2",
      issuer: "Coursera",
      date: "2024",
      description: "Advanced B2 level English for technical IT contexts and professional use.",
      file: englishIT2Certificate
    },
    {
      id: 6,
      title: "Introduction to Packet Tracer",
      issuer: "Cisco",
      date: "2024",
      description: "Network simulation and configuration using Cisco Packet Tracer tool.",
      file: packetTracerCertificate
    }
  ],

  contact: {
    email: "panganibanalvin4@gmail.com",
    phone: "+63 993 478 1508",
    address: "Pantalan, Nasugbu, Batangas",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com"
    }
  },

  faqs: [],

  stats: [
    { value: 1, label: "Years Experience" },
    { value: 4, label: "Projects Completed" },
    { value: 4, label: "Certifications" },
    { value: 1, label: "Internship" }
  ]
};
