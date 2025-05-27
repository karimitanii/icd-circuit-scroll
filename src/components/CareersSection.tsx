import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";

function CareersSection() {
  return (
    <section
      id="careers"
      className="section bg-white relative overflow-hidden py-24"
    >
      {/* Background circuit animation - updated to match services section */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="careers-pattern"
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
              <circle cx="130" cy="90" r="3" fill="#0047AB" fillOpacity="0.02" />
              <circle cx="170" cy="130" r="3" fill="#0047AB" fillOpacity="0.02" />
              <circle cx="150" cy="10" r="3" fill="#0047AB" fillOpacity="0.02" />
              <circle cx="110" cy="50" r="3" fill="#0047AB" fillOpacity="0.02" />
              <circle cx="70" cy="90" r="3" fill="#0047AB" fillOpacity="0.05" />
              <circle cx="30" cy="130" r="3" fill="#0047AB" fillOpacity="0.02" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#careers-pattern)" />
        </svg>
      </div>

      <div className="section-content z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16 text-gray-800 reveal">
          Careers at<span className="text-icd-blue"> ICD</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="reveal bg-white p-10 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl md:text-2xl font-orbitron mb-6 text-icd-blue">
              Looking to join our team of innovators?
            </h3>

            <p className="text-gray-600 mb-8"></p>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 p-6 bg-white-50 rounded-lg">
              <a
                href="mailto:icd-careers@gmail.com"
                className="flex items-center justify-center w-16 h-16 bg-icd-blue rounded-full text-white icon-spin cursor-pointer hover:bg-blue-700 transition-colors"
                aria-label="Send email to careers"
              >
                <Mail size={24} />
              </a>

              <div>
                <p className="text-gray-700 font-medium mb-2">
                  Send your resume to:
                </p>
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
