import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 ghibli-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold ghibli-text-gradient mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-ghibli-gold mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ghibli-card rounded-xl p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Full Stack Developer
                </h3>
                <p className="text-sm font-body text-ghibli-forest font-semibold mb-4">
                  May 2025 – Present
                </p>
                <ul className="space-y-3">
                  {[
                    "Developed scalable backend APIs and services",
                    "Built modern frontend applications for real-world use cases",
                    "Designed and managed databases using PostgreSQL and MongoDB",
                    "Deployed and maintained applications using Docker and VPS",
                    "Collaborated with team members to deliver production-ready solutions",
                  ].map((item) => (
                    <li key={item} className="text-sm font-body text-muted-foreground flex items-start gap-2">
                      <span className="text-ghibli-gold mt-0.5">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* What I Do Best */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-display font-bold text-center ghibli-text-gradient mb-8">
              What I Do Best
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Build scalable SaaS applications",
                "Design clean & maintainable backend systems",
                "Optimize application performance & speed",
                "Deploy secure, production-ready systems",
                "Solve complex technical problems efficiently",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="ghibli-card rounded-lg p-4 text-center"
                >
                  <p className="text-sm font-body font-medium text-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
