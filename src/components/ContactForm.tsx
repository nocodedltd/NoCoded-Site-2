
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    automationProcess: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is updated
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://nocoded-n8n-u41031.vm.elestio.app/webhook-test/f124e193-4f2c-408e-a221-255a0ab03f67", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "contact_form"
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          automationProcess: ""
        });
        
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon.",
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-card">
      {isSubmitted ? (
        <div className="text-center py-6">
          <h4 className="text-lg font-semibold text-primary mb-2">Thank You!</h4>
          <p className="text-sm text-muted-foreground">
            We'll get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.name ? "border-destructive" : "border-input"
              } bg-background focus:outline-none focus:ring-2 focus:ring-ring`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.email ? "border-destructive" : "border-input"
              } bg-background focus:outline-none focus:ring-2 focus:ring-ring`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">
              Company Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.company ? "border-destructive" : "border-input"
              } bg-background focus:outline-none focus:ring-2 focus:ring-ring`}
            />
            {errors.company && (
              <p className="mt-1 text-sm text-destructive">{errors.company}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="automationProcess" className="block text-sm font-medium mb-1">
              What's the #1 process you wish you could automate? <span className="text-muted-foreground">(Optional)</span>
            </label>
            <textarea
              id="automationProcess"
              name="automationProcess"
              value={formData.automationProcess}
              onChange={handleChange}
              rows={3}
              placeholder="e.g., Lead data entry, invoice processing, customer onboarding..."
              className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground font-medium px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-70 transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Get In Touch"}
          </button>
        </form>
      )}
    </div>
  );
}
