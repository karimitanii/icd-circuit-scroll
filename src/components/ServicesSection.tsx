import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const services = [
  {
    icon: "/lovable-uploads/services/business-consulting.png",
    title: "Digital & Business Consulting",
    description:
      "Strategic advisory across digital transformation, AI integration, smart infrastructure, and process reengineering.",
    slug: "digital-business-consulting",
    details: {
      overview:
        "ICD offers forward-thinking consulting services that help organizations unlock growth through digital transformation and strategic innovation. We work closely with businesses to design and implement scalable, data-driven strategies that leverage emerging technologies such as artificial intelligence, automation, and smart infrastructure. From operational optimization to business model reinvention, we provide the insights and tools to future-proof your enterprise.",
      benefits: [
        "Accelerated digital transformation with measurable ROI",
        "Smarter decision-making powered by data and AI",
        "Enhanced operational efficiency and cost reduction",
        "Seamless adaptation to market changes and tech trends",
        "Strengthened innovation capabilities and competitive edge",
      ],
      keyFeatures: [
        "Comprehensive digital maturity assessment and roadmap",
        "AI readiness and integration strategies",
        "Smart infrastructure and IT modernization planning",
        "Business process analysis and reengineering",
      ],
      approach: [
        {
          title: "Discovery & Analysis",
          description:
            "Deep dive into your business goals, challenges, and opportunities.",
        },
        {
          title: "Strategic Planning",
          description:
            "Develop a tailored roadmap that aligns technology with your business vision.",
        },
        {
          title: "Execution Support",
          description:
            "Collaborate with your team to implement and manage transformation initiatives.",
        },
        {
          title: "Review & Optimize",
          description:
            "Continuously monitor, refine, and scale the strategy based on results and feedback.",
        },
      ],
    },
  },
  {
    icon: "/lovable-uploads/services/automation.png",
    title: "Smart IT & Automation Systems",
    description:
      "Design and deployment of intelligent automation, IoT frameworks, and AI-driven control systems.",
    slug: "smart-it-automation",
    details: {
      overview:
        "At ICD, we specialize in transforming traditional processes into intelligent ecosystems through cutting-edge IT and automation solutions. By integrating Internet of Things (IoT), artificial intelligence, and smart control systems, we empower organizations to improve efficiency, reduce human error, and optimize real-time decision-making. Our solutions are scalable, secure, and customized to meet the unique needs of each client — whether in industrial automation, smart buildings, or connected infrastructure.",
      benefits: [
        "Increased operational efficiency and reduced downtime",
        "Real-time data monitoring and actionable insights",
        "Enhanced scalability and flexibility of systems",
        "Improved accuracy through AI-powered automation",
        "Energy savings and reduced environmental footprint",
      ],
      keyFeatures: [
        "End-to-end IoT and automation architecture design",
        "AI-based predictive maintenance and anomaly detection",
        "Integration with legacy and modern infrastructure",
        "Secure remote monitoring and device management",
      ],
      approach: [
        {
          title: "Consult & Assess",
          description:
            "We begin with a detailed consultation and analysis of your existing systems and needs.",
        },
        {
          title: "Custom Solution Design",
          description:
            "Our team designs a tailored solution leveraging the latest in AI, IoT, and automation technologies.",
        },
        {
          title: "Implementation & Integration",
          description:
            "We deploy and integrate the system seamlessly within your operations.",
        },
        {
          title: "Ongoing Optimization",
          description:
            "Continuous monitoring, support, and enhancement to ensure long-term performance and adaptability.",
        },
      ],
    },
  },
  {
    icon: "/lovable-uploads/services/software-dev.png",
    title: "Custom Software & Platform Development",
    description:
      "Scalable, secure, and modular applications tailored to enterprise and public-sector needs.",
    slug: "custom-software-development",
    details: {
      overview:
        "ICD develops robust and scalable software platforms designed for performance, security, and long-term adaptability. Whether you're a startup, enterprise, or public institution, we craft tailored software solutions that align with your operational goals and industry standards. Our agile development process ensures faster time-to-market, reliable codebases, and seamless integration with existing systems.",
      benefits: [
        "Custom-built to meet exact organizational requirements",
        "High scalability for future expansion and flexibility",
        "Secure architecture with industry best practices",
        "Modular design for easier maintenance and upgrades",
        "Enhanced user experiences through intuitive UI/UX",
      ],
      keyFeatures: [
        "Full-cycle software development (frontend, backend, DevOps)",
        "Enterprise-grade security and compliance",
        "Custom platform design with integration-ready APIs",
        "Ongoing support and post-launch enhancement",
      ],
      approach: [
        {
          title: "Requirement Gathering",
          description:
            "We collaborate to define objectives, user needs, and technical constraints.",
        },
        {
          title: "Agile Development",
          description:
            "Iterative development with frequent feedback loops for faster delivery.",
        },
        {
          title: "Quality Assurance",
          description:
            "Comprehensive testing to ensure stability, usability, and performance.",
        },
        {
          title: "Deployment & Maintenance",
          description:
            "Smooth launch followed by monitoring, updates, and feature rollouts.",
        },
      ],
    },
  },
  {
    icon: "/lovable-uploads/services/cloud.png",
    title: "Integrated Cloud & On-Premise Solutions",
    description:
      "Deployment and management of hybrid environments including AWS, Oracle, Microsoft Azure, and custom MCP infrastructures.",
    slug: "cloud-solutions",
    details: {
      overview:
        "ICD helps organizations design and manage cloud-first or hybrid infrastructures that combine the scalability of public cloud with the control of on-premise systems. We deliver seamless migration strategies, resilient architectures, and full lifecycle cloud management tailored to your technology environment—supporting AWS, Azure, Oracle Cloud, and private MCPs.",
      benefits: [
        "Optimized performance through hybrid infrastructure",
        "Greater control over data security and compliance",
        "Scalability with predictable cost models",
        "Seamless migration from legacy systems",
        "Centralized management and automation of IT operations",
      ],
      keyFeatures: [
        "Multi-cloud and hybrid architecture expertise",
        "Cloud security, backup, and DR strategy implementation",
        "Infrastructure as Code (IaC) and automation tooling",
        "Ongoing cost optimization and performance tuning",
      ],
      approach: [
        {
          title: "Assessment & Planning",
          description:
            "Evaluate existing infrastructure to build a cloud migration or hybrid strategy.",
        },
        {
          title: "Architecture & Design",
          description:
            "Design secure, resilient, and scalable infrastructure aligned with business needs.",
        },
        {
          title: "Deployment & Migration",
          description:
            "Execute cloud deployment or data migration with zero downtime.",
        },
        {
          title: "Optimization & Support",
          description:
            "Continual monitoring, cost control, and performance tuning post-launch.",
        },
      ],
    },
  },
  {
    icon: "/lovable-uploads/services/fintech.png",
    title: "Fintech & Digital Payment Systems",
    description:
      "Implementation of secure financial technologies including digital wallets, core banking integrations, and e-payment gateways.",
    slug: "fintech-payment-systems",
    details: {
      overview:
        "ICD delivers secure and scalable fintech solutions that empower businesses and governments to modernize financial transactions. From mobile wallets and QR payment gateways to core banking integrations and e-invoicing systems, our platforms support seamless, compliant, and frictionless financial operations.",
      benefits: [
        "Faster and secure payment processing",
        "Enhanced financial inclusion via digital access",
        "Regulatory compliance and transaction traceability",
        "Flexible integration with existing banking systems",
        "Custom UX/UI for end-users and administrators",
      ],
      keyFeatures: [
        "PCI-DSS compliant architecture",
        "Integration with core banking and payment networks",
        "Multi-factor authentication and fraud protection",
        "Admin dashboards for transaction and user management",
      ],
      approach: [
        {
          title: "Use Case Analysis",
          description:
            "We analyze your payment workflows and target user base.",
        },
        {
          title: "Platform Design",
          description:
            "We build intuitive platforms with security, UX, and performance at the core.",
        },
        {
          title: "Integration & Compliance",
          description:
            "We integrate with banking APIs and ensure legal/regulatory standards are met.",
        },
        {
          title: "Testing & Launch",
          description:
            "Full testing of transactional flows, followed by deployment and training.",
        },
      ],
    },
  },
  {
    icon: "/lovable-uploads/services/public-sector.png",
    title: "E-Governance & Public Sector Platforms",
    description:
      "Full-scale municipal and national-level software systems for smart cities, citizen services, and digital governance.",
    slug: "e-governance-platforms",
    details: {
      overview:
        "ICD partners with governments and municipalities to build secure, citizen-centric e-governance platforms that digitize public services, enhance transparency, and improve administrative efficiency. Our systems span domains such as e-permits, smart cities, public registries, and national infrastructure management.",
      benefits: [
        "Increased transparency and accountability in government services",
        "Streamlined workflows and faster public service delivery",
        "Citizen self-service portals and digital access",
        "Interoperability with other national systems",
        "Scalable platforms for national or municipal expansion",
      ],
      keyFeatures: [
        "Citizen portals, dashboards, and mobile access",
        "Secure data storage and audit-ready reporting",
        "Multi-language and accessibility compliance",
        "Modular system design for gradual implementation",
      ],
      approach: [
        {
          title: "Stakeholder Workshops",
          description:
            "We engage agencies and end-users to define system needs and priorities.",
        },
        {
          title: "Platform Blueprinting",
          description:
            "Develop an architecture that scales with governance complexity.",
        },
        {
          title: "Development & Piloting",
          description:
            "Iterative delivery with testing in controlled environments.",
        },
        {
          title: "Rollout & Citizen Onboarding",
          description:
            "Launch the platform with training, awareness campaigns, and feedback loops.",
        },
      ],
    },
  },
  {
    icon: "/lovable-uploads/services/ai.png",
    title: "Enterprise AI & Virtual Workforce Solutions",
    description:
      "AI employee orchestration through platforms, enabling autonomous digital teams.",
    slug: "enterprise-ai-solutions",
    details: {
      overview:
        "ICD enables digital transformation through AI-powered platforms that mimic human workflows, reduce repetitive tasks, and scale knowledge work. From AI agents to intelligent RPA bots, our virtual workforce solutions enhance productivity while freeing human teams for higher-value initiatives.",
      benefits: [
        "Reduced manual workload through AI-driven automation",
        "Lower operational costs and higher throughput",
        "24/7 operational capability with minimal downtime",
        "Improved accuracy and compliance",
        "Faster onboarding and task delegation",
      ],
      keyFeatures: [
        "Natural Language Processing (NLP) agents and chatbots",
        "AI-powered document processing and analytics",
        "Integration with ERP, CRM, and enterprise platforms",
        "Scalable orchestration dashboards and logs",
      ],
      approach: [
        {
          title: "Process Mapping",
          description:
            "Identify repetitive and high-impact tasks suitable for AI automation.",
        },
        {
          title: "Model Design & Training",
          description:
            "Develop custom ML/NLP models or apply pretrained agents as needed.",
        },
        {
          title: "Platform Integration",
          description:
            "Deploy agents within your software environment using secure APIs.",
        },
        {
          title: "Performance Tuning",
          description:
            "Continuously improve virtual agents based on usage and accuracy data.",
        },
      ],
    },
  },
  {
    icon: "/lovable-uploads/services/large-scale.png",
    title: "Large-Scale, Multi-Stakeholder Project Execution",
    description:
      "Proven expertise in managing complex deployments across ministries, municipalities, and international organizations.",
    slug: "large-scale-projects",
    details: {
      overview:
        "ICD leads the execution of large-scale, multi-stakeholder projects across diverse sectors including government, infrastructure, and international development. With deep expertise in coordination, risk management, and compliance, we ensure seamless collaboration and successful outcomes in high-stakes environments.",
      benefits: [
        "Streamlined coordination among stakeholders",
        "Risk and timeline management in complex environments",
        "Compliance with national and international standards",
        "Scalable architecture for future expansion",
        "Expert handling of public-private partnerships (PPPs)",
      ],
      keyFeatures: [
        "Multi-entity coordination frameworks and governance",
        "Centralized project dashboards and status tracking",
        "Risk assessment and contingency planning",
        "End-to-end project lifecycle management",
      ],
      approach: [
        {
          title: "Initiation & Alignment",
          description:
            "Establish project vision, governance structure, and stakeholder alignment.",
        },
        {
          title: "Execution Framework",
          description:
            "Define timelines, responsibilities, KPIs, and reporting structures.",
        },
        {
          title: "Implementation & Oversight",
          description:
            "Manage execution while providing transparent tracking to all parties.",
        },
        {
          title: "Impact Evaluation",
          description:
            "Post-delivery review focused on outcomes, adoption, and lessons learned.",
        },
      ],
    },
  },
  {
    icon: "/lovable-uploads/services/training.png",
    title: "Higher Education Training & Development",
    description:
      "Comprehensive training programs designed to enhance technical skills, digital literacy, and leadership capabilities for professionals and organizations.",
    slug: "education-training",
    details: {
      overview:
        "ICD provides modern, industry-aligned training programs that equip individuals and institutions with the skills necessary to thrive in a digital economy. Our programs cover technical, managerial, and digital competencies—supporting national upskilling goals, academic institution needs, and organizational transformation initiatives.",
      benefits: [
        "Increased employability and career growth",
        "Upskilled workforce aligned with digital trends",
        "Support for national digital education strategies",
        "Enhanced institutional training capabilities",
        "Custom learning paths for different user levels",
      ],
      keyFeatures: [
        "Instructor-led, hybrid, and e-learning formats",
        "Certifications in AI, cloud, cybersecurity, and leadership",
        "Custom training portals with tracking and assessments",
        "Corporate and university partnership programs",
      ],
      approach: [
        {
          title: "Needs Analysis",
          description:
            "Assess learning gaps and organizational or institutional objectives.",
        },
        {
          title: "Curriculum Development",
          description:
            "Design tailored training programs using industry-relevant content.",
        },
        {
          title: "Delivery & Engagement",
          description:
            "Conduct interactive training through experienced facilitators.",
        },
        {
          title: "Assessment & Reporting",
          description:
            "Measure learning outcomes and provide certifications or credits.",
        },
      ],
    },
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Improved animation using Intersection Observer
    const observerOptions = {
      threshold: 0.05, // Lower threshold to trigger earlier
      rootMargin: "0px 0px -50px 0px", // Adjusted to trigger sooner
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          // Add initial animation for service cards
          if (entry.target.classList.contains("service-card")) {
            const card = entry.target;

            // Add class to trigger initial animation
            setTimeout(() => {
              card.classList.add("initial-animate");

              // Remove initial animation class after it completes
              setTimeout(() => {
                card.classList.remove("initial-animate");
              }, 1500);
            }, 300);
          }

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => {
      observer.observe(card as Element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section bg-white relative overflow-hidden py-24"
    >
      {/* Background circuit animation - moved to top for earlier rendering */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="services-pattern"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 10 L50 10 L50 50 L90 50 L90 90 L130 90 L130 130 L170 130 L170 170"
                stroke="#0047AB"
                strokeOpacity="0.01"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M190 10 L150 10 L150 50 L110 50 L110 90 L70 90 L70 130 L30 130 L30 170"
                stroke="#0047AB"
                strokeOpacity="0.01"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="50" cy="10" r="3" fill="#0047AB" fillOpacity="0.05" />
              <circle cx="90" cy="50" r="3" fill="#0047AB" fillOpacity="0.05" />
              <circle
                cx="130"
                cy="90"
                r="3"
                fill="#0047AB"
                fillOpacity="0.02"
              />
              <circle
                cx="170"
                cy="130"
                r="3"
                fill="#0047AB"
                fillOpacity="0.02"
              />
              <circle
                cx="150"
                cy="10"
                r="3"
                fill="#0047AB"
                fillOpacity="0.02"
              />
              <circle
                cx="110"
                cy="50"
                r="3"
                fill="#0047AB"
                fillOpacity="0.02"
              />
              <circle cx="70" cy="90" r="3" fill="#0047AB" fillOpacity="0.05" />
              <circle
                cx="30"
                cy="130"
                r="3"
                fill="#0047AB"
                fillOpacity="0.02"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-pattern)" />
        </svg>
      </div>

      <div className="section-content z-10">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16 text-gray-800 reveal"
        >
          Our <span className="text-icd-blue">Services</span>
        </h2>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group h-full reveal perspective-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="relative bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-6 h-full transform-gpu transition-all duration-500 
                border border-blue-600 hover:border-blue-500 shadow-sm hover:shadow-xl text-white
                group-hover:translate-y-[-10px] overflow-hidden initial-animate-container"
              >
                {/* Futuristic background elements */}
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300 
                  transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                ></div>

                <div
                  className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-800 rounded-tl-3xl 
                  opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                ></div>

                <div
                  className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500/40 to-blue-300/40 
                  rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 
                  group-hover:scale-150"
                ></div>

                {/* Image with special animation - replacing icon */}
                <div
                  className="service-icon relative z-10 mb-6 bg-blue-800 w-600 h-600 rounded-lg flex items-center 
                  justify-center group-hover:bg-blue-700 text-white overflow-hidden
                  transform-gpu transition-all duration-700 group-hover:scale-110"
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-500 h-500 object-contain service-image opacity-0 animate-fade-in transition-transform duration-700
                    group-hover:scale-125"
                  />
                </div>

                {/* Content */}
                <h3
                  className="relative z-10 text-xl font-orbitron mb-3 text-white 
                  group-hover:text-blue-100 transition-colors duration-300"
                >
                  {service.title}
                </h3>

                <p className="relative z-10 text-blue-100 group-hover:text-white transition-colors duration-300 mb-10">
                  {service.description}
                </p>

                {/* Learn More Arrow Box */}
                <Link to={`/services/${service.slug}`}>
                  <div
                    className="absolute bottom-3 right-3 z-20 w-10 h-10 bg-blue-900/80 hover:bg-blue-800 
                    rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300
                    border border-blue-600/30 hover:border-blue-500/50 transform hover:scale-110 group-hover:shadow-glow"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white transition-transform duration-300 transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </Link>

                {/* Futuristic corner accent */}
                <div
                  className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] 
                  border-t-transparent border-r-blue-800 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500"
                ></div>

                {/* Animated dots */}
                <div
                  className="absolute bottom-3 left-3 flex space-x-1 opacity-0 
                  group-hover:opacity-100 transition-all duration-500 delay-300"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse"></div>
                  <div
                    className="w-1 h-1 rounded-full bg-blue-400 animate-pulse"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                  <div
                    className="w-1 h-1 rounded-full bg-blue-300 animate-pulse"
                    style={{ animationDelay: "600ms" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS for animations */}
      <style>{`
        .initial-animate {
          animation: cardPulse 1.5s ease-in-out;
        }
        
        @keyframes cardPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .service-image {
          animation: fadeIn 1s ease-in-out forwards;
          animation-delay: 0.3s;
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .shadow-glow {
          box-shadow: 0 0 8px 2px rgba(30, 64, 175, 0.5);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
