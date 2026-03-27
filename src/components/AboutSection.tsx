import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 watercolor-wash">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold ghibli-text-gradient mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-ghibli-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-xl ghibli-border-sketch"
          >
            <img
              src={aboutBg}
              alt="Cozy Ghibli-style developer workspace"
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
              width={1920}
              height={800}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 font-body text-foreground/85 leading-relaxed"
          >
            <p>
              I am a Full Stack JavaScript Developer with over 3+ years of hands-on experience and 1 year of professional industry experience building modern, scalable web applications.
            </p>
            <p>
              Currently, I work as a developer where I design and develop high-performance backend systems, APIs, and real-world business applications.
            </p>
            <p>
              I specialize in TypeScript-based architectures on production-ready applications, focusing on building clean, maintainable, and scalable systems.
            </p>
            <p>
              My expertise includes backend development, database design, and deploying applications in cloud and VPS environments with performance and security in mind.
            </p>
            <p className="font-semibold text-ghibli-forest">
              I am passionate about solving complex problems, optimizing system performance, and delivering reliable software solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
