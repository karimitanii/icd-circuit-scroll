import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/components/ServicesSection";

interface Service {
  icon: string;
  title: string;
  description: string;
  slug: string;
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the service with the matching slug
    const foundService = services.find((s) => s.slug === slug);
    setService(foundService || null);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-icd-dark flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-icd-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-icd-dark flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-8">The service you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-icd-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-icd-dark to-black min-h-screen text-white">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="flex items-center text-sm text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link
              to="/#services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">{service.title}</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-700 opacity-20 clip-path-diagonal"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-950 to-transparent"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="bg-blue-800 p-6 rounded-xl w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 md:w-24 md:h-24 object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-4">
                  {service.title}
                </h1>
                <p className="text-lg text-blue-100">{service.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/50">
              <h2 className="text-2xl font-bold font-orbitron mb-4">
                Overview
              </h2>
              <p className="mb-4">
                Our {service.title} services provide comprehensive solutions
                tailored to your organization's specific needs. With years of
                experience and a team of experts, we deliver cutting-edge
                solutions that drive innovation and efficiency.
              </p>
              <p>
                We work closely with our clients to understand their unique
                challenges and develop customized strategies that align with
                their business objectives and technological requirements.
              </p>
            </section>

            <section className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/50">
              <h2 className="text-2xl font-bold font-orbitron mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-blue-300">
                      Customized Solutions
                    </strong>{" "}
                    - Tailored to your specific business requirements and
                    objectives
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-blue-300">Expert Team</strong> -
                    Highly skilled professionals with extensive industry
                    experience
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-blue-300">
                      Innovative Approach
                    </strong>{" "}
                    - Leveraging the latest technologies and methodologies
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-blue-300">
                      Comprehensive Support
                    </strong>{" "}
                    - Ongoing assistance and maintenance to ensure optimal
                    performance
                  </div>
                </li>
              </ul>
            </section>

            <section className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/50">
              <h2 className="text-2xl font-bold font-orbitron mb-4">
                Our Approach
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300">
                      Assessment & Analysis
                    </h3>
                    <p>
                      We begin by thoroughly understanding your current systems,
                      processes, and challenges to identify opportunities for
                      improvement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300">
                      Strategy Development
                    </h3>
                    <p>
                      Our team develops a comprehensive strategy tailored to
                      your specific needs and objectives, outlining clear goals
                      and deliverables.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300">
                      Implementation
                    </h3>
                    <p>
                      We execute the strategy with precision, ensuring minimal
                      disruption to your operations while maximizing efficiency
                      and effectiveness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300">
                      Monitoring & Optimization
                    </h3>
                    <p>
                      We continuously monitor performance and make necessary
                      adjustments to ensure optimal results and return on
                      investment.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/50">
              <h2 className="text-2xl font-bold font-orbitron mb-4">
                Benefits
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Increased operational efficiency
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Cost reduction and optimization
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Enhanced competitive advantage
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Improved scalability and flexibility
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Better decision-making capabilities
                </li>
              </ul>
            </section>

            <section className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/50">
              <h2 className="text-2xl font-bold font-orbitron mb-4">
                Contact Us
              </h2>
              <p className="mb-6">
                Interested in our {service.title} services? Get in touch with
                our team to discuss your specific needs and how we can help.
              </p>
              <Link
                to="/#contact"
                className="block w-full py-3 px-4 bg-blue-700 hover:bg-blue-600 text-white text-center rounded-lg transition-colors font-medium"
              >
                Request a Consultation
              </Link>
            </section>

            <section className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/50">
              <h2 className="text-2xl font-bold font-orbitron mb-4">
                Related Services
              </h2>
              <ul className="space-y-4">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .slice(0, 3)
                  .map((relatedService, index) => (
                    <li key={index}>
                      <Link
                        to={`/services/${relatedService.slug}`}
                        className="block p-4 bg-blue-800/30 hover:bg-blue-800/50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center">
                          <img
                            src={relatedService.icon}
                            alt={relatedService.title}
                            className="w-10 h-10 mr-3 object-contain"
                          />
                          <span>{relatedService.title}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />

      {/* Add CSS for clip path */}
      <style>{`
        .clip-path-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 100%);
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;
