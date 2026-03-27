import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";
import heroBg from "@/assets/hero-bg.jpg";
import spiritImg from "@/assets/spirit.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Floating spirit */}
      <motion.img
        src={spiritImg}
        alt=""
        className="absolute top-16 right-[10%] w-20 h-20 opacity-60 hidden md:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        loading="lazy"
        width={512}
        height={512}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 pt-24 pb-16">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm font-body font-semibold tracking-widest uppercase text-ghibli-forest mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer
          </motion.p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 ghibli-text-gradient">
            Builder of Scalable Web Applications & Platforms
          </h1>
          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            I am a Node.js Developer with 2+ years of experience specializing in building scalable web applications and cloud deployment. I help businesses build fast, secure, and production-ready applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-primary text-primary font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
              <img
                src={profileImg}
                alt="Developer portrait in Ghibli style"
                className="w-full h-full object-cover"
                width={320}
                height={320}
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-ghibli-gold/30 animate-sway" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 rounded-full bg-foreground/40" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
