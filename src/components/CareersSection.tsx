import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";

function CareersSection() {
  return (
    <section
      id="careers"
      className="section bg-white relative overflow-hidden py-24"
    >
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 z-0"></div>

      <div className="section-content z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16 text-gray-800 reveal">
          Careers at<span className="text-icd-blue"> ICD</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="reveal bg-white p-10 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl md:text-3xl font-orbitron mb-6 text-icd-blue">
              Looking to join our team of innovators?
            </h3>
            
            <p className="text-gray-600 mb-8">
              We're always looking for talented individuals to join our innovative team. If you're passionate about technology and want to be part of creating the future, we'd love to hear from you.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 p-6 bg-blue-50 rounded-lg">
              <a 
                href="mailto:icd-careers@gmail.com" 
                className="flex items-center justify-center w-16 h-16 bg-icd-blue rounded-full text-white icon-spin cursor-pointer hover:bg-blue-700 transition-colors"
                aria-label="Send email to careers"
              >
                <Mail size={28} />
              </a>
              
              <div>
                <p className="text-gray-700 font-medium mb-2">Send your resume to:</p>
                <a
                  className="text-icd-blue hover:text-blue-700 font-bold text-lg flex items-center gap-2 transition-colors"
                  href="mailto:icd-careers@gmail.com"
                >
                  <span>icd-careers@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersSection;
