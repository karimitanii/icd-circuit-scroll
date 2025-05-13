import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from "lucide-react"; // Import icons

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section bg-white relative overflow-hidden py-24"
    >
      {/* Circuit background pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 z-0"></div>

      <div className="section-content z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16 text-gray-800">
          Get in <span className="text-icd-blue">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="reveal">
            <h3 className="text-2xl font-orbitron mb-6 text-blue-500">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-8">
              Have a question or want to discuss a potential project? Reach out
              to us directly!
            </p>

            <div className="mb-6">
              <div className="mb-6 flex items-center space-x-2">
                <Mail size={16} color="black" />
                <span className="text-gray-600 font-robotomono">
                  info@icd-me.com
                </span>
              </div>
            </div>

            <div className="mb-6 flex items-center space-x-2">
              <Phone size={16} color="black" />
              <span className="text-gray-600 font-robotomono">
                PUT NUMBER !!!!!!!!
              </span>
            </div>

            <div className="mb-6 flex items-center space-x-2">
              <MapPin size={16} color="black" />
              <span className="text-gray-600 font-robotomono">
                Beirut, Downtown, Allenby St, Py136 bldg, 1st floor
              </span>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <h3 className="text-2xl font-orbitron mb-4 text-blue-500">
                Careers at ICD
              </h3>
              <p className="text-gray-600 mb-4">
                Looking to join our team of innovators? We're always on the
                lookout for talented individuals to help us shape the future of
                technology.
              </p>
              <p className="text-gray-600">
                Send your CV and cover letter to{" "}
                <a
                  className="text-icd-blue"
                  href="mailto:icd-careers@gmail.com"
                >
                  icd-careers@gmail.com
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
