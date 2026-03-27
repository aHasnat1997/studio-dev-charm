import { motion } from "framer-motion";
import { Code2, Layout, Database, Cloud } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Backend Development",
    skills: ["Node.js, Express.js, Nest.js", "REST API Development", "Authentication & Authorization", "Scalable Architecture Design"],
  },
  {
    icon: Layout,
    title: "Frontend Development",
    skills: ["React.js, Next.js", "State Management (Redux, Zustand)", "Responsive UI Development"],
  },
  {
    icon: Database,
    title: "Database & ORM",
    skills: ["PostgreSQL, MongoDB", "Prisma ORM, Mongoose", "Database Design & Optimization"],
  },
  {
    icon: Cloud,
    title: "DevOps & Deployment",
    skills: ["Docker, VPS Deployment", "CI/CD Pipelines", "Cloudflare, Domain & DNS Management"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 ghibli-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold ghibli-text-gradient mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-ghibli-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="ghibli-card rounded-xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm font-body text-muted-foreground flex items-start gap-2">
                    <span className="text-ghibli-gold mt-1">✦</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
