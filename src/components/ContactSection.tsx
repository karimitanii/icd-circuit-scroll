
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      email: "",
      message: ""
    };
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 1500);
    }
  };
  
  return (
    <section 
      id="contact" 
      className="section bg-gradient-to-b from-black to-icd-dark relative overflow-hidden py-24"
    >
      {/* Circuit background pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 z-0"></div>
      
      <div className="section-content z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16">
          Get in <span className="text-icd-blue">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="reveal">
            <h3 className="text-2xl font-orbitron mb-6">Contact Us</h3>
            <p className="text-white/80 mb-8">
              Have a question or want to discuss a potential project? Reach out to us using the form or email us directly.
            </p>
            
            <div className="mb-6">
              <h4 className="font-orbitron text-icd-blue mb-2">General Inquiries</h4>
              <p className="text-white/80 font-robotomono">icd@gmail.com</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-orbitron text-icd-blue mb-2">Career Opportunities</h4>
              <p className="text-white/80 font-robotomono">icd-careers@gmail.com</p>
            </div>
            
            <div className="border-t border-white/10 pt-6 mt-8">
              <h3 className="text-2xl font-orbitron mb-4">Careers at ICD</h3>
              <p className="text-white/80 mb-4">
                Looking to join our team of innovators? We're always on the lookout for talented individuals to help us shape the future of technology.
              </p>
              <p className="text-white/80">
                Send your CV and cover letter to <span className="text-icd-blue">icd-careers@gmail.com</span> with the subject line "ICD Application - [Your Name]"
              </p>
            </div>
          </div>
          
          <div className="reveal">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-white/80">Name <span className="text-icd-blue">*</span></label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-white/10 border ${formErrors.name ? 'border-red-500' : 'border-white/20'} rounded-md px-4 py-2 text-white focus:outline-none focus:border-icd-blue transition-colors`}
                  placeholder="Your name"
                />
                {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-white/80">Email <span className="text-icd-blue">*</span></label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white/10 border ${formErrors.email ? 'border-red-500' : 'border-white/20'} rounded-md px-4 py-2 text-white focus:outline-none focus:border-icd-blue transition-colors`}
                  placeholder="your.email@example.com"
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 text-white/80">Subject</label>
                <select 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:border-icd-blue transition-colors"
                >
                  <option value="" className="bg-icd-dark">Select a subject</option>
                  <option value="General Inquiry" className="bg-icd-dark">General Inquiry</option>
                  <option value="Project Request" className="bg-icd-dark">Project Request</option>
                  <option value="Partnership" className="bg-icd-dark">Partnership</option>
                  <option value="Other" className="bg-icd-dark">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-white/80">Message <span className="text-icd-blue">*</span></label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-white/10 border ${formErrors.message ? 'border-red-500' : 'border-white/20'} rounded-md px-4 py-2 text-white focus:outline-none focus:border-icd-blue transition-colors min-h-[150px]`}
                  placeholder="Your message"
                ></textarea>
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-icd-blue hover:bg-icd-blue/90 text-white font-medium py-2.5 px-5 rounded-md transition-colors flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
