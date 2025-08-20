import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Blog } from "@/components/sections/Blog"
import { Contact } from "@/components/sections/Contact"
import { PixelCursor } from "@/components/ui/pixel-cursor"

const Index = () => {
  return (
    <div className="min-h-screen">
      <PixelCursor />
      <Hero />
      <About />
      <Experience />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
