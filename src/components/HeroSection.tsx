import { motion } from "framer-motion";
import heroBgDark from "@/assets/hero-bg-dark.jpg";
import spiritImg from "@/assets/spirit.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src={heroBgDark}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Floating spirit */}
      <motion.img
        src={spiritImg}
        alt=""
        className="absolute top-20 left-[15%] w-16 h-16 opacity-40 hidden md:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        loading="lazy"
        width={512}
        height={512}
      />

      {/* Firefly particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-ghibli-gold/60 hidden md:block"
          style={{
            top: `${20 + Math.random() * 50}%`,
            left: `${10 + Math.random() * 40}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center pt-24 pb-16">
        <motion.div
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm font-body font-semibold tracking-widest uppercase text-accent mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer
          </motion.p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-foreground">
            Builder of Scalable{" "}
            <span className="ghibli-text-gradient">Web Applications</span>{" "}
            & Platforms
          </h1>
          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            I am a Node.js Developer with 2+ years of experience specializing
            in building scalable web applications and cloud deployment. I help
            businesses build fast, secure, and production-ready applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-accent text-accent font-body font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Contact Me
            </a>
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
