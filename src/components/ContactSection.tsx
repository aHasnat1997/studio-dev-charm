import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 watercolor-wash">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold ghibli-text-gradient mb-4">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-ghibli-gold mx-auto rounded-full mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-md mx-auto">
            Let's build something great together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto"
        >
          <a
            href="mailto:your@email.com"
            className="ghibli-card rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-body text-muted-foreground">Email</p>
              <p className="font-body font-semibold text-foreground text-sm">your@email.com</p>
            </div>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="ghibli-card rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Github className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-body text-muted-foreground">GitHub</p>
              <p className="font-body font-semibold text-foreground text-sm">github.com/yourusername</p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="ghibli-card rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-body text-muted-foreground">LinkedIn</p>
              <p className="font-body font-semibold text-foreground text-sm">linkedin.com/in/yourusername</p>
            </div>
          </a>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 max-w-lg mx-auto text-center"
        >
          <div className="ghibli-card rounded-xl p-8">
            <p className="font-display italic text-lg text-foreground/80 mb-4">
              "Great developer to work with. Delivered high-quality work on time."
            </p>
            <p className="font-body text-sm text-muted-foreground font-semibold">
              — Client Name
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
