import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SaaS Resume Builder",
    description: "A full-featured SaaS application that allows users to create, customize, and export professional resumes with a modern editing experience.",
    tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL"],
    features: [
      "Dynamic resume editor with live preview",
      "PDF export system",
      "User authentication and data management",
    ],
    impact: [
      "Designed scalable multi-user architecture",
      "Optimized performance for real-time editing",
      "Built reusable components for faster development",
    ],
  },
  {
    title: "Backend API System for Business Platform",
    description: "A scalable backend system designed to handle business operations, user management, and secure data handling.",
    tech: ["Node.js", "Express/Nest", "MongoDB", "Prisma"],
    features: [
      "Secure authentication system",
      "Role-based access control",
      "Modular and scalable API structure",
    ],
    impact: [
      "Improved system maintainability",
      "Built clean and reusable backend architecture",
      "Ensured high performance under load",
    ],
  },
  {
    title: "File Upload & Media Management System",
    description: "A robust file upload system with preview, cloud storage integration, and file management capabilities.",
    tech: ["React.js", "Node.js", "Cloudinary", "TypeScript"],
    features: [
      "Multiple file upload support",
      "Real-time preview system",
      "Cloud storage integration with file deletion",
    ],
    impact: [
      "Enhanced user experience with smooth uploads",
      "Integrated scalable media handling system",
      "Reduced server load using cloud storage",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 watercolor-wash">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold ghibli-text-gradient mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-ghibli-gold mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="ghibli-card rounded-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                </div>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-body font-semibold rounded-full bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-ghibli-forest mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((f) => (
                        <li key={f} className="text-sm font-body text-muted-foreground flex items-start gap-2">
                          <span className="text-ghibli-gold mt-0.5">✦</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-ghibli-forest mb-3">
                      Impact
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((imp) => (
                        <li key={imp} className="text-sm font-body text-muted-foreground flex items-start gap-2">
                          <span className="text-ghibli-sky mt-0.5">◆</span>
                          {imp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
