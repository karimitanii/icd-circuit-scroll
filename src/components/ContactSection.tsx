import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

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
              to us using the form or email us directly.
            </p>

            <div className="mb-6">
              <h4 className="font-orbitron text-icd-blue mb-2">
                General Inquiries
              </h4>
              <p className="text-gray-600 font-robotomono">icd@gmail.com</p>
            </div>

            <div className="mb-6">
              <h4 className="font-orbitron text-icd-blue mb-2">
                Career Opportunities
              </h4>
              <p className="text-gray-600 font-robotomono">
                icd-careers@gmail.com
              </p>
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
                <span className="text-icd-blue">icd-careers@gmail.com</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
