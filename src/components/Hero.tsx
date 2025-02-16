
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 py-32 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
              Hi! I'm Dhrubajyoti Talukdar
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 fade-in-up">
              Frontend Developer crafting beautiful and functional web applications
            </p>
            <div className="fade-in-up" style={{ animationDelay: "200ms" }}>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary dark:text-black hover:bg-primary/90 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="hidden lg:block fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl animate-pulse" />
              <img
                src="../dev-ed-wave.png"
                alt="Hero illustration"
                className="w-full h-auto rounded-2xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
