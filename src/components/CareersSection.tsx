import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from "lucide-react"; // Import icons

function ContactSection() {
  return (
    <section
      id="careers"
      className="section bg-white relative overflow-hidden py-24"
    >
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 z-0"></div>

      <div className="section-content z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16 text-gray-800">
          Careers at<span className="text-icd-blue"> ICD</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="reveal bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-orbitron mb-4 text-blue-500">
              Looking to join our team of innovators?
            </h3>

            <p className="text-gray-600">
              <a
                className="text-icd-blue hover:text-blue-700"
                href="mailto:icd-careers@gmail.com"
              >
                <Mail size={36} />
                <span>icd-careers@gmail.com </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
