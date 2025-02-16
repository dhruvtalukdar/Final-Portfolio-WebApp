
import { useState } from "react";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission with Supabase
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">Or reach out directly:</p>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center mt-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail size={18} className="mr-2" />
              your.email@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
